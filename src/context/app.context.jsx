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
  pickService: () => undefined,
  showInfoModal: false,
  closeModalHandler: () => undefined,
  modalHandler: () => undefined,
  modalTitle: undefined,
  modalContent: undefined,
  hideCalendar: () => undefined
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
    showInfoModal: false,
    showCalendar: false,
    modalTitle: null,
    modalContent: null,
    modalType: null
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

  useEffect(() => {
    intitDataLoading();
  }, []);

  const confirmUserData = (data) => {
    const {service, ...user} = data;
    localStorage.setItem(USERIDSTORAGE, user.uid);
    const serviceData = state.services.items.find(el => el._id === service);
    setState({...state, user: user, selectedService: serviceData, showCalendar: true});
  };

  const closeModalHandler = () => {
    setState({...state, showInfoModal: false, modalContent: null, modalTitle: null});
  };

  const modalHandler = ({ title, content }) => {
    setState({...state, showInfoModal: true, modalContent: content, modalTitle: title});
  };

  const hideCalendar = () => setState({...state, showCalendar: false});

  return {
    ...state,
    confirmUserData,
    closeModalHandler,
    modalHandler,
    hideCalendar
  };
}