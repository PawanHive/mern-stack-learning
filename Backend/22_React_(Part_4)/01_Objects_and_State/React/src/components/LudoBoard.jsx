import { useState } from "react";

export default function LudoBoard() {

  // state object to track moves of each color
  let [moves, setMoves] = useState({ blue: 0, yellow: 0, green: 0, red: 0 });

  // let updateBlue = () => {
  //   moves.blue += 1;
  //   console.log(`moves.blue = ${moves.blue}`);
  //   setMoves({...moves});
  // };

  // // better way: to write above code
  // let updateBlue = () => {
  //   console.log(`moves.blue = ${moves.blue}`);
  //   setMoves({...moves, blue: moves.blue + 1});
  // };

  // even better way: to write above code
  let updateBlue = () => {
    setMoves((prevMoves) => { // get latest state (important)

      return {...prevMoves, blue: prevMoves.blue + 1} // objects update only after using spread operator, because it pass copy to object thats why 
    });
  };

  let updateYellow = () => {
    setMoves((prevMoves) => {
      return {...prevMoves, yellow: prevMoves.yellow + 1}
    });
  };

  let updateGreen = () => {
    setMoves((prevMoves) => {
      return {...prevMoves, green: prevMoves.green + 1}
    });
  };

  let updateRed = () => {
    setMoves((prevMoves) => {
      return {...prevMoves, red: prevMoves.red + 1}
    });
  };

  return (
    <div>
      <p>
        Game Begins!
        <div>
          <p>Blue moves = {moves.blue} </p>
          <button style={{ background: "blue" }} onClick={updateBlue} >+1</button>

          <p>Yellow moves = {moves.yellow} </p>
          <button style={{ background: "yellow", color: "black" }} onClick={updateYellow} >+1</button>

          <p>Green moves = {moves.green} </p>
          <button style={{ background: "green" }} onClick={updateGreen} >+1</button>

          <p>Red moves = {moves.red} </p>
          <button style={{ background: "red" }} onClick={updateRed} >+1</button>
        </div>
      </p>
    </div>
  );
}
