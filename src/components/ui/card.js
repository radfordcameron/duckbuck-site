export function Card({ children }) {
    return <div className="p-6 bg-gray-800 rounded-xl shadow-md">{children}</div>;
  }
  
  export function CardContent({ children }) {
    return <div>{children}</div>;
  }
  