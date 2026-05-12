import { useState } from "react";
import "./Lottery.css";
import { genTicket } from "../utils/helper";

export default function Lottery() {
  let [ticket, setTicket] = useState(genTicket(3)); //here 3=n , means tell function to create 3 no. of array
  return (
    <div>
      <h1>Lottery Game!</h1>
      <div className="ticket">
        <span>{ticket[0]}</span>
        <span>{ticket[1]}</span>
        <span>{ticket[2]}</span>
      </div>
    </div>
  );
}
