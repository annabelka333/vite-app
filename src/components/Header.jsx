import logo from '../assets/logo-main.png';
const Header = () => {
  return (
    <header className=' bg-gray-80 p-10 '>   
      <div className='flex justify-center items-center mb-2'>
        <img src={logo} alt='Logo' className='h-12 max-w-xs ' />
        <h1 className='  text-4xl font-bold dark:text-white'
        > Scheduler tracker</h1>
      </div>
            
    </header>
  );
};
export default Header