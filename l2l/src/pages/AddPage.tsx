const AddPage: React.FC = () => {
  return (
    <div className="mt-5">
      <h1 className="ml-5 text-2xl text-white">Add a new Song!</h1>
      <form className="flex flex-col mt-5 text-xl">
        <input
          className="p-2 m-4 w-3/6 self-center rounded-md"
          type="text"
          id="language"
          placeholder="target language"
          required
        />
        <input
          className="p-2 m-4 w-3/6 self-center rounded-md"
          type="text"
          id="artist"
          placeholder="artist name"
          required
        />
        <input
          className="p-2 m-4 w-3/6 self-center rounded-md"
          type="text"
          id="song"
          placeholder="song name"
          required
        />
        <input
          className="p-2 m-4 w-3/6 self-center rounded-md"
          type="text"
          id="youtubeUrl"
          placeholder="youtube URL"
          required
        />
        <input
          className="p-2 m-4 w-3/6 self-center rounded-md"
          type="text"
          id="thumbnail"
          placeholder="thumbnail URL (optional)"
        />
        <textarea
          className="p-2 m-4 w-3/6 self-center rounded-md"
          cols={20}
          rows={8}
          placeholder="lyrics here!"
        />
        <button
          className="bg-salmon w-40 p-3 mt-3 rounded-md text-white self-center border border-white-500 opacity-75 hover:opacity-100"
          type="submit"
        >
          Add Song
        </button>
      </form>
    </div>
  );
}

export default AddPage;
