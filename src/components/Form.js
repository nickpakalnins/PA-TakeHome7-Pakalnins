import React from "react";
import "../components/Form.css";

function Form() {
  const [formData, setFormData] = React.useState({
    fullName: "",
    desiredUsername: "",
    currentEmail: "",
    address: "",
    phone: "",
  });

  function handleChange(e) {
    // name, value, type, checked
    // could use -> e.target.type, but here we'll do object destructuring
    // Ex: cond1 === cond2 ? T : F (is condition1 = condition2? If true, use the true statement, if not, use false.)

    const { name, value, type, checked } = e.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
        // This is saying, if the name being called has the type of "checkbox", then use the "checked" property, otherwise
        // use the "value" property.
      };
    });
  }

  // handleSubmit event listener

  function handleSubmit(e) {
    e.preventDefault(); // This prevents the page from refreshing once you hit the Submit button in case of errors or wanted changes
    console.log(formData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>User Sign-Up Form</h1>
      <div>
        <label>Full Name</label>
        <input
          type="text"
          className="name-input"
          placeholder="User Full Name"
          name="fullName"
          onChange={handleChange}
        ></input>
        <br />
        <label>Desired Username</label>
        <input
          type="text"
          className="desired-input"
          placeholder="User Desired Username"
          name="desiredUsername"
          onChange={handleChange}
        ></input>
        <br />
        <label>Current Email</label>
        <input
          type="text"
          className="email-input"
          placeholder="Enter Current Email"
          name="currentEmail"
          onChange={handleChange}
        ></input>
        <br />
        <label>Address</label>
        <input
          type="text"
          className="address-input"
          placeholder="Enter Current Address"
          name="address"
          onChange={handleChange}
        ></input>
        <br />
        <label>Phone Number</label>
        <input
          type="text"
          className="phone-input"
          placeholder="Enter Your Phone Number"
          name="phone"
          onChange={handleChange}
        ></input>
        <br />
        <button>Submit</button>
      </div>
    </form>
  );
}

export default Form;
