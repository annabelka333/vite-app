import { Outlet } from 'react-router-dom';
import LangComponent from '../components/LangComponent';

function MainLayout () {
  //TODO: create greeting components, footer and header component 

  return (
    <>
      <header>
        <LangComponent />
      </header>
      <main>
        <Outlet/>
      </main>
      <footer>
        Developed by Anna V.
      </footer>
    </>
  );
}

export default MainLayout;
