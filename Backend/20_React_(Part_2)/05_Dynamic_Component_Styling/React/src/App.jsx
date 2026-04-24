import "./App.css";
import ProductTab from "./components/ProductTab";
import MsgBox from "./components/msgBox";

function App() {
  // App() is highest level of component in any React App
  return (
    <>
    <MsgBox userName="Pawan" textColor="blue" />
    <ProductTab />
    </>
  );
  // <h2>Pawan Yadav</h2>; // component can't return two html tags
}

export default App;
