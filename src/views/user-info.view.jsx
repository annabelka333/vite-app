import UserForm from '../components/UserForm';
import { ApiError, apiGet } from '../utils/api';
import { useAppContext } from '../context/app.context';

const UserInfoView = () => {
  const {confirmUserData} = useAppContext();

  const checkAppointment = async (data) => {

    try {
      const {uid} = await apiGet('appointments/user-validation', 'POST', data);
      confirmUserData({uid: uid, ...data});
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
