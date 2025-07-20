export const Button = ({ children, onClick, variant = "default", className = "" }) => {
  const baseStyle = "px-4 py-2 rounded font-bold";
  const variants = {
    default: "bg-black text-white",
    outline: "border border-black text-black bg-white"
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyle} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};
