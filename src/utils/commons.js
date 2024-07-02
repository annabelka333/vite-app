
export const validateEmail = (value) => {
  if(value.length === 0){
    return 'Error.Empty';
  }
  const test = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(value).toLowerCase());
  
  if (!test) {
    return 'Error.IncorrectFormat';
  }

  return null;
};

export const validatePhone = (value) => {
  if(value.length === 0){
    return 'Error.Empty';
  }

  const test =
    /^\+?(\d{1,3})?[-.\s]?(\(?\d{3}\)?)[-.\s]?(\d{3})[-.\s]?(\d{4})$/.test(
      String(value).toLowerCase()
    );

  if (test) {
    return 'Error.IncorrectFormat';
  }

  if (value.length < 9) {
    return 'Error.ItsTooShort';
  }

  if (value.length > 9) {
    return 'Error.ItsTooLong';
  }

  return null;
};

export function validateFullName(value) {
  if(value.length === 0){
    return 'Error.Empty';
  }
  
  const test =
    /^[A-Za-zÀ-ÖØ-öø-ÿ]+(?: [A-Za-zÀ-ÖØ-öø-ÿ]+)*(?:[-' ][A-Za-zÀ-ÖØ-öø-ÿ]+)*$/;

  if (!test) {
    return 'Error.IncorrectFormat';
  }

  if (value.length < 4) {
    return 'Error.ItsTooShort';
  }

  if (value.length > 40) {
    return 'Error.ItsTooLong';
  }

  return null;
}

export function parseToken (token) {
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));

  return JSON.parse(jsonPayload);
}
