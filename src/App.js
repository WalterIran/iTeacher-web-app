import './App.css';
import { Routes, Route } from 'react-router-dom';
import SamplePage from './components/Views/Sample/SamplePage';
import Login from './components/Views/Login/Login';
import TeacherPage from './components/Views/Teacher/TeacherPage';
import Profile from './components/Views/Profile/ProfilePage';
import Search from './components/Views/Search/SearchPage';

function App() {
  return (
      <Routes>
        <Route path='/' element={<SamplePage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/teacher-registration' element={<TeacherPage />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/search' element={<Search />} />
      </Routes>
  );
}

export default App;
