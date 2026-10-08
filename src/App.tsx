import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from '@/pages/HomePage';
import MovieDetailPage from './pages/MovieDetailPage';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import { ToastProvider } from '@/context/ToastProvider';
import Toast from '@/components/Toast';

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
          </Route>
        </Routes>
      </ToastProvider>
    </BrowserRouter>
  );
}

export default App;
