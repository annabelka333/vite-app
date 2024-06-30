import { useState, useEffect } from 'react'
import FormField from './FormField'

import userValidation from '../validations/user.validation';
import { useAppContext } from '../context/app.context';
import { useTranslation } from 'react-i18next';

export default function Forms({callback}) {
  const {t} = useTranslation();
  const [formValues, setFormValues] = useState({
    fullName: '',
    email: '',
    phone: '',
  });
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);
  const [errors, setErrors] = useState({});
  const {user, services} = useAppContext();

  useEffect(() => {
    const allFieldsFilled = Object.values(formValues).every(
      (value) => value.trim() !== ''
    );
    setIsButtonEnabled(allFieldsFilled);
  }, [formValues]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const isValid = userValidation(formValues);
    console.log(isValid);

    if (Object.keys(isValid).length > 0) {
      setErrors({ ...isValid });
      return;
    }
    
    callback(formValues);

    console.log('Form submitted', formValues);
  };

  const handleChange = (name, value) => {
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const btnClass =  isButtonEnabled
    ? 'bg-blue-600 hover:bg-blue-800 focus:ring-4'
    : 'bg-gray-400 curor-not-allowed';

  return (
    <div className="flex justify-center">
      <form
        autoComplete="true"
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
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
        <div className="inline-block relative w-64 mt-6">
          <label
            className="block text-gray-700 text-left font-bold mb-2"
            htmlFor="appointment"
          >
            {t('ChooseYourService')}
          </label>
          {
            services ? (
              <select className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                {
                  services.items.map(service => (
                    <option key={service._id}>{service.name} - {service.price}€ ( {service.duration}{t('Minute')} )</option>
                  ))
                }
              </select>
            ) : null
          }
        </div>
        <hr />
        <button
          type="submit"
          className={`text-white font-medium rounded-lg text-sm px-10 py-2.5 me-2 mb-2 ${btnClass}`}
          disabled={!isButtonEnabled}
        >
          {t('Next')}
        </button>
      </form>
    </div>
  );
}
