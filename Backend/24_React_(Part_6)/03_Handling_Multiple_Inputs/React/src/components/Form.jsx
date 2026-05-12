import { useState } from "react";

export default function Form() {
  // // FULLNAME state variable
  // let [fullName, setFullName] = useState("")

  // // USERNAME state variable
  // let [username, setUsername] = useState("")

  // Common Input Handler for (FULLNAME + USERNAME + more)
  let [formData, setFormData] = useState({
    fullName: "",
    username: "",
    password: "",
  });

  // let handleFullname = (event) => {
  //   setFullName(event.target.value)
  //   // console.log(event.target.value) // remember this
  // }

  // let handleUsername = (event) => {
  //   setUsername(event.target.value)
  // }

  // // Common onChange handler for multiple inputs
  // let handleInputChange = () => {
  //   let fieldName = event.target.name; // detect and tells us in which input field changes happen
  //   let newValue = event.target.value; // tells value we typed in side input box

  //   setFormData((currData) => {
  //     currData[fieldName] = newValue;  // variable inside [] bracket known as computed property name
  //     return {...currData};
  //   })
  //   // console.log(fieldName);
  //   // console.log(newValue);
  // };

  // // REFACTORING: 'handleInputChange' (Common onChange handler for multiple inputs)
  // let handleInputChange = () => {
  //   let fieldName = event.target.name; 
  //   let newValue = event.target.value;

  //   setFormData((currData) => {
  //     return {...currData, [fieldName]: newValue};
  //   })
  // };

  // REFACTORING AGAIN: 'handleInputChange' (Common onChange handler for multiple inputs) - COMMON CONVENTION
  let handleInputChange = (event) => {
    setFormData((currData) => {
      return {...currData, [event.target.name]: event.target.value}; // remember this 
    })
  };

  // prevent default behaviour of form Submit
  let handleSubmit = (event) => {
    event.preventDefault();
    setFormData({  // it will make input box empty after submit
      fullName: "",
      username: "",
      password: "",
    })
  }

  
  return (
    <form onSubmit={handleSubmit}>
      {/* Full Name */}
      <label htmlFor="fullname">Full Name: </label>
      &nbsp;
      <input
        type="text"
        placeholder="fullname"
        value={formData.fullName} // as we add 'value' attribute and given state variable 'fullname' as a value, then now form input is connected to react state variable
        onChange={handleInputChange}
        id="fullname"
        name="fullName" // 'name' attribute value should match with state variable name like 'fullName'
      />
      <br />


      <label htmlFor="username">Username: </label>
      &nbsp;
      <input
        type="text"
        placeholder="username"
        value={formData.username} // as we add 'value' attribute and given state variable 'username' as a value, then now form input is connected to react state variable
        onChange={handleInputChange}
        id="username"
        name="username" // 'name' attribute value should match with state variable name like 'username'
      />
      <br />


      <label htmlFor="password">Password: </label>
      &nbsp;
      <input
        type="password"
        placeholder="enter password"
        value={formData.password} // as we add 'value' attribute and given state variable 'username' as a value, then now form input is connected to react state variable
        onChange={handleInputChange}
        id="password"
        name="password" // 'name' attribute value should match with state variable name like 'username'
      />
      <br />


      <button>Submit</button>
    </form>
  );
}
