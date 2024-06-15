import { useState, useEffect } from "react";
import NextButton from "./NextButton";
import Calendar from "./Calendar";

export default function Forms() {
  const [showCalendar, setShowCalendar] = useState(false);
  const [formValues, setFormValues] = useState({
    fullName: " ",
    email: "",
    phone: "",
  });

  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  useEffect(() => {
    console.log("formValues changed:", formValues);
    const allFieldsFilled = Object.values(formValues).every(
      (value) => value.trim() !== ""
    );
    console.log("All fields filled:", allFieldsFilled);
    setIsButtonEnabled(allFieldsFilled);
  }, [formValues]);

  const handleClick = (event) => {
    event.preventDefault();
    if (isButtonEnabled) {
      console.log("Button enable,showing calendar");

      setShowCalendar(true);
    } else {
      console.log("Button not enabled, not showing calendar");
    }
  };

  return (
    <div>
      <main>
        {showCalendar ? (
          <Calendar />
        ) : (
          <div>
            <h1>Welcome 👋</h1>
            <p>Please put your information below</p>

            <div className="flex justify-center">
              <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
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
                      placeholder="+34"
                    />
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
                    />
                  </div>
                  <div className="inline-block relative w-64 mt-6">
                    <label
                      className="block text-gray-700 text-left font-bold mb-2"
                      htmlFor="appointment "
                    >
                      Choose your appointment
                    </label>
                    <select className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                      <option>Dentist</option>
                      <option>Make up</option>
                      <option>Hair treatment</option>
                    </select>
                  </div>
                </div>
                <NextButton
                  handleClick={handleButtonClick}
                  isButtonEnabled={isButtonEnabled}
                />
              </form>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
