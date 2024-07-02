import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './pages/error.page.jsx';
import AppointmentPage from './pages/appointment.page.jsx';
import ConfirmationPage from './pages/confirmation.page.jsx';
import MainLayout from './layouts/main.layout.jsx';
import LandingPage from './pages/landing.page.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <LandingPage />
      },
      {
        path: 'appointment',
        element: <AppointmentPage />
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

const App = () => {
  return (
    <RouterProvider router={router} />
  );
};

export default App;
