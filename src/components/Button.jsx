const Button = ({ onClick, className, type ='button', children }) => {
  const handelClick = () => {
    if (onClick) {
      onClick();
    }
  };
 
  return (
    <button type={type} onClick={handelClick} className={`${className} bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}>{children}</button>
  );
};

export default Button;