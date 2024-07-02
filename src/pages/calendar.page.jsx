import Calendar from '../components/Calendar';
import { useAppContext } from '../context/app.context';
import { useAppointments } from '../hooks/useAppointments.hook';
import Loader from '../components/loader';



const CalendarPage = () => {
  const {loading, appointments} = useAppointments();
  const {selectedService, user} = useAppContext();

  if(!selectedService){
    return (
      <div>Service should be selected</div>
    );
  }

  if(!user){
    return (
      <div>User data should be filled</div>
    );
  }


  return (
    <>
      <h1 className='page-title'>Calendar Page</h1>
      {
        loading ? <Loader /> : <Calendar />
      }
    </>
  );
};

export default CalendarPage;
