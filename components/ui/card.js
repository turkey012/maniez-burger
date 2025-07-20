export const Card = ({ children, className = "" }) => {
  return (
    <div className={`border rounded-lg p-4 shadow-sm bg-white ${className}`}>
      {children}
    </div>
  );
};

export const CardContent = ({ children, className = "" }) => {
  return <div className={className}>{children}</div>;
};
