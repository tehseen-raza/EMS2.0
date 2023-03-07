import './App.css';
import DataContainer from './components/DataContainer';
import Header from './components/Header';
// import AddEmployeeForm from './pages/AddEmployeeForm';

function App() {
  return (
    <div className='container'>
      <Header />
      <DataContainer />
      {/* <AddEmployeeForm /> */}
    </div>
  )
}

export default App;
