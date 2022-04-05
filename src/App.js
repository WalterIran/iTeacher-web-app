import './App.css';
import { Routes, Route } from 'react-router-dom';
import SamplePage from './components/Views/Sample/SamplePage';
import RegisterOption from './components/Views/Register/Options/Register.optionsPage';
import Login from './components/Views/Login/Login';
import TeacherPage from './components/Views/Teacher/TeacherPage';
import Profile from './components/Views/Profile/ProfilePage';
import Search from './components/Views/Search/SearchPage';
import Review from './components/Views/Review/Review';
import StudentRegister from './components/Views/Register/Students/Student.registrationPage'

function App() {
  return (
      <Routes>
        <Route path='/' element={<SamplePage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/teacher-registration' element={<TeacherPage />} />
        <Route path='/profile/:id' element={<Profile />} />
        <Route path='/search' element={<Search />} />
        <Route path='/review' element={<Review />} />
        <Route path='/register-options' element={<RegisterOption/>} />
        <Route path='/student-registration' element={<StudentRegister/>} />
      </Routes>
  );
}

export default App;
