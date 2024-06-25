import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
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
