import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <h1>L2L</h1>
      <nav>
        <Link className="m-10 p-10 hover:underline" to='/add'>Add</Link>
        <Link className="m-10 p-10 hover:underline" to='/song'>Song</Link>
        <Link className="m-10 p-10 hover:underline" to='/'>Home</Link>
        <Link className="m-10 p-10 hover:underline" to='/favorites'>Favorites</Link>
        <Link className="m-10 p-10 hover:underline" to='/sentences'>Sentences</Link>
      </nav>
  </header>
  );
}