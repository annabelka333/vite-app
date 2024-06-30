import {
  validateEmail,
  validateFullName,
  validatePhone,
} from '../utils/commons';

/*
    fullName: "Jhoe Doe",
    email: "jhoe.doe@gmail.com",
    phone: "67575757",
*/

function userValidation(user) {
  const errors = {};

  patterns.map((option) => {
    const result = option.validation(user[option.name]);

    if (result) {
      Object.assign(errors, { [option.name]: result });
    }
  });

  return errors;
}

const patterns = [
  {
    name: 'fullName',
    validation: validateFullName,
  },
  {
    name: 'email',
    validation: validateEmail,
  },
  {
    name: 'phone',
    validation: validatePhone,
  },
];

export default userValidation;
