const FormField = ({ value, name, lable, onChange, hasError, errorText }) => {
  return (
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
      {hasError && <p style={{ color: "red" }}>{errorText}</p>}
    </div>
  );
};
export default FormField;
