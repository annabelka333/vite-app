import { useState } from "react";
import Calendar from "./Calendar";

export default function Forms() {
  const [showCalendar, setShowCalendar] = useState(false);

  const handleClick = () => {
    setShowCalendar(true);
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
                    htmlFor="username"
                  >
                    Full Name
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="text"
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
                <div>
                  <button
                    onClick={handleClick}
                    className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4
                focus:ring-blue-300 font-medium rounded-lg text-sm px-10 py-2.5
                me-2 mb-2 bg-blue 600"
                  >
                    Next
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
