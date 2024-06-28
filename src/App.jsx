import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";
import HomePage from "./pages/home.page.jsx";
import ErrorPage from "./pages/error.page.jsx";
import AppointmentPage from "./pages/appointment.page.jsx";
import Calendar from "./pages/calendar.page.jsx";
import ConfirmationPage from "./pages/confirmation.page.jsx";
import MainLayout from "./layouts/main.layout.jsx";

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
    // <AppContext value={}>
      <Router>
        <h1 className="text-3xl font-bold underline">
          {client ? client.name : "Hello world"}
        </h1>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/appointment" element={<AppointmentPage />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/confirmation" element={<ConfirmationPage />} />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    // </AppContext>
  );
}

export default App;
