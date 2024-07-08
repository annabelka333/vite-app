import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { LOCALE } from '../utils/constants';
import { ChevronLeftIcon, ChevronRightIcon } from './icons/icons';
import { fillArray, getFreeTimeFromDay } from '../utils/commons';

const DATE = new Date();
const MONTH = DATE.getMonth();
const YEAR = DATE.getFullYear();
const DAY = DATE.getDate(); 

const Calendar = ({ data }) => {
  const {i18n} = useTranslation();
  const [date, setDate] = useState(new Date);


  const MM = date.getMonth();
  const YY = date.getFullYear();
  const DD = date.getDate();

  const daysInMonth = (new Date(YY, MM + 1, 0)).getDate();
  const monthDayStart = (new Date(YY, MM, 1)).getDay();

  const availableMonthDays = useMemo(()=>fillArray(daysInMonth),[daysInMonth]);
  const blockedMonthDays = useMemo(()=>fillArray(monthDayStart),[monthDayStart]);


  const changeDateHandler = (num) => {
    const mm = date.getMonth();
    const year = date.getFullYear();
    const day = date.getDate();
    const next = mm + num;
    if(next >= MONTH){
      setDate(new Date(year, next, day));
    }
  };


  return (
    <div className=' max-w-96'>
      <div className='flex flex-row items-center justify-between'>
        <button className={`${MM > MONTH ? 'text-sky-400 cursor-pointer' : 'text-slate-200 cursor-default'} py-1 uppercase px-2 m-1 text-sm `} onClick={()=>changeDateHandler(-1)}>
          <ChevronLeftIcon />
        </button>
        {
          date.toLocaleString(LOCALE[i18n.language].code, {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })
        }
        <button className='py-1 uppercase cursor-pointer px-2 m-1 text-sm text-sky-400' onClick={()=>changeDateHandler(1)}>
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
          blockedMonthDays.map(prev => <div key={prev}></div>)
        }
        {
          availableMonthDays.map(day => (
            <Day 
              key={day}
              d={day}
              m={MM}
              y={YY} 
            />
          ))
        }
      </div>
    </div>
  );
};

const Day = ({d, m, y}) => {
  const isBlocked = getFreeTimeFromDay();
  //Check if its a current day and month
  const isCurrentDay = d === DAY && m === MONTH;
  //Chack if this is a future day;
  const isAvailable = d > DAY && m >= MONTH;

  const clickHandler = () => {
    console.log(new Date(y, m, d));
  };

  const cl = {
    width: 'w-12',
    height: 'h-12',
    margin: 'my-1',
    borderRadius: 'rounded-sm',
    hover: 'hover:bg-slate-50',
    display: 'flex',
    itemsFlex: 'items-center',
    justifyFlex: 'justify-center',
    color: 'text-slate-200',
    cursor: 'cursor-default'
  };

  if(isAvailable){
    cl.color = 'text-slate-400';
    cl.cursor = 'cursor-pointer';
  }

  if(isCurrentDay){
    cl.color = 'text-white';
  }

  const classes = `w-12 h-12 my-1 rounded-sm hover:bg-slate-50 flex items-center justify-center ${Object.values(cl).join(' ')}`;

  return (
    <div 
      className={classes}
      onClick={clickHandler}
    >
      <span className={`${isCurrentDay ? 'bg-slate-800':''} align-middle w-10 h-10 inline rounded-3xl flex items-center justify-center text-lg`}>
        {d}
      </span>
    </div>
  );
};

const weekDays = {
  es: ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'],
  en: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  ua: ['Нд', 'Пн','Вт','Ср','Чт','Пт','Сб']
};

export default Calendar;