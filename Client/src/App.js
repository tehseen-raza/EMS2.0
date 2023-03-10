import './App.css';
import DataContainer from './components/DataContainer';
import AddEmployeeForm from './pages/AddEmployeeForm';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router> 
      <Routes>
        <Route path='/' element={<DataContainer />} />
        <Route path='addemployee' element={<AddEmployeeForm />} />
      </Routes>
    </Router>
  )
}

export default App;
