import { useState } from 'react';
import Calendar from '../components/Calendar';
import { useAppContext } from '../context/app.context';

const CalendarPage = () => {
  const context = useAppContext();

  const [date, setDate] = useState(new Date);

  if(!context.selectedService){
    return (
      <div>Service should be selected</div>
    );
  }

  if(!context.user){
    return (
      <div>User data should be filled</div>
    );
  }

  const changeDateHandler = (num) => {
    const mm = date.getMonth();
    const year = date.getFullYear();
    const day = date.getDate();

    setDate(new Date(year, mm + num, day));
  };

  return (
    <div>
      <h1>Calendar Page</h1>
      <div className='flex flex-row'>
        <button className='py-1 uppercase cursor-pointer px-2 m-1 bg-sky-200' onClick={()=>changeDateHandler(-1)}>Prev</button>
        <button className='py-1 uppercase cursor-pointer px-2 m-1 bg-sky-200' onClick={()=>changeDateHandler(1)}>Next</button>
      </div>
      <Calendar date={date}/>
    </div>
  );
};

export default CalendarPage;
