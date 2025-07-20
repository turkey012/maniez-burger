export const Button = ({ children, onClick, variant = "default", className = "" }) => {
  const baseStyles = "px-4 py-2 rounded font-bold transition ";
  const variantStyles =
    variant === "default"
      ? "bg-red-600 text-white hover:bg-red-700"
      : "border border-red-600 text-red-600 hover:bg-red-100";

  return (
    <button onClick={onClick} className={`${baseStyles} ${variantStyles} ${className}`}>
      {children}
    </button>
  );
};
