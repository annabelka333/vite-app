import Calendar from '../components/Calendar';
import { useAppContext } from '../context/app.context';

const CalendarPage = () => {
  const context = useAppContext();

  // console.log(context);


  if(!context.selectedService){
    return (
      <div>Service should be selected</div>
    );
  }

  if(!context.user){
    return (
      <div>User data should be filled</div>
    );
  }


  return (
    <div>
      <h1>Calendar Page</h1>
      <Calendar />
    </div>
  );
};

export default CalendarPage;
