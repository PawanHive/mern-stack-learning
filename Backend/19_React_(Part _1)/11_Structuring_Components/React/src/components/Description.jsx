//Creating Component
function Description() {
  return <p>This is a description about react</p>
}

export default Description; // this is default export (used usually when we have to export single component)



function Hello() {
  return <p>Hello</p>
}

function Greet() {
  return <p>Hello Ms. Sharma</p>
}

export {Hello, Greet}; // this is NAMED export (used usually when we have to export multiple things from same file)
