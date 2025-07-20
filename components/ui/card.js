export const Card = ({ children, className = "" }) => (
  <div className={`border border-gray-200 rounded shadow-sm bg-white ${className}`}>
    {children}
  </div>
);

export const CardContent = ({ children }) => (
  <div className="p-4">
    {children}
  </div>
);

