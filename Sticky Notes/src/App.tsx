import { useEffect, useState } from 'react'
import Navbar from './Navbar.tsx'
import type { Note }  from "./Objects.ts"
import NotesCard from "./NotesCard.tsx"

function App() {

  
  const initialNotes: Note[] = [
    {
      id: 1,
      content: "This is a sample note.\n It can have multiple lines.",
    },
    {
      id: 2,
      content: "This is a text note."
    },
    {
      id: 3,
      content: "https://example.com/image.jpg"
    }
  ]

  const [notes, setNotes] = useState<Note[]>(initialNotes);

  const addNewNote = () => {
        setNotes((prevNotes) => [
            ...prevNotes,
            {
                id: 0,
                content: "This is a new note."
            }
        ]);
    };

    useEffect(() => {
        // This effect could be used to fetch notes from an API or local storage
        console.log("Notes loaded:", notes);
    }, [notes]);

  return (
    <>
    <Navbar />
    <main className="py-10">
      
      <h1>Sticky Notes</h1>
      <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={addNewNote}>Add Note</button>
      <div className="flex mb-4 ">
        
      {notes.map((note) => (
        <NotesCard key={note.id} note={note} />
      ))}
      </div>
    </main>
    </>
  )
}

export default App
