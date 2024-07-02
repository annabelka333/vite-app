import { useAppContext } from '../context/app.context';
import CalendarView from '../views/appointments.view';
import UserInfoView from '../views/user-info.view';

const LandingPage = () => {
  const {showCalendar} = useAppContext();

  if(showCalendar){
    return (
      <div>
        <CalendarView />
      </div>
    );
  }

  return (
    <UserInfoView />
  );
};
export default LandingPage;
