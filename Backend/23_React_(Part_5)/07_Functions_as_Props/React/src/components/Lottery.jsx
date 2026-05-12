import { useState } from "react";
import { genTicket, sum } from "../utils/helper";
import Ticket from "./Ticket";
import Button from "./Button";

export default function Lottery({ n = 3, winCondition }) { // getting two props value and here 'winCondition' is function which pass from prop app.jsx
  let [ticket, setTicket] = useState(genTicket(n)); //here 3=n , means tell function to create 3 no. of array
  let isWinning = winCondition(ticket)

  let buyTicket = () => {
    setTicket(genTicket(n))
  }

  return (
    <div>
      <h1>Lottery Game!</h1>
      <Ticket ticket={ticket} />
      <Button action={buyTicket} />
      <h3>{isWinning && "Congratulations, you won!"} </h3>

    </div>
  );
}
