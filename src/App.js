import './App.css';
import { Routes, Route } from 'react-router-dom';
import SamplePage from './components/Views/Sample/SamplePage';
import Login from './components/Views/Login/Login';
import ReviewPage from './components/Views/Review/ReviewPage';
import CoursePage from './components/Views/Course/CoursePage';

function App() {
  return (
      <Routes>
        <Route path='/' element={<SamplePage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/reviews' element={<ReviewPage />} />
        <Route path='/add-course' element={<CoursePage />} />
      </Routes>
  );
}

export default App;
