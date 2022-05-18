const AddPage: React.FC = () => {
  return (
    <div className="mt-5">
      <h1 className="ml-5 text-2xl text-white">Add a new Song!</h1>
      <form className="flex flex-col mt-5 text-xl">
        <input className="p-2 m-6 w-3/6 self-center boder-2 border-salmon rounded-md" type="text" id="language" placeholder="target language" required />
        <input className="p-2 m-6 w-3/6 self-center boder-2 border-salmon rounded-md" type="text" id="artist" placeholder="artist name" required />
        <input className="p-2 m-6 w-3/6 self-center boder-2 border-salmon rounded-md" type="text" id="song" placeholder="song name" required />
        <input className="p-2 m-6 w-3/6 self-center boder-2 border-salmon rounded-md" type="text" id="youtubeUrl" placeholder="youtube URL" required />
        <input className="p-2 m-6 w-3/6 self-center boder-2 border-salmon rounded-md" type="text" id="thumbnail" placeholder="thumbnail URL (optional)" />
        <textarea className="p-2 m-6 w-3/6 self-center boder-2 border-salmon rounded-md" cols={30} rows={10} placeholder="lyrics here!" />
      </form>
    </div>
  );
}

export default AddPage;
