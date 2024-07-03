import UserForm from '../components/UserForm';
import { ApiError, apiGet } from '../utils/api';
import { useAppContext } from '../context/app.context';
import AppointmentsInfo from '../components/AppointmentsInfo';

const UserInfoView = () => {
  const {confirmUserData, modalHandler} = useAppContext();

  const checkAppointment = async (data) => {

    try {
      const response = await apiGet('appointments/user-validation', 'POST', data);
      if('uid' in response){
        confirmUserData({uid: response.uid, ...data});
      }else{
        const {appointments} = response;

        modalHandler({
          title: 'Modal.YouHaveAppointments',
          content: () => <AppointmentsInfo appointments={appointments} />
        });
      }
    } catch (error) {
      if (error instanceof ApiError) {
        error.errors.forEach(err => {
          console.error(`Error in ${err.path}: ${err.msg}`);
        });
      } else {
        console.error('Unexpected error:', error.message);
      }
    }

  };

  return (
    <UserForm callback={checkAppointment} />
  );
};

export default UserInfoView;
