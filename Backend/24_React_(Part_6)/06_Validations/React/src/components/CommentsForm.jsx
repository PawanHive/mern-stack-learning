import { useState } from "react";
import { useFormik } from "formik";

// A custom validation function. This must return an object
// which keys are symmetrical to our values/initialValues
const validate = (values) => {
  const errors = {};
  if (!values.username) {
    errors.username = "Required";
  }

  return errors;
};

export default function CommentsForm({ addNewComment }) {
  // let [formData, setFormData] = useState({
  //   username: "",
  //   remarks: "",
  //   rating: 5,
  // });

  const formik = useFormik({
    initialValues: {
      username: "",
      remarks: "",
      rating: "",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  // // input handler
  // let handleInputChange = (event) => {
  //   setFormData((currData) => {
  //     return { ...currData, [event.target.name]: event.target.value };
  //   });
  // };

  // // prevent form default behaviour
  // function handleSubmit(event) {
  //   console.log(formData);
  //   addNewComment(formData);
  //   event.preventDefault();
  //   setFormData({
  //     username: "",
  //     remarks: "",
  //     rating: 5,
  //   });
  // }

  return (
    <div>
      <h4>Give a Comments!</h4>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="username">Username: </label> &nbsp;
        <input
          type="text"
          id="username"
          placeholder="username"
          value={formik.values.username}
          onChange={formik.handleInputChange}
          name="username"
        />
        {formik.errors.username ? <div style={{color: "red"}}>{formik.errors.username}</div> : null}
        <br /> <br />
        <label htmlFor="remarks">Remarks: </label> &nbsp;
        <textarea
          placeholder="add few remarks"
          id="remarks"
          value={formik.values.remarks}
          onChange={formik.handleInputChange}
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
          value={formik.values.rating}
          onChange={formik.handleInputChange}
          name="rating"
        />
        <br /> <br />
        <button type="submit">Add Comments</button>
      </form>
    </div>
  );
}
