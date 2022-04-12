import React, { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    firstName: "Sylvia",
    lastName: "Woods",
    admin: false,
  });

  // function handleFirstNameChange(event) {
  //   setFormData({
  //     ...formData,
  //     firstName: event.target.value, 
  //   });
  // }

  // function handleLastNameChange(event) {
  //   setFormData({
  //     // formData is an object, so we need to copy all the key/value pairs
  //     ...formData, 
  //      // we want to overwrite the lastName key with a new value
  //     lastName: event.target.value,
  //   });
  // }


  // Condensing the two functions (handleLastNameChange & handleFirstNameChange) into one function
  function handleChange(event) {
    // name is the KEY in of the formData object we're trying to update
    const name = event.target.name;
    let value = event.target.value;

    // use `checked` property of checkboxes instead of `value`
    if (event.target.type === "checkbox") {
      value = event.target.checked;
    }

    setFormData({
      ...formData,
      [name]:value,
    });

  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        name="firstName" 
        onChange={handleChange} 
        value={formData.firstName} 
      />
      <input 
        type="text"
        name="lastName" 
        onChange={handleChange} 
        value={formData.lastName} 
      />
      <input
        type="checkbox"
        name="admin"
        onChange={handleChange}
        checked={formData.admin}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
