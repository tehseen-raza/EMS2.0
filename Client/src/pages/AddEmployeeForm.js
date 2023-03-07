import React, { useState } from 'react'



function AddEmployeeForm() {





  return (
    <form className="row g-3">
      <div className="col-md-6">
        <label for='fName' className="form-label">First Name</label>
        <input type="text" className="form-control" id='fName' />
      </div>
      <div className="col-md-6">
        <label for='lName' className="form-label">Last Name</label>
        <input type="text" className="form-control" id='lName' />
      </div>
      <div className="col-md-6">
        <label for='email' className="form-label">Email Address</label>
        <input type="email" className="form-control" id='email' />
      </div>
      <div className="col-md-6">
        <label for='cNumber' className="form-label">Contact Number</label>
        <input type="number" className="form-control" id='cNumber' />
      </div>
      <div className="col-md-6">
        <label for='age' className="form-label">Enter Your Age</label>
        <input type="number" className="form-control" id='age' />
      </div>
      <div className="col-md-6">
        <label for='dob' className="form-label">Date Of Birth</label>
        <input type='date' className='form-control' id='dob' />
      </div>
      <div className="col-12 text-end">
        <button type="submit" className="btn btn-primary">Add Employee</button>
      </div>
    </form>

  )
}

export default AddEmployeeForm