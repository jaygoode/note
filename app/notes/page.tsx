const getNotes = async () => {
  const res = await fetch(
    "http://127.0.0.1:8090/api/collections/notes/records?page=1&perPage=30"
  );
};

const NotesPage = async () => {
  return (
    <div>
      <h1>NotesPage</h1>
    </div>
  );
};

export default NotesPage;
