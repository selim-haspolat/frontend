const Button = ({ children, className, variant = "normal", animation = true }) => {
  const baseStyles = "px-6 py-2 rounded-full transition-all duration-300 ease-in-out transform";

  const variants = {
    normal: "bg-primary text-white hover:bg-primary-dark",
    ghost: "bg-transparent text-blue-500",
  };

  const animationStyle = animation ? "hover:scale-105 active:scale-95" : "";

  return (
    <button className={`${baseStyles} ${variants[variant]} ${animationStyle} ${className}`}>
      {children}
    </button>
  );
};

export default Button;
