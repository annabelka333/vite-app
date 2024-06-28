import { Link, useNavigate } from "react-router-dom";
import Forms from "../components/Forms";

const HomePage = () => {
  const app = useAppContext();
  const navigate = useNavigate();
  const checkAppointment = async (data) => {
    console.log("Hello, I am homepage", data);

    try {
      // const response = await fetch('some', 'POST', data);
      // const json = await response.json();
      // app.addUser(json);
      // navigate("/calendar");
      throw new Error('You already have an appointment');
    } catch (err) {
      console.error(err);
      console.info(err);
      console.log(err)
      navigate('/check-email');
    }

  }
  return (
    <div>
      <h1>Home Page</h1>
      <Forms callback={checkAppointment} />
      <ul>
        <li>
          <Link to="/appointment">Go to Appointment</Link>
        </li>
        <li>
          <Link to="/calendar">Go to Calendar</Link>
        </li>
        <li>
          <Link to="/confirmation">Go to Confirmation</Link>
        </li>
      </ul>
    </div>
  );
};
export default HomePage;
