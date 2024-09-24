const Button = ({ children, className }) => {
  return (
    <button
      className={`bg-primary text-white px-6 py-2 rounded-full 
      transition-all duration-300 ease-in-out transform hover:scale-110 active:scale-90 hover:bg-primary-dark ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
