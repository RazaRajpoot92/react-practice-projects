import React, { useState } from "react";
import notebg from "../assets/note-bg.png";
import NoteCard from "./NoteCard";

const NoteForm = () => {

  const [note, setNote] = useState(JSON.parse(localStorage.getItem('notes')));
  const [heading, setHeading] = useState("");
  const [details, setDetails] = useState("");

  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (heading.length == 0 || details.length == 0 || heading.length > 25) {
      window.alert("Please enter heading or detail, maximum 24 character");
    } else {
      const newNote = { heading, details };
      const copyNote = [...note];
      copyNote.push(newNote);
      setNote(copyNote);
      setDetails("");
      setHeading("");
     const localNotes = JSON.parse( localStorage.getItem('notes'))
     localNotes.push(copyNote)
     localStorage.setItem("notes", JSON.stringify(localNotes))
    }
  };

  const handleInput = (e) => {
    setHeading(e.target.value);
  };

  const handleText = (e) => {
    setDetails(e.target.value);
  };

  const removeNote = (id) => {
    const noteCopy = [...note];
    noteCopy.splice(id, 1);
    setNote(noteCopy);
    localStorage.setItem('notes',JSON.stringify(noteCopy))
  };

  return (
    <>
      <div className="flex justify-center  mt-8">
        <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col gap-4">
          <input
            onChange={(e) => handleInput(e)}
            value={heading}
            className="border-2 w-125 p-2 rounded-md text-gray-600 focus:border-violet-500 outline-none"
            type="text"
            placeholder="Enter note heading"
          />
          <textarea
            onChange={(e) => handleText(e)}
            value={details}
            placeholder="Enter note details..."
            name=""
            id=""
            className="outline-none text-gray-600 border-2 rounded-md min-h-50 p-2 focus:border-violet-500"
          />
          <button className="bg-violet-500 py-2 text-white rounded-md">
            Add Note
          </button>
        </form>
      </div>



      <div className="px-5 py-10 gap-2 flex flex-wrap justify-center">
        {note.map((item, idx) => (
          <NoteCard fn={removeNote} item = {item} key={idx} idx = {idx} />
        ))}
      </div>
    </>
  );
};

export default NoteForm;
