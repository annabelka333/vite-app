import { useTranslation } from 'react-i18next';
import { useAppContext } from '../context/app.context';
import CalendarView from '../views/appointments.view';
import UserInfoView from '../views/user-info.view';

const LandingPage = () => {
  const {t} = useTranslation();
  const {showCalendar, hideCalendar} = useAppContext();

  if(showCalendar){
    return (
      <div>
        <button onClick={hideCalendar} className='py-1 px-4 uppercase bg-neutral-200 rounded-md'>{t('GoBack')}</button>
        <CalendarView />
      </div>
    );
  }

  return (
    <UserInfoView />
  );
};
export default LandingPage;
