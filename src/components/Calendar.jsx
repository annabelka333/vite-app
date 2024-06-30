import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

const Calendar = () => {
  const {i18n} = useTranslation();
  const date = new Date();
  
  const MM = date.getUTCMonth() + 1;
  const YY = date.getUTCFullYear();
  const DD = date.getUTCDate();
  const daysInMonth = date.getDate();
  
  const ss = (new Date(`${YY}-${MM}-1`)).getDay();

  const allDays = useMemo(()=>{
    const all = [];
    for(let i = 1; i <= 44; i++){
      all.push(i);
    }
    return all;
  },[date]);

  return (
    <>
      {date.toLocaleDateString()}
      <div className="grid grid-cols-7 max-w-80 mx-auto">
        {
          weekDays[i18n.language].map(weekday => (
            <div key={weekday} className='text-center w-10 h-10'>
              <span className='align-middle'>{weekday}</span>
            </div>
          ))
        }
        
      </div>
      <div className="grid grid-cols-7 max-w-80 mx-auto calendar-shadow">        
        {
          allDays.map(day => {
            return (
              <div 
                key={day} 
                className={`${DD === day ? 'font-semibold' : 'font-regular'} text-slate-400  w-10 h-10 p-1 text-center cursor-pointer border my-1 rounded-sm hover:border-sky-200 hover:text-sky-600`}
                // style={{gridColumnStart: day === 1 ? ss : null}}
              >
                <span className='align-middle'>
                  {day}
                </span>
              </div>
            );
          })
        }
      </div>
    </>
  );
};

const weekDays = {
  es: ['Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab', 'Dom'],
  en: ['Mon', 'Tue', 'Wen', 'Thu', 'Fri', 'Sat', 'Sun'],
  ua: ['Пн','Вт','Ср','Чт','Пт','Сб','Нд']
};

export default Calendar;