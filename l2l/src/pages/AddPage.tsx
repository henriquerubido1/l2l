import { useState } from "react";

export type SongCard = {
  language: string;
  artist: string;
  song: string;
  youtubeUrl: string;
  thumbnailUrl?: string;
  lyrics: string;
  favorite: boolean;
  token: string;
}

const AddPage: React.FC = () => {
  const [ language, setLanguage ] = useState<string>('');
  const [ artist, setArtist ] = useState<string>('');
  const [ song, setSong ] = useState<string>('');
  const [ youtubeUrl, setYoutubeUrl ] = useState<string>('');
  const [ thumbnailUrl, setThumbnailUrl ] = useState<string>('');
  const [ lyrics, setLyrics ] = useState<string>('');
  let songsArr: SongCard[] = [];

  // https://stackoverflow.com/questions/8532406/create-a-random-token-in-javascript-based-on-user-details

  function generate_token(){
    //edit the token allowed characters
    let a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890".split("");
    let b = [];  
    for (let i = 0; i < 6; i += 1) {
        let j: any = (Math.random() * (a.length-1)).toFixed(0);
        b[i] = a[j];
    }
    
    const token = b.join("");
    
    return token;
}

  function saveSong() {
    const currentSong: SongCard = {
      language,
      artist,
      song,
      youtubeUrl,
      thumbnailUrl,
      lyrics,
      favorite: false,
      token: generate_token(),
    }

    const getArr: string | null = localStorage.getItem('songs')

    if (getArr !== null) {
      songsArr = [...songsArr, ...JSON.parse(getArr)];
    } 

    songsArr = [...songsArr, currentSong]

    localStorage.setItem('songs', JSON.stringify(songsArr))
  };



  return (
    <div className="mt-5">
      <h1 className="ml-5 text-2xl text-white">Add a new Song!</h1>
      <form className="flex flex-col mt-5 text-xl">
        <input
          value={ language }
          onChange={ (e) => setLanguage(e.target.value) }
          className="p-2 m-4 w-3/6 self-center rounded-md"
          type="text"
          id="language"
          placeholder="target language"
          required
        />
        <input
          value={ artist }
          onChange={ (e) => setArtist(e.target.value) }
          className="p-2 m-4 w-3/6 self-center rounded-md"
          type="text"
          id="artist"
          placeholder="artist name"
          maxLength={14}
          required
        />
        <input
          value={ song }
          onChange={ (e) => setSong(e.target.value) }
          className="p-2 m-4 w-3/6 self-center rounded-md"
          type="text"
          id="song"
          placeholder="song name"
          maxLength={16}
          required
        />
        <input
          value={ youtubeUrl }
          onChange={ (e) => setYoutubeUrl(e.target.value) }
          className="p-2 m-4 w-3/6 self-center rounded-md"
          type="text"
          id="youtubeUrl"
          placeholder="youtube URL"
          required
        />
        <input
          value={ thumbnailUrl }
          onChange={ (e) => setThumbnailUrl(e.target.value) }
          className="p-2 m-4 w-3/6 self-center rounded-md"
          type="text"
          id="thumbnail"
          placeholder="thumbnail URL (optional)"
        />
        <textarea
          value={ lyrics }
          onChange={ (e) => setLyrics(e.target.value) }
          className="p-2 m-4 w-3/6 self-center rounded-md"
          cols={20}
          rows={8}
          placeholder="lyrics here!"
          required
        />
        <button
          className="bg-salmon w-40 p-3 mt-3 rounded-md text-white self-center border border-white-500 opacity-75 hover:opacity-100"
          type="submit"
          onClick={ saveSong }
        >
          Add Song
        </button>
      </form>
    </div>
  );
}

export default AddPage;
