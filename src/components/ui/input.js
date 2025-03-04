export function Input({ type = "text", placeholder, value, onChange, className }) {
    return (
      <input 
        type={type} 
        placeholder={placeholder} 
        value={value} 
        onChange={onChange}
        className={`p-3 rounded-lg bg-gray-700 text-white text-lg ${className}`}
      />
    );
  }
  