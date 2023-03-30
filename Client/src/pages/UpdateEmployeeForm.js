import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../components/Header';


function UpdateEmployeeForm() {


    const [finalData, setFinalData] = useState('');
    const [fName, setFName] = useState('');
    const [lName, setLName] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');
    const [age, setAge] = useState('');
    const [dob, setDob] = useState('');

    // Fetching Data / Prefill form with existing data

    useEffect(() => {
        getResponse();
    }, [])

    // === === === === === === ===
    async function getResponse() {
        const response = await fetch(`http://localhost:5000/api/employee/${id}`, {
            method: 'PUT'
        })
            .then(resp => resp.json())
            .then((res) => {
                setFinalData(res.employee);
            })
            .catch((err) => { console.log(err) });
    }


    // === === === === === === ===


    const { id } = useParams();

    const handleInput1 = (e) => {
        const { value } = e.target;
        setFName(value);
    }
    const handleInput2 = (e) => {
        const { value } = e.target;
        setLName(value);
    }
    const handleInput3 = (e) => {
        const { value } = e.target;
        setEmail(value);
    }
    const handleInput4 = (e) => {
        const { value } = e.target;
        setContact(value);
    }
    const handleInput5 = (e) => {
        const { value } = e.target;
        setAge(value);
    }
    const handleInput6 = (e) => {
        const { value } = e.target;
        setDob(value);
    }

    const handleUpdate = (e) => {
        e.preventDefault();

        const allUpdatedValues = {
            fName: fName,
            lName: lName,
            email: email,
            contact: contact,
            age: age,
            dob: dob
        }


        fetch(`http://localhost:5000/api/employee/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(allUpdatedValues)
        })
            .then((resp) => resp.json()
                .then(() => {
                    alert('Data Updated Successfully!');
                })
            )
    }

    // =========================================

    return (
        <>
            <div className='container'>
                <Header />
                <form className="row g-3" onSubmit={handleUpdate}>
                    <div className="col-md-6">
                        <label className="form-label">First Name</label>
                        <input type="text" name='fName' className="form-control" defaultValue={finalData.fName} onChange={handleInput1} />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Last Name</label>
                        <input type="text" name='lName' className="form-control" defaultValue={finalData.lName} onChange={handleInput2} />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Email Address</label>
                        <input type="email" name='email' className="form-control" defaultValue={finalData.email} onChange={handleInput3} />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Contact Number</label>
                        <input type="number" name='contact' className="form-control" defaultValue={finalData.contact} onChange={handleInput4} />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Enter Your Age</label>
                        <input min='18' max='40' type="number" name='age' className="form-control" defaultValue={finalData.age} onChange={handleInput5} />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Date Of Birth</label>
                        <input type='date' name='dob' className='form-control' defaultValue={finalData.dob} onChange={handleInput6} />
                    </div>
                    <div className="col-12 text-end">
                        <button onClick={handleUpdate} className="btn btn-primary">Update Employee</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default UpdateEmployeeForm