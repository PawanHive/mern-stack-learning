import TicketNum from "./TicketNum";
import "./Ticket.css"

// Presentational (dumb) Component:
export default function Ticket({ ticket }) { // in 'ticket' props we will pass array
  return (
    <div className="Ticket">
      <p>Ticket</p>
      {/* <TicketNum num = {ticket[0]} />
      <TicketNum num = {ticket[1]} /> */}

      {ticket.map((num, idx) => (
        <TicketNum num={num} key={idx} /> // key used to access specific element of an array
      ))}
    </div>
  )
}