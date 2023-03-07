import React, { useEffect, useState } from 'react';

function DataContainer() {

    const [data, setData] = useState([]);

    useEffect(() => {

        const url = 'http://localhost:5000/api/employees';

        fetch(url, {
            method: "GET",
            mode: 'cors',
        }).then((resp) => {
            resp.json()
                .then((result) => {
                    setData(result.employees);
                })
        }).catch((err) => { console.log(err) })
    }, [])


    return (
        <>
            <div className="text-end">
                <a href='#!' className='btn btn-success py-2 px-3 mt-3 text-capitalize me-auto'>Add New Employee</a>
            </div>
            <div className='shadow mt-3'>
                <table className="table table-striped mt-3">
                    <thead>
                        <tr>
                            <th scope="col">No.</th>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Contact</th>
                            <th scope="col">Age</th>
                            <th scope="col">DOB</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((resp, key) => {
                                return (
                                    <tr key={key}>
                                        <th scope="row">{key + 1}</th>
                                        <td>{resp.fName}</td>
                                        <td>{resp.lName}</td>
                                        <td>{resp.email}</td>
                                        <td>{resp.contact}</td>
                                        <td>{resp.age}</td>
                                        <td>{resp.dateOfBirth}</td>
                                        <td>
                                            <button className='btn btn-outline-warning me-1 text-dark'>Edit</button>
                                            <button className='btn btn-danger ms-1'>Delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default DataContainer