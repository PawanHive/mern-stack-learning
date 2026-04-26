
// handler function (tell what have to do after event trigger)
function handleFormSubmit(event) { // 'event' object contains all info about the triggered event
  event.preventDefault();
  console.log("form was submitted")
}

function Form()  { 
  return (
    <form onSubmit={handleFormSubmit}>
      <input type="text" placeholder="write something" />
      <button>Submit</button>
    </form>
  )
}

export default Form;