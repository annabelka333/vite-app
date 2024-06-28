import { useState, useEffect } from "react";
import FormField from "./FormField";

import userValidation from "../validations/user.validation";

export default function Forms({callback}) {
  const [showCalendar, setShowCalendar] = useState(false);
  const [formValues, setFormValues] = useState({
    fullName: "",
    email: "",
    phone: "",
  });
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const allFieldsFilled = Object.values(formValues).every(
      (value) => value.trim() !== ""
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

    console.log("Form submitted", formValues);
  };

  const handleChange = (name, value) => {
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  return (
    <div className="flex justify-center">
      <form
        autoComplete="true"
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <FormField
          errorText={"fullName" in errors ? errors["fullName"] : ""}
          hasError={"fullName" in errors}
          lable={"Full name"}
          name={"fullName"}
          value={formValues.fullName}
          onChange={handleChange}
          placeholder={"Jhoe Doe"}
        />
        <FormField
          errorText={"email" in errors ? errors["email"] : ""}
          hasError={"email" in errors}
          lable={"Email address"}
          name={"email"}
          value={formValues.email}
          onChange={handleChange}
          type={"email"}
          placeholder={"email@example.com"}
        />
        <FormField
          errorText={"phone" in errors ? errors["phone"] : ""}
          hasError={"phone" in errors}
          lable={"Phone number"}
          name={"phone"}
          value={formValues.phone}
          onChange={handleChange}
          type={"phone"}
          placeholder={"654 776 667"}
        />
        <div className="inline-block relative w-64 mt-6">
          <label
            className="block text-gray-700 text-left font-bold mb-2"
            htmlFor="appointment"
          >
            Choose your service
          </label>
          <select className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            <option>Dentist</option>
            <option>Make up</option>
            <option>Hair treatment</option>
          </select>
        </div>
        <button
          type="submit"
          className={`text-white font-medium rounded-lg text-sm px-10 py-2.5 me-2 mb-2
                         ${
                           isButtonEnabled
                             ? "bg-blue-600 hover:bg-blue-800 focus:ring-4"
                             : "bg-gray-400 curor-not-allowed"
                         }`}
          disabled={!isButtonEnabled}
        >
          Next
        </button>
      </form>
    </div>
  );
}
