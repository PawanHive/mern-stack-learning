// ----------------------------------- Handling Non-Click Events ------------------------------------------------

function handleClick() {
  console.log("Hello")
}

function handleMouseOver() {
  console.log("bye!")
}

function handleDblClick() {
  console.log("You double clicked me!")
}

function Button() {
  return (
    <div>
      <button onClick={handleClick}>Click Me!</button>
      <p onMouseOver={handleMouseOver}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi corrupti porro in iure at iusto incidunt quibusdam adipisci. Odit nobis ea labore saepe quaerat odio eveniet voluptate pariatur vel exercitationem.
      Nihil rem recusandae excepturi nulla. Laborum explicabo aspernatur eius placeat neque animi saepe illum amet modi sunt molestias eligendi, dolorem, id temporibus ab obcaecati voluptatum? Omnis maiores voluptates corporis necessitatibus!</p>
      <button onDoubleClick={handleDblClick}>Double Click Me!</button>
    </div>
  )
}

export default Button;