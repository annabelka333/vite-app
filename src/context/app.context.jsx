import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState
} from 'react';
import { getUserToken } from '../utils/commons';
import { apiGet } from '../utils/api';

export const appContext = createContext({
  user: undefined,
  services: undefined,
  loading: true,
  selectedService: undefined,
  setUserData: () => undefined,
  pickService: () => undefined
});

export function useAppContext() {
  return useContext(appContext);
}

export default function ProvideAppContext({ children }) {
  const context = useProvideAppContext();
  return (
    <appContext.Provider value={context}>
      {children}
    </appContext.Provider>
  );
}

export function useProvideAppContext() {
  const [state, setState] = useState({
    services: undefined,
    user: undefined,
    selectedService: undefined,
    loading: true,
  });

  const intitDataLoading = useCallback(async () => {
    const userToken = getUserToken();
    const newState = state;

    try {
      if (userToken) {
        newState.user = await apiGet('users/' + userToken.uid);
      }
      newState.services = await apiGet('services');
    } catch (err) {
      console.log(err);
    } finally {
      //Its a fake DATA
      setState({ ...newState, loading: false});
    }



  }, []);


  useEffect(() => {
    intitDataLoading();
  }, []);

  const setUserData = (data) => {
    setState({...state, user: data});
  };

  const pickService = (value) => {
    setState({...state, selectedService: value});
  };

  console.log(state);

  return {
    ...state,
    setUserData,
    pickService
  };
}