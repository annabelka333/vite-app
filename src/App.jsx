import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";
import Forms from "./Forms";
import HomePage from "./pages/home.page.jsx";
import ErrorPage from "./pages/error.page.jsx";
import AppointmentPage from "./pages/appointment.page.jsx";
import Calendar from "./pages/calendar.page.jsx";
import ConfirmationPage from "./pages/confirmation.page.jsx";

function App() {
  const [count, setCount] = useState(0);
  const [client, setClient] = useState(null);
  useEffect(() => {
    async function getClientData() {
      const response = await fetch("/data.json");
      const data = await response.json();
      setClient(data[0]);
    }

    getClientData();
  }, []);
  return (
    <Router>
      <div>
        <h1 className="text-3xl font-bold underline">
          {client ? client.name : "Hello world"}
        </h1>
        <Forms />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/appointment" element={<AppointmentPage />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/confirmation" element={<ConfirmationPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
