import { SongCard } from "./AddPage";
import StandardThumbnail from '../images/standardThumbnail.jpg';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  const getSongs: string | null = localStorage.getItem('songs');
  const parseSongs: SongCard[] = typeof getSongs === 'string' && JSON.parse(getSongs);
  console.log(parseSongs);
  

  return (
    <div className="mt-5">
      <h1 className="ml-5 text-2xl text-white">Home</h1>
      <section className="text-white flex items-center flex-wrap m-5">
        { typeof getSongs === 'string' && (
          parseSongs.map((song) => (
            <Link to={ `song/${song.token}` } className="m-5 border border-white">
              { song.thumbnailUrl === '' ? (
                <img className="w-52" src={ StandardThumbnail } alt="thumbnail" />
              ) : (
                <img className="w-52" src={ song.thumbnailUrl } alt={ song.song } />
              )
            }
            <h3 className="max-w-fit m-2 font-bold">{ song.song }</h3>
            <h4 className="max-w-fit m-2 text-light-gray opacity-75">{ song.artist }</h4>
            <h4 className="m-2 text-bold">{ song.language }</h4>
            </Link>
          ))
        )}
      </section>
    </div>
  );
}

export default HomePage;