import './App.css';
import { Routes, Route } from 'react-router-dom';
import SamplePage from './components/Views/Sample/SamplePage';
import Login from './components/Views/Login/Login';
<<<<<<< HEAD
import TeacherPage from './components/Views/Teacher/TeacherPage';
import Profile from './components/Views/Profile/ProfilePage';
import Search from './components/Views/Search/SearchPage';
=======
import Review from './components/Views/Review/Review';
>>>>>>> cdda54d85d23b003544729e0aeae95f774adeeda

function App() {
  return (
      <Routes>
        <Route path='/' element={<SamplePage />} />
        <Route path='/login' element={<Login />} />
<<<<<<< HEAD
        <Route path='/teacher-registration' element={<TeacherPage />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/search' element={<Search />} />
=======
        <Route path='/review' element={<Review />} />
>>>>>>> cdda54d85d23b003544729e0aeae95f774adeeda
      </Routes>
  );
}

export default App;
