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
        <div className='container'>
          <Outlet/>
        </div>
      </main>
      <footer>
        Developed by Anna V.
      </footer>
    </>
  );
}

export default MainLayout;
