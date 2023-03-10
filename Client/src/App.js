import './App.css';
import DataContainer from './components/DataContainer';
import AddEmployeeForm from './pages/AddEmployeeForm';
import UpdateEmployeeForm from './pages/UpdateEmployeeForm';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<DataContainer />} />
        <Route path='/add/employee' element={<AddEmployeeForm />} />
        <Route path='/update/employee/:id' element={<UpdateEmployeeForm />} />
      </Routes>
    </Router>
  )
}

export default App;
