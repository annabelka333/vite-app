import Forms from "./Forms";
export default function NextButton({
  handleClick,
  isButtonEnable,
  formValues,
  setFormValues,
}) {
  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log("Input changed:${name}=${value}");
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };
  return (
    <button
      onClick={handleClick}
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
  );
}
