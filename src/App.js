import './App.css';
import { Routes, Route } from 'react-router-dom';
import SamplePage from './components/Views/Sample/SamplePage';
import RegisterOption from './components/Views/Register/Options/Register.optionsPage';
import Login from './components/Views/Login/Login';
import StudentRegister from './components/Views/Register/Students/Student.registrationPage'

function App() {
  return (
      <Routes>
        <Route path='/' element={<SamplePage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register-options' element={<RegisterOption/>} />
        <Route path='/student-registration' element={<StudentRegister/>} />
      </Routes>
  );
}

export default App;
