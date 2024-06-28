import { useNavigate } from 'react-router-dom';
import Forms from '../components/Forms';

const HomePage = () => {
  const navigate = useNavigate();

  const checkAppointment = async (data) => {
    console.log('Hello, I am homepage', data);

    try {
      // const response = await fetch('some', 'POST', data);
      // const json = await response.json();
      // app.addUser(json);
      // navigate("/calendar");
      throw new Error('You already have an appointment');
    } catch (err) {
      console.error(err);
      console.info(err);
      console.log(err);
      navigate('/check-email');
    }

  };

  return (
    <div>
      <Forms callback={checkAppointment} />
    </div>
  );
};
export default HomePage;
