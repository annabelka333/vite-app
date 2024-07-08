import { useState, useEffect } from 'react';
import FormField from './FormField';

import userValidation from '../validations/user.validation';
import { useAppContext } from '../context/app.context';
import { useTranslation } from 'react-i18next';
import Button from './Button';

export default function UserForm({ callback }) {
  const { t } = useTranslation();
  const [formValues, setFormValues] = useState({
    fullName: '',
    email: '',
    phone: '',
    service: '',
    receiveNotification: true,
  });
  const [errors, setErrors] = useState({});
  const { user, services } = useAppContext();

  useEffect(() => {
    if (user) {
      setFormValues({ ...formValues, ...user });
    }
  }, [user]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const isValid = userValidation(formValues);

    if (Object.keys(isValid).length > 0) {
      setErrors({ ...isValid });
      return;
    }

    callback(formValues);

  };

  const handleChange = (name, value) => {
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const checkBoxHandler = (event) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <form
      autoComplete="true"
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 border"
    >
      <FormField
        errorText={'fullName' in errors ? errors['fullName'] : ''}
        hasError={'fullName' in errors}
        label={'FullName'}
        name={'fullName'}
        value={formValues.fullName}
        onChange={handleChange}
        placeholder={'Jhoe Doe'}
      />
      <FormField
        errorText={'email' in errors ? errors['email'] : ''}
        hasError={'email' in errors}
        label={'EmailAddress'}
        name={'email'}
        value={formValues.email}
        onChange={handleChange}
        type={'email'}
        placeholder={'email@example.com'}
      />
      <FormField
        errorText={'phone' in errors ? errors['phone'] : ''}
        hasError={'phone' in errors}
        label={'PhoneNumber'}
        name={'phone'}
        value={formValues.phone}
        onChange={handleChange}
        type={'phone'}
        placeholder={'654 776 667'}
      />
      <div className="mt-6">
        <label
          className="block text-gray-700 text-left font-bold mb-2"
          htmlFor="appointment"
        >
          {t('Service')}
        </label>
        {
          services ? (
            <>
              <select
                name='service'
                value={formValues.service}
                onChange={(event) => handleChange(event.target.name, event.target.value)}
                className="bg-white appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                <option value={''}>{t('ChooseYourService')}</option>
                {
                  services.items.map(service => (
                    <option key={service._id} value={service._id}>{service.name} - {service.price}€ ( {service.duration}{t('Minute')} )</option>
                  ))
                }
              </select>
              {
                'service' in errors ? <span className='text-red-500'>{t(errors.service)}</span> : null
              }
            </>
          ) : null
        }
      </div>
      <div className='my-4'>
        <input type='checkbox' checked={formValues.receiveNotification} name='receiveNotification' onChange={checkBoxHandler} />
        <label htmlFor="receiveNotification" className='ml-2'>{t('ReceiveNotifications')}</label>
      </div>
      <Button
        type="submit"
        className='text-white w-full font-medium rounded-lg text-sm px-10 py-2.5 me-2 mb-2 bg-blue-600 hover:bg-blue-800 focus:ring-4'
      >
        {t('Next')}
      </Button>
    </form>
  );
}
