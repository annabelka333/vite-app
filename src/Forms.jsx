export default function Forms() {
  const handleClick = () => {
    console.log("hello here");
  };

  return (
    <div>
      <main>
        <div>
          <h1>Welcome 👋</h1>
          <p>Please put your information below</p>
        </div>
        <div class="flex justify-center">
          <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div class="mb-4">
              <label
                class="block text-gray-700 text-left font-bold mb-2"
                for="username"
              >
                Full Name
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Full Name"
              />
              <div class="mt-4">
                <label
                  class="block text-gray-700 text-left font-bold mb-2"
                  for="phone "
                >
                  Phone
                </label>
                <input
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="phone"
                  type="tel"
                  placeholder="+34"
                />
              </div>
              <div class="mt-4">
                <label
                  class="block text-gray-700 text-left font-bold mb-2"
                  for="email "
                >
                  Email
                </label>
                <input
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                />
              </div>
              <div class="inline-block relative w-64 mt-6">
                <label
                  class="block text-gray-700 text-left font-bold mb-2"
                  for="appointment "
                >
                  Choose your appointment
                </label>
                <select class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                  <option>Dentist</option>
                  <option>Make up</option>
                  <option>Hair treatment</option>
                </select>
              </div>
            </div>
            <div>
              <button
                onClick={handleClick}
                class="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4
                focus:ring-blue-300 font-medium rounded-lg text-sm px-10 py-2.5
                me-2 mb-2 bg-blue 600"
              >
                {" "}
                Next
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
