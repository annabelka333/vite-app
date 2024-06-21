import { IncorrectFormat, ItsTooShort, ItsTooLong } from "./constants";

export const validateEmail = (email) => {
  const test = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email).toLowerCase());
  if (!test) {
    return IncorrectFormat;
  }

  return null;
};

export const validatePhone = (phone) => {
  const test =
    /^\+?(\d{1,3})?[-.\s]?(\(?\d{3}\)?)[-.\s]?(\d{3})[-.\s]?(\d{4})$/.test(
      String(phone).toLowerCase()
    );

  if (test) {
    return IncorrectFormat;
  }

  if (phone.length < 9) {
    return ItsTooShort;
  }

  if (phone.length > 9) {
    return ItsTooLong;
  }

  return null;
};

export function validateFullName(fullname) {
  const test =
    /^[A-Za-zÀ-ÖØ-öø-ÿ]+(?: [A-Za-zÀ-ÖØ-öø-ÿ]+)*(?:[-' ][A-Za-zÀ-ÖØ-öø-ÿ]+)*$/;

  if (!test) {
    return IncorrectFormat;
  }

  if (fullname.length < 4) {
    return ItsTooShort;
  }

  if (fullname.length > 40) {
    return ItsTooLong;
  }

  return null;
}
