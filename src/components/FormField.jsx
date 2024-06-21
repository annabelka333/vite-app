const FormField = ({
  value,
  name,
  type,
  lable,
  onChange,
  hasError,
  errorText,
  className,
  placeholder,
}) => {
  function handleChange(event) {
    onChange(name, event.target.value);
  }

  return (
    <div className="mb-4">
      <label
        className="block text-gray-700 text-left font-bold mb-2"
        htmlFor={name}
      >
        {lable}
      </label>
      <input
        className={`${
          className || ""
        } shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
        id={name}
        type={type || "text"}
        name={name}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
      />
      {hasError && <p style={{ color: "red" }}>{errorText}</p>}
    </div>
  );
};
export default FormField;
