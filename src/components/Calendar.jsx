import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { LOCALE } from '../utils/constants';

const Calendar = ({date}) => {
  const {i18n} = useTranslation();
  
  const MM = date.getMonth();
  const YY = date.getFullYear();
  const DD = date.getDate();

  const daysInMonth = (new Date(YY, MM + 1, 0)).getDate();

  const monthDayStart = (new Date(YY, MM, 1)).getDay();

  const allDays = useMemo(()=>{
    const all = [];

    for(let i = 1; i <= daysInMonth; i++){
      all.push(i);
    }
    return all;
  },[date]);

  return (
    <>
      {date.toLocaleString(LOCALE[i18n.language].code, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })}
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
                style={{gridColumnStart: day === 1 ? monthDayStart : null}}
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
  en: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  ua: ['Пн','Вт','Ср','Чт','Пт','Сб','Нд']
};

export default Calendar;