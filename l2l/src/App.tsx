import { Link } from 'react-router-dom';
import Main from './Main';

export default function App() {
  return (
    <div>
      <header>
        <nav>
          <Link to='/'>HomePage</Link>
          <Link to='/song'>SongPage</Link>
          <Link to='/add'>AddPage</Link>
          <Link to='/favorites'>FavoritesPage</Link>
          <Link to='/sentences'>SentencesPage</Link>
        </nav>
      </header>
      <Main />       
    </div>
  )
}