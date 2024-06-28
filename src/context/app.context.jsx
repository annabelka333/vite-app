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
  changeLanguage: undefined,
  loading: true,
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
    loading: true,
  });

  const intitDataLoading = useCallback(async () => {
    const userToken = getUserToken();
    const newState = state;

    try {
      if (userToken) {
        newState.user = await apiGet('user/' + userToken.id);
      }
      newState.services = await apiGet('services');
    } catch (err) {
      console.log(err);
    } finally {
      setState({ ...newState, loading: false });
    }
  }, []);


  useEffect(() => {
    intitDataLoading();
  }, []);


  console.log(state);

  return state;
}