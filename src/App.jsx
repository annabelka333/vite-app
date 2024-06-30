import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/home.page.jsx';
import ErrorPage from './pages/error.page.jsx';
import AppointmentPage from './pages/appointment.page.jsx';
import Calendar from './pages/calendar.page.jsx';
import ConfirmationPage from './pages/confirmation.page.jsx';
import MainLayout from './layouts/main.layout.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: 'appointment',
        element: <AppointmentPage />
      },
      {
        path: 'calendar',
        element: <Calendar />
      },
      {
        path: 'manager',
        element: <ConfirmationPage/>
      },
    ]
  },
  {
    path: '*', 
    element: <ErrorPage />
  },
]);


export default function App () {
  return (
    <RouterProvider router={router} />
  );
}
