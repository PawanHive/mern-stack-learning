import "./TicketNum.css"

// Presentational (dumb) Component:
export default function TicketNum({ num }) { // here 'num' will take value from props
  return (
    <span className="TicketNum">{num}</span>
  )
}