import calculatorIcon from "./images/calculatorIcon.png"
import { useState } from "react";
import { evaluate } from "mathjs";

//components
import Button from "./components/Button";
import Screen from "./components/Screen";
import ClearButton from "./components/ClearButton";

const App = ()=>{

  const [input, setInput]= useState("");

  const addInput = (val)=>{
    setInput(input + val)
  }

  const calculateResult = ()=> {
    if(input){
      setInput(evaluate(input));
    }else{
      alert("Please, introduce values in the console")
    }
  };

  return (
    <div className="App">
      <div className="website-name">
       <img
        src={calculatorIcon}
        alt="calculator logo" 
        className="calculator-icon"/>
         <h1>Interactive Calculator</h1>
      </div>
     
      <div className="calculator-container">
        <Screen 
          input={input}
        />
        <div className="row">
          <Button handleClic={addInput}>1</Button>
          <Button handleClic={addInput}>2</Button>
          <Button handleClic={addInput}>3</Button>
          <Button handleClic={addInput}>+</Button>
        </div>
          
        <div className="row">
          <Button handleClic={addInput}>4</Button>
          <Button handleClic={addInput}>5</Button>
          <Button handleClic={addInput}>6</Button>
          <Button handleClic={addInput}>-</Button>
        </div>
        
        <div className="row">
          <Button handleClic={addInput}>7</Button>
          <Button handleClic={addInput}>8</Button>
          <Button handleClic={addInput}>9</Button>
          <Button handleClic={addInput}>*</Button>
        </div>
         
          
        <div className="row">
          <Button handleClic={calculateResult}>=</Button>
          <Button handleClic={addInput}>0</Button>
          <Button handleClic={addInput}>.</Button>
          <Button handleClic={addInput}>/</Button>
        </div>
          
        <div className="row">
          <ClearButton
            handleClear={()=> {setInput("")}}
          >
           Clear
          </ClearButton>  
        </div>    
      </div>
      </div>
  );
}

export default App;
