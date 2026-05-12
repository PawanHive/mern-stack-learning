import { useState } from "react";
import { genTicket, sum} from "../utils/helper";
import Ticket from "./Ticket";

export default function Lottery({n=3, winningSum=15}) { // getting two props value
  let [ticket, setTicket] = useState(genTicket(n)); //here 3=n , means tell function to create 3 no. of array
  let isWinning = sum(ticket) === winningSum

  let buyTicket = () => {
    setTicket(genTicket(n))
  }

  return (
    <div>
      <h1>Lottery Game!</h1>
      <Ticket ticket={ticket}/>
      <button onClick={buyTicket}>Buy New Ticket</button>
      <h3>{ isWinning && "Congratulations, you won!" } </h3>

    </div>
  );
}
