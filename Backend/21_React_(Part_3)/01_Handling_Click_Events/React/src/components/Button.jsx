function printHello() {
  console.log("Hello")
}

function printBye() {
  console.log("bye!")
}

function Button() {
  return (
    <div>
      <button onClick={printHello}>Click Me!</button>
      <p onClick={printBye}>this paragraph is our even demo</p>
    </div>
  )
}

export default Button;