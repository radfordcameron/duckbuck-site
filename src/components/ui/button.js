export function Button({ children, className, onClick }) {
    return (
      <button 
        className={`px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg ${className}`} 
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
  