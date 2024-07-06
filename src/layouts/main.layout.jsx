import { Outlet } from 'react-router-dom';
import LangComponent from '../components/LangComponent';
import InfoModal from '../containers/modal/info.modal';
import Header from '../components/Header';
import Footer from '../components/Footer';

function MainLayout () {
  //TODO: create greeting components, footer 

  return (
    <>
      <Header />
      <LangComponent />
      <main>
        <div className='container'>
          <Outlet/>
        </div>
      </main>
     <Footer />
    <InfoModal />
    </>
  );
}

export default MainLayout;
