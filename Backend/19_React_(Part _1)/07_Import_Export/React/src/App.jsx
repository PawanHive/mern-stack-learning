import "./App.css";
import Title from "./components/Title"; // we can even rename default import
import Description from "./components/Description";

import { Hello, Greet } from "./components/Description";

function App() {
  // App() is highest level of component in any React App
  return (
    <div>
      {/* Inside <div> we can add different multiple elements (even we can use same component multiple times*/}
      <Title /> {/* Rendering 'Title' Component */}
      <Description />
      <Hello />
      <Greet />
    </div>
  );
  // <h2>Pawan Yadav</h2>; // component can't return two html tags
}

export default App;
