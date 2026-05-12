import { useState } from "react";

export default function CommentsForm() {
  let [formData, setFormData] = useState({
    username: "",
    remarks: "",
    rating: 5,
  });

  // input handler
  let handleInputChange = (event) => {
    setFormData((currData) => {
      return { ...currData, [event.target.name]: event.target.value };
    });
  };

  // prevent form default behaviour
  function handleSubmit(event) {
    console.log(formData);
    event.preventDefault();
    setFormData({
      username: "",
      remarks: "",
      rating: 5,
    })
  }

  return (
    <div>
      <h4>Give a Comments!</h4>
      <form onSubmit={handleSubmit}>

        <label htmlFor="username">Username: </label> &nbsp;
        <input
          type="text"
          id="username"
          placeholder="username"
          value={formData.username}
          onChange={handleInputChange}
          name="username"
        />
        <br /> <br />

        <label htmlFor="remarks">Remarks: </label> &nbsp;
        <textarea
          placeholder="add few remarks"
          id="remarks"
          value={formData.remarks}
          onChange={handleInputChange}
          name="remarks"
        >
          Remarks
        </textarea>
        <br /> <br />

        <label htmlFor="rating">Rating: </label> &nbsp;
        <input
          type="number"
          id="rating"
          placeholder="rating"
          min={1}
          max={5}
          value={formData.rating}
          onChange={handleInputChange}
          name="rating"
        />
        <br /> <br />

        <button>Add Comments</button>
      </form>
    </div>
  );
}
