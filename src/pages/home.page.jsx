import { useNavigate } from 'react-router-dom';
import UserForm from '../components/UserForm';
import { ApiError, apiGet } from '../utils/api';
import { KEYSESSIONSTORAGE } from '../utils/constants';
import { useAppContext } from '../context/app.context';

const HomePage = () => {
  const navigate = useNavigate();
  const context = useAppContext();

  const checkAppointment = async (data) => {
    console.log('Hello, I am homepage', data);

    try {
      const {token, uid} = await apiGet('appointments/user-validation', 'POST', data);


      localStorage.setItem(KEYSESSIONSTORAGE, token);
      context.setUserData({_id: uid, ...data});
      context.pickService(data.service);

      console.log(token, uid);
      navigate('/calendar');
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
    <div>
      <UserForm callback={checkAppointment} />
    </div>
  );
};
export default HomePage;
