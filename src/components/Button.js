const Button = ({ children, handleClic })=>{

  const isOperator = value => {
    return isNaN(value) /*&& (value !== ".") && (value !== "=");*/
  }

  return(
    <div
      className={isOperator(children) ? "operator button-container": "button-container"}
      onClick={()=>handleClic(children)}
    >
      {children}
    </div>
  )
}

export default Button
