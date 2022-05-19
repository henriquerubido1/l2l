import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className='bg-black text-salmon-two flex justify-between'>
      <Link className='ml-5' to='/'>
        <h1 className='text-5xl'>L2L</h1>
        <p>Lyrics to Languages</p>
      </Link>
      <nav>
        <Link className="text-xl leading-loose font-bold p-5 hover:underline" to='/add'>Add</Link>
        <Link className="text-xl leading-loose font-bold p-5 hover:underline" to='/'>Home</Link>
        <Link className="text-xl leading-loose font-bold p-5 hover:underline" to='/favorites'>Favorites</Link>
        <Link className="text-xl leading-loose font-bold p-5 hover:underline" to='/sentences'>Sentences</Link>
      </nav>
  </header>
  );
}