import { useTranslation } from 'react-i18next';
import { useAppContext } from '../context/app.context';
import { LOCALE } from '../utils/constants';

const AppointmentsInfo = ({appointments}) => {
  const {services} = useAppContext();
  const {i18n, t} = useTranslation();
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  return (
    <div className='py-2'>
      {
        appointments.map(appointment => (
          <div key={appointment._id} className='border py-4 px-4 rounded-md flex flex-row items-center justify-between'>
            <div>
              <h2 className='text-xl'>{services.items.find(ser => ser._id === appointment.service).name}</h2>
              <p className='text-sm'>{(new Date(appointment.start)).toLocaleTimeString(LOCALE[i18n.language].code, options)}</p>
            </div>
            <div>{
              appointment.confirmed 
                ? <div className='text-green-500 p-2 rounded-md font-bold'>{t('Appointment.Confirmed')}</div> 
                : <div className='text-red-500 p-2 rounded-md font-bold'>{t('Appointment.UnConfirmed')}</div>
            }</div>
          </div>
        ))
      }
    </div>
  );
};

export default AppointmentsInfo;