import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { LOCALE } from '../utils/constants';
import { ChevronLeftIcon, ChevronRightIcon } from './icons';

const Calendar = () => {
  const {i18n} = useTranslation();

  const [date, setDate] = useState(new Date);

  const MM = date.getMonth();
  const YY = date.getFullYear();
  const DD = date.getDate();

  const daysInMonth = (new Date(YY, MM + 1, 0)).getDate();

  const monthDayStart = (new Date(YY, MM, 1)).getDay();
  const columnStart = monthDayStart === 0 ? 7 : monthDayStart;

  console.log('Start in: ', monthDayStart);

  const allDays = useMemo(()=>{
    const all = [];

    for(let i = 1; i <= daysInMonth; i++){
      all.push(i);
    }
    return all;
  },[date]);

  const changeDateHandler = (num) => {
    const mm = date.getMonth();
    const year = date.getFullYear();
    const day = date.getDate();

    setDate(new Date(year, mm + num, day));
  };

  return (
    <div className=' max-w-96'>
      <div className='flex flex-row items-center justify-between'>
        <button className='py-1 uppercase cursor-pointer px-2 m-1 text-sm text-slate-400' onClick={()=>changeDateHandler(-1)}>
          <ChevronLeftIcon />
        </button>
        {
          date.toLocaleString(LOCALE[i18n.language].code, {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })
        }
        <button className='py-1 uppercase cursor-pointer px-2 m-1 text-sm text-slate-400' onClick={()=>changeDateHandler(1)}>
          <ChevronRightIcon />
        </button>
      </div>
      <div className="grid grid-cols-7">
        {
          weekDays[i18n.language].map(weekday => (
            <div key={weekday} className='text-center w-12 h-10'>
              <span className='align-middle'>{weekday}</span>
            </div>
          ))
        }
        
      </div>
      <div className="grid grid-cols-7 calendar-shadow">      
        {
          allDays.map(day => {
            return (
              <div 
                key={day} 
                className={`${DD === day ? 'text-white hover:text-white' : ''} text-slate-400 w-12 h-12 cursor-pointer my-1 rounded-sm hover:bg-slate-50 flex items-center justify-center`}
                style={{gridColumnStart: day === 1 ? columnStart : null}}
              >
                <span className={`${DD === day ? 'bg-slate-800':''} align-middle w-10 h-10 inline rounded-3xl flex items-center justify-center text-lg`}>
                  {day}
                </span>
              </div>
            );
          })
        }
      </div>
    </div>
  );
};

const weekDays = {
  es: ['Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab', 'Dom'],
  en: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  ua: ['Пн','Вт','Ср','Чт','Пт','Сб','Нд']
};

export default Calendar;