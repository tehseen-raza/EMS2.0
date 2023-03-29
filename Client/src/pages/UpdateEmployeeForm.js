import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../components/Header';


function UpdateEmployeeForm() {


    const [formValues, setFormValues] = useState({
        fName: '',
        lName: '',
        email: '',
        contact: '',
        age: '',
        dob: ''
    });

    useEffect(() => {
        fetch(`http://localhost:5000/api/employee/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' }
        })
            .then(resp => resp.json())
            .then(data => setFormValues(data))
            .catch((err) => { console.log(err) });
    }, [])

    const { id } = useParams();
    console.log(id);

    const handleUpdate = () => {

    }

    const handleInput = (e) => {
        console.warn(e);
    }


    return (
        <>
            <div className='container'>
                <Header />
                <form className="row g-3" onSubmit={handleUpdate} method='POST'>
                    <div className="col-md-6">
                        <label className="form-label">First Name</label>
                        <input type="text" name='fName' className="form-control" defaultValue={formValues.fName} onChange={handleInput} />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Last Name</label>
                        <input type="text" name='lName' className="form-control" defaultValue={formValues.lName} onChange={handleInput} />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Email Address</label>
                        <input type="email" name='email' className="form-control" defaultValue={formValues.email} onChange={handleInput} />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Contact Number</label>
                        <input type="number" name='contact' className="form-control" defaultValue={formValues.contact} onChange={handleInput} />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Enter Your Age</label>
                        <input min='18' max='40' type="number" name='age' className="form-control" defaultValue={formValues.age} onChange={handleInput} />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Date Of Birth</label>
                        <input type='date' name='dob' className='form-control' defaultValue={formValues.dob} onChange={handleInput} />
                    </div>
                    <div className="col-12 text-end">
                        <button type="submit" className="btn btn-primary">Update Employee</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default UpdateEmployeeForm