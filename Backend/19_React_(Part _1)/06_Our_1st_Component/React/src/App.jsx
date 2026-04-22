import "./App.css";

// Creating Component
function Title() {
  // component naming convention is 'PascalCase' Ex.: 'HelloWorld' or 'UserCard' or 'Navbar'
  return <h1>I am the Title</h1>;
}

//Creating Component
function Description() {
  return <p>This is a description about react</p>
}

function App() {
  // App() is highest level of component in any React App
  return (
    <div>  {/* Inside <div> we can add different multiple elements (even we can use same component multiple times*/}
      <Title /> {/* Rendering 'Title' Component */}
      <Description />
    </div>
  );
  // <h2>Pawan Yadav</h2>; // component can't return two html tags
}

export default App;
