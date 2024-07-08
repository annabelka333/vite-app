import logo from '../assets/logo-main.png';
import LangComponent from './LangComponent';

const Header = () => {
  return (
    <header className='bg-gray-80'>
      <div className='flex justify-between items-center mb-2 container'>
        <div className='flex flex-row items-center gap-2'>
          <img src={logo} alt='Logo' className='h-12 max-w-xs' />
          <h1 className='text-4xl font-bold dark:text-white'>
            Scheduler tracker</h1>
        </div>
        <LangComponent />
      </div>
    </header>
  );
};
export default Header;