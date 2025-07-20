export const Button = ({ children, onClick, variant = "default", className = "" }) => {
  const baseStyle = "px-4 py-2 rounded border";
  const variants = {
    default: "bg-red-600 text-white",
    outline: "border-red-600 text-red-600 bg-white"
  };
  return (
    <button onClick={onClick} className={`${baseStyle} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};
