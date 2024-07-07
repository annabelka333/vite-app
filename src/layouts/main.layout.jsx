import { Outlet } from 'react-router-dom';
import LangComponent from '../components/LangComponent';
import InfoModal from '../containers/modal/info.modal';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TextBlock from '../components/TextBlock'; 

function MainLayout () {


  return (
    <>
      <Header />
      <TextBlock
        title='Schedule tracker'
        subtitle='Welcome to tracker'
        text='Follow the next step to get your appointment.'
      
      />
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
