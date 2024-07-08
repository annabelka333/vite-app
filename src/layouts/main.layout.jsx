import { Outlet } from 'react-router-dom';
import InfoModal from '../containers/modal/info.modal';
import Header from '../components/Header';
import Footer from '../components/Footer';

function MainLayout () {


  return (
    <>
      <Header />
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
