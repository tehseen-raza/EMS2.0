import React, { useState } from 'react'



function AddEmployeeForm() {

  const [formValues, setFormValues] = useState({
    fName: '',
    lName: '',
    email: '',
    contact: '',
    age: '',
    dob: ''
  });

  const [message, setMessage] = useState();

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  }

  const handleSubmit = async (e) => {

    e.preventDefault();

    if (formValues.fName.length == 0 || formValues.lName.length == 0 || formValues.email.length == 0 || formValues.contact.length == 0 || formValues.age.length == 0 || formValues.dob.length == 0) {
      alert('Please fill full form!');
      console.log(formValues);
    } else {

      const allInputValues = {
        fName: formValues.fName,
        lName: formValues.lName,
        email: formValues.email,
        contact: formValues.contact,
        age: formValues.age,
        dob: formValues.dob
      }

      const url = 'http://localhost:5000/api/employee/add';
      let res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(allInputValues)
      });
      // let respjson = await res.json();
      if (res.status === 200) {
        setMessage('Data Added Successfully.')
      }

    }

  }

  // const redirectMe = () => {
  //   setTimeout(() => {
  //     location.replace("http://localhost:3000/")
  //   }, 3000)
  // }

  return (
    <>
      <p>{message}</p>
      <form className="row g-3" onSubmit={handleSubmit} method='POST'>
        <div className="col-md-6">
          <label className="form-label">First Name</label>
          <input type="text" name='fName' className="form-control" value={formValues.fName} onChange={handleInput} />
        </div>
        <div className="col-md-6">
          <label className="form-label">Last Name</label>
          <input type="text" name='lName' className="form-control" value={formValues.lName} onChange={handleInput} />
        </div>
        <div className="col-md-6">
          <label className="form-label">Email Address</label>
          <input type="email" name='email' className="form-control" value={formValues.email} onChange={handleInput} />
        </div>
        <div className="col-md-6">
          <label className="form-label">Contact Number</label>
          <input type="number" name='contact' className="form-control" value={formValues.contact} onChange={handleInput} />
        </div>
        <div className="col-md-6">
          <label className="form-label">Enter Your Age</label>
          <input min='18' max='40' type="number" name='age' className="form-control" value={formValues.age} onChange={handleInput} />
        </div>
        <div className="col-md-6">
          <label className="form-label">Date Of Birth</label>
          <input type='date' name='dob' className='form-control' value={formValues.age} onChange={handleInput} />
        </div>
        <div className="col-12 text-end">
          <button type="submit" className="btn btn-primary">Add Employee</button>
        </div>
      </form>
    </>

  )
}

export default AddEmployeeForm