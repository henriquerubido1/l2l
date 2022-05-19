import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SongPage from './pages/SongPage';
import AddPage from './pages/AddPage';
import FavoritesPage from './pages/FavoritesPage';
import SentencesPage from './pages/SentencesPage';

const Main = () => {
return (         
  <Routes>
    <Route path="/" element={ <HomePage/> } />
    <Route path="/song/:token" element={ <SongPage/> } />
    <Route path="/add" element={ <AddPage/> } />
    <Route path="/favorites" element={ <FavoritesPage/> } />
    <Route path="/sentences" element={ <SentencesPage/> } />
  </Routes>
);
}
export default Main;