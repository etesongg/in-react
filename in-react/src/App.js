import "./App.css";
import { useState } from "react";
import Box from "./component/Box";

function App() {
  let counter = 0;
  const [counter2, setCounter2] = useState(0);
  const increase = () => {
    counter += 1;
    setCounter2(counter2 + 1); // setCounter2() 함수를 이용해서만 counter2값을 바꿀 수 있음
    console.log("counter", counter, "counter2", counter2)
  };
  
  return (
    <div>
      <div className="counter-area">{counter}</div>
      <div>state: {counter2}</div>
      <button onClick={increase}>클릭</button> 
    </div>
  );
}

export default App;
