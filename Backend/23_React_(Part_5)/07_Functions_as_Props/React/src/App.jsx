import "./App.css";
import Lottery from "./components/Lottery";
import { sum } from "./utils/helper";
// import Ticket from "./components/Ticket";
// import TicketNum from "./components/TicketNum";




function App() {

  // // 1st winning condition (sum of them should = 15)
  // let winCondition = (ticket) => {
  //   return sum(ticket) === 15;
  // }

  // // 2nd winning condition ( all number should equal to each other)
  // let winCondition = (ticket) => {
  //   return ticket.every((num) => num === ticket[0]) // mean all element should equal to 0th index
  // }

  // 3rd winning condition (if 0th index = 0 then it is winning ticket)
  let winCondition = (ticket) => {
    return ticket[0] === 0
  }


  return (
    <>
    {/* <TicketNum num={5}/>
    <TicketNum num={4}/>
    <TicketNum num={3}/> */}

    {/* <Ticket ticket={[0, 1, 2]} />  
    <Ticket ticket={[5, 6, 7, 3, 4]} /> */}

    {/* <Lottery n={3} winningSum={15}/> */}

    <Lottery n={3} winCondition={winCondition}/>




    </>
  )
}

export default App;
