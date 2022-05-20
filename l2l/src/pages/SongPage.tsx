import { useLocation } from "react-router-dom";
import { SongCard } from "./AddPage";
import ReactPlayer from "react-player";

const SongPage: React.FC = () => {
  const location = useLocation();
  const splitPathname = location.pathname.split('/');
  const getSongs = localStorage.getItem('songs');
  const parseSongs = typeof getSongs === 'string' && JSON.parse(getSongs);
  const findSong: SongCard = parseSongs.find((song: any) => song.token === splitPathname[2]);
  console.log(findSong.lyrics);
  
  return (
    <div className="flex">
      <h1 className="ml-5 text-2xl text-white">{ findSong.song } - { findSong.artist }</h1>
      <ReactPlayer
          url={ findSong.youtubeUrl }
          className='react-player'
          playing
          width='20%'
        />
        <p className="text-white border border-white w-2/6">{ findSong.lyrics }</p>
    </div>
  );
}

export default SongPage;