export const Card = ({ children, className = "" }) => (
  <div className={`border rounded shadow p-2 bg-white ${className}`}>{children}</div>
);

export const CardContent = ({ children }) => <div>{children}</div>;
