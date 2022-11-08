const ClearButton = ({ children, handleClear })=> {
  return(
    <div className="clear-button"
      onClick={handleClear}
    >
      {children}
    </div>
  );
};

export default ClearButton