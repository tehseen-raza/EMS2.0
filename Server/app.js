const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(cors({
    origin: 'http://localhost:3000', // use your actual domain name (or localhost), using * is not recommended
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'HEAD', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Origin', 'X-Requested-With', 'Accept', 'x-client-key', 'x-client-token', 'x-client-secret', 'Authorization'],
    credentials: true
}))

// Database Connection
mongoose.connect('mongodb://localhost:27017/EMS',
    {
        useNewUrlParser: true, useUnifiedTopology: true
    })
    .then(() => {
        console.log('Connection Successful!');
    })
    .catch((err) => {
        console.log(err);
    })


app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

// Database Schema
const employeeScheema = new mongoose.Schema({
    fName: String,
    lName: String,
    email: String,
    contact: Number,
    age: Number,
    // dateOfBirth: {
    //     type: Date,
    //     default: "10-07-1999",
    // },
    dateOfBirth: String,
})


const Employee = new mongoose.model('Employee', employeeScheema);

// Add New Employee 
app.post('/api/employee/add', async (req, res) => {

    const employeeData = await Employee.create(req.body);
    res.status(200).json({
        success: true,
        employeeData,
    })

})

// Get Employee Data
app.get('/api/employees', async (req, res) => {
    const employees = await Employee.find();
    res.status(200).json({
        success: true,
        employees
    })
})

// Update Employee Data
app.put('/api/employee/:id', async (req, res) => {
    let employee = await Employee.findById(req.params.id);

    employee = await Employee.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        useFindAndModify: false,
        runvalidators: true
    })

    res.status(200).json({
        success: true,
        employee
    })
})

// Delete Employee
app.delete('/api/employee/:id', async (req, res) => {

    const employee = await Employee.findByIdAndDelete(req.params.id);

    if (!employee) {
        return res.status(500).json({
            success: false,
            message: "Employee data not found!"
        })
    }

    res.status(200).json({
        success: true,
        message: "Employee deleted successfuly!"
    })

})



app.listen(5000, () => {
    console.log("Server is running on port http://localhost:5000");
});