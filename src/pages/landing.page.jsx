import { useTranslation } from 'react-i18next';
import { useAppContext } from '../context/app.context';
import CalendarView from '../views/appointments.view';
import UserInfoView from '../views/user-info.view';
import Button from '../components/Button';

const LandingPage = () => {
  const {t} = useTranslation();
  const {showCalendar, hideCalendar} = useAppContext();

  if(showCalendar){
    return (
      <Wrapper>
        <Button onClick={hideCalendar}>{t('GoBack')}</Button>
        <CalendarView />
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <UserInfoView />
    </Wrapper>
  );
};

const Wrapper = ({ children }) => <div className='flex items-center justify-center flex-1'>{children}</div>;

export default LandingPage;
