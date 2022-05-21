import { useState } from "react";

export type SongCard = {
  targetLang: string;
  userLang: string;
  artist: string;
  song: string;
  youtubeUrl: string;
  thumbnailUrl?: string;
  lyrics: string;
  favorite: boolean;
  token: string;
}

const AddPage: React.FC = () => {
  const [ targetLang, setTargetLang ] = useState<string>('');
  const [ userLang, setUserLang ] = useState<string>('');
  const [ artist, setArtist ] = useState<string>('');
  const [ song, setSong ] = useState<string>('');
  const [ youtubeUrl, setYoutubeUrl ] = useState<string>('');
  const [ thumbnailUrl, setThumbnailUrl ] = useState<string>('');
  const [ lyrics, setLyrics ] = useState<string>('');

  const langs1 = ['your language',
                 'af', 'ar', 'bn',
                 'cs', 'da', 'de',
                 'en', 'es', 'fa',
                 'fr', 'he', 'hi',
                 'hu', 'id', 'it',
                 'ja', 'ko', 'la',
                 'nl', 'no', 'pl',
                 'pt', 'ro', 'ru',
                 'sv', 'tl', 'tr',
                 'uk', 'vi', 'zh',
                 'zu'];

const langs2 = ['target language',
                'af', 'ar', 'bn',
                'cs', 'da', 'de',
                'en', 'es', 'fa',
                'fr', 'he', 'hi',
                'hu', 'id', 'it',
                'ja', 'ko', 'la',
                'nl', 'no', 'pl',
                'pt', 'ro', 'ru',
                'sv', 'tl', 'tr',
                'uk', 'vi', 'zh',
                'zu'];

  const mapLangs1 = langs1.map(lang => <option>{ lang }</option>);
  const mapLangs2 = langs2.map(lang => <option>{ lang }</option>);           

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
      targetLang,
      userLang,
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
          <select
            className="p-2 m-4 w-3/6 self-center rounded-md bg-white"
            value={ userLang }
            onChange={ (e) => setUserLang(e.target.value) }
            id="userLang"
            required
          >
            { mapLangs1 }
          </select>
          <select
            className="p-2 m-4 w-3/6 self-center rounded-md bg-white"
            value={ targetLang }
            onChange={ (e) => setTargetLang(e.target.value) }
            id="targetLang"
            required
          >
            { mapLangs2 }
          </select>
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
