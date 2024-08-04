import { useState } from 'react';
import './App.css';
import Box from "./component/Box"

const choice = {
  rock: {
    name: "Rock",
    img: "https://i.pinimg.com/564x/36/69/e9/3669e921fe419e00ca6dc3d274caeabb.jpg"
  },
  paper: {
    name: "Paper",
    img: "https://helloartsy.com/wp-content/uploads/kids/school/how-to-draw-paper/how-to-draw-paper-step-6.jpg"
  },
  scissors: {
    name: "Rock",
    img: "https://helloartsy.com/wp-content/uploads/kids/school/how-to-draw-scissors/how-to-draw-scissors-step-6.jpg"
  }
} 
function App() {
  const play = (userChoice) => {
    console.log(userChoice,"choice")
  }
  return (
    <div>
      <div className='main'>
        <Box title="You"/>
        <Box title="Computer"/>
      </div>
      <div className='main'>
        <button onClick={() => play("scissors")}>가위</button>
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>
      </div>
    </div>
    
  );
}

export default App;
