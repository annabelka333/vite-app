import { useCallback, useEffect, useState } from 'react';
import { apiGet } from '../utils/api';

export const useAppointments = () => {
  const [state, setState] = useState({
    loading: true,
    appointments: []
  });

  const loadData = useCallback(async () => {
    const newState = state;
    try {
      newState.appointments = await apiGet('appointments');
    } catch (error) {
      console.log(error);
    } finally {
      newState.loading = false;
    }

    setState({...newState});
  });

  useEffect(()=>{
    loadData();
  },[1]);

  return state;
};