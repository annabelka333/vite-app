import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState
} from 'react';
import { apiGet } from '../utils/api';
import { USERIDSTORAGE } from '../utils/constants';

export const appContext = createContext({
  user: undefined,
  services: undefined,
  loading: true,
  selectedService: undefined,
  showCalendar: false,
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
    showCalendar: false,
  });

  const intitDataLoading = useCallback(async () => {
    const uid = localStorage.getItem(USERIDSTORAGE);
    const newState = state;

    try {
      if (uid) {
        newState.user = await apiGet('appointments/' + uid);
      }
      newState.services = await apiGet('services');
    } catch (err) {
      console.log(err);
    } finally {
      setState({ ...newState, loading: false});
    }

  }, []);

  const confirmUserData = (data) => {
    const {service, ...user} = data;
    localStorage.setItem(USERIDSTORAGE, user.uid);
    setState({...state, user: user, selectedService: service, showCalendar: true});
  };

  useEffect(() => {
    intitDataLoading();
  }, []);

  return {
    ...state,
    confirmUserData
  };
}