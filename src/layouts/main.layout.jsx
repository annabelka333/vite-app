import { Outlet } from 'react-router-dom';
import LangComponent from '../components/LangComponent';
import InfoModal from '../containers/modal/info.modal';
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
      <InfoModal />
    </>
  );
}

export default MainLayout;
