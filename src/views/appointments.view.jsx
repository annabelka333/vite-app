import Calendar from '../components/Calendar';
import Loader from '../components/loader';
import { useAppContext } from '../context/app.context';
import { useAppointments } from '../hooks/useAppointments.hook';
import { fillMonth } from '../utils/commons';

const AppointmentsView = () => {
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

  if(loading){
    return <Loader />;
  }

  const month = fillMonth();

  console.log(month);
  return (
    <>
      <h1 className='page-title'>Hello, {user.fullName}</h1>

      <p>Pick your appointment for {selectedService.name}</p>
      <Calendar data={appointments}/>
    </>
  );
};

export default AppointmentsView;
