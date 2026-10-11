import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from '@/pages/HomePage';
import MovieDetailPage from './pages/MovieDetailPage';
import Layout from './components/common/Layout';
import ScrollToTop from './components/common/ScrollToTop';
import { ToastProvider } from '@/context/ToastProvider';
import Toast from '@/components/common/Toast';
import FavoritesPage from './pages/FavoritesPage';
import SearchPage from './pages/SearchPage';

function App() {
  // TODO: Setup routing dengan React Router
  // TODO: Implement layout structure
  // TODO: Add navigation between pages

  return (
    <BrowserRouter>
      <ToastProvider>
        <ScrollToTop />
        <Toast />

        <Routes>
          <Route element={<Layout />}>
            <Route path='/' element={<HomePage />} />
            <Route path='/movie/:movieId' element={<MovieDetailPage />} />
            <Route path='/favorites' element={<FavoritesPage />} />
            <Route path='/search' element={<SearchPage />} />
          </Route>
        </Routes>
      </ToastProvider>
    </BrowserRouter>
  );
}

export default App;
