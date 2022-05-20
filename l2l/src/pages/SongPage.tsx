import { useState } from "react";
import { useLocation } from "react-router-dom";
import { SongCard } from "./AddPage";
import ReactPlayer from "react-player";

const SongPage: React.FC = () => {
  const location = useLocation();
  const splitPathname = location.pathname.split('/');
  const getSongs = localStorage.getItem('songs');
  const parseSongs = typeof getSongs === 'string' && JSON.parse(getSongs);
  const findSong: SongCard = parseSongs.find((song: any) => song.token === splitPathname[2]);
  const [ notes, setNotes ] = useState<string>('');
  
  return (
    <div className="text-white">
      <h1 className="ml-5 text-2xl">{ findSong.song } - { findSong.artist }</h1>
      <div className="flex m-5">
        <div className="border border-salmon h-2/5 w-2/6">
        <ReactPlayer
            url={ findSong.youtubeUrl }
            className='react-player'
            playing
            loop={true}
            controls={true}
            width="100%"
          />
        </div>
        <div className="ml-10 bg-black border border-salmon rounded-md p-2">
          { findSong.lyrics.split('\n').map(line => <p className="text-2xl m-1">{ line }</p>)}
        </div>
        <div className="ml-5 w-3/5">
          <textarea
            className="p-2 ml-10 w-5/6 h-80 rounded-md bg-black border border-salmon text-xl"
            cols={10}
            rows={10}
            placeholder="take notes!"
            required
          />
          <div className="p-2 ml-10 w-5/6 h-80 rounded-md bg-black border border-salmon text-xl">
          </div>
        </div>
      </div>
    </div>
  );
}

export default SongPage;