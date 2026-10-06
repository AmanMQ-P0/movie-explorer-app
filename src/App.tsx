import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from '@/pages/HomePage';
import MovieDetailPage from './pages/MovieDetailPage';

function App() {
  // TODO: Setup routing dengan React Router
  // TODO: Implement layout structure
  // TODO: Add navigation between pages

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/movie/:movieId' element={<MovieDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
