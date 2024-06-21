import { useState, useEffect } from "react";

import Calendar from "./Calendar";
import { validateEmail } from "./utils/commons";
import userValidation from "./validations/user.validation";

export default function Forms() {
  const [showCalendar, setShowCalendar] = useState(false);
  const [formValues, setFormValues] = useState({
    fullName: "",
    email: "",
    phone: "",
  });
  // const [email, setEmail] = useState("");
  // const [emailError, setEmailError] = useState("");
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const allFieldsFilled = Object.values(formValues).every(
      (value) => value.trim() !== ""
    );
    setIsButtonEnabled(allFieldsFilled);
  }, [formValues]);

  // const handleEmailChange = (event) => {
  //   setEmail(event.target.value);
  //   setEmailError("");
  // };

  const handleSubmit = (event) => {
    event.preventDefault();

    const isValid = userValidation(formValues);
    console.log(isValid);

    if (Object.keys(isValid).length > 0) {
      setErrors({ ...isValid });
      return;
    }

    console.log("Form submitted", formValues);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  // const handleClick = (event) => {
  //   event.preventDefault();
  //   if (isButtonEnabled) {
  //     console.log("Button enable,showing calendar");

  //     setShowCalendar(true);
  //   } else {
  //     console.log("Button not enabled, not showing calendar");
  //   }
  // };

  return (
    <main>
      {showCalendar ? (
        <Calendar />
      ) : (
        <div>
          <h1>Welcome 👋</h1>
          <p>Please put your information below</p>
          <div className="flex justify-center">
            <form
              autoComplete="true"
              onSubmit={handleSubmit}
              className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
            >
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-left font-bold mb-2"
                  htmlFor="fullName"
                >
                  Full Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="fullName"
                  type="text"
                  name="fullName"
                  value={formValues.fullName}
                  onChange={handleChange}
                  placeholder="Full Name"
                />
                {"fullName" in errors && (
                  <p style={{ color: "red" }}>{errors["fullName"]}</p>
                )}
              </div>
              <div className="mt-4">
                <label
                  className="block text-gray-700 text-left font-bold mb-2"
                  htmlFor="phone "
                >
                  Phone
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="phone"
                  type="tel"
                  name="phone"
                  value={formValues.phone}
                  onChange={handleChange}
                  placeholder="999 988 877"
                />
                {"phone" in errors && (
                  <p style={{ color: "red" }}>{errors["phone"]}</p>
                )}
              </div>
              <div className="mt-4">
                <label
                  className="block text-gray-700 text-left font-bold mb-2"
                  htmlFor="email "
                >
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  name="email"
                  value={formValues.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                />
                {"email" in errors && (
                  <p style={{ color: "red" }}>{errors["email"]}</p>
                )}
              </div>
              <div className="inline-block relative w-64 mt-6">
                <label
                  className="block text-gray-700 text-left font-bold mb-2"
                  htmlFor="appointment"
                >
                  Choose your appointment
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
        </div>
      )}
    </main>
  );
}
