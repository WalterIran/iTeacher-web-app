import './App.css';
import { Routes, Route } from 'react-router-dom';
import SamplePage from './components/Views/Sample/SamplePage';
import Login from './components/Views/Login/Login';
import TeacherPage from './components/Views/Teacher/TeacherPage';

function App() {
  return (
      <Routes>
        <Route path='/' element={<SamplePage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/teacher-registration' element={<TeacherPage />} />
      </Routes>
  );
}

export default App;
