import "./App.css";
import Lottery from "./components/Lottery";
// import Ticket from "./components/Ticket";
// import TicketNum from "./components/TicketNum";




function App() {


  return (
    <>
    {/* <TicketNum num={5}/>
    <TicketNum num={4}/>
    <TicketNum num={3}/> */}

    {/* <Ticket ticket={[0, 1, 2]} />  
    <Ticket ticket={[5, 6, 7, 3, 4]} /> */}

    <Lottery n={3} winningSum={15}/>


    </>
  )
}

export default App;
