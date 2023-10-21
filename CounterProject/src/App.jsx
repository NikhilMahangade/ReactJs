import { useState } from "react";
import './App.css'



function App() {
  let [counter,setvalue]=useState(10)
  // let counter=10;
  let [text,settext]=useState("Welcome Here")
  
  function add(){
    setvalue(counter+1)
    settext("value Incremented")
   
  }
  let remove=()=>{

    settext("value decremented")
    setvalue(counter-1)
  }
  return (
    <>
     <div className="Container">
     <h1>Counter:{counter}</h1>
     <h3>{text}</h3>

    <div className="Box">
    <button onClick={add}>Increment</button>
    {/* <a href="./mainjsx"></a> */}
<button onClick={remove}>Decrement</button>
    </div>
     </div>
    </>
  )
}

export default App
