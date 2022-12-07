import React from "react";

const getNote = async (noteId: string) => {
  const res = await fetch(
    `http://127.0.0.1:8090/api/collections/notes/records/${noteId}`,
    { cache: "no-store" }
  );
  const data = await res.json();
  return data;
  return <div>Notes</div>;
};

export default getNote;
