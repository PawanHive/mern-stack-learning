
export default function Button({action}) { // here action passed as props which takes function inside "buyTicket" function
  return <button onClick={action}>Buy New Ticket</button>
}