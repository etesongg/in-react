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
    name: "Scissors",
    img: "https://helloartsy.com/wp-content/uploads/kids/school/how-to-draw-scissors/how-to-draw-scissors-step-6.jpg"
  }
} 
function App() {
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [result, setResult] = useState("");
  
  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);
    setResult(judgement(choice[userChoice], computerChoice));
  };

  const judgement = (user, computer) => {
    if(user.name === computer.name){
      return "Tie"
    }else if(user.name === "Rock") return computer.name === "Scissors"? "Win": "Lose"
    else if(user.name === "Paper") return computer.name === "Scissors"? "Lose": "Win"
    else if(user.name === "Scissors") return computer.name === "Rock"? "Lose": "Win"
  }

  const randomChoice = () => {
    let itemArray = Object.keys(choice)// 객체의 키값만을 배열로 만듬
    let randomItem = Math.floor(Math.random()*itemArray.length);
    let final = itemArray[randomItem];
    return choice[final];
  };

  return (
    <div>
      <div className='main'>
        <Box title="You" item={userSelect} result={result}/>
        <Box title="Computer" item={computerSelect} result={result}/>
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
