import { useState } from 'react'
import Navbar from './Navbar.tsx'
import Note from "./Objects.ts"
import NotesCard from "./NotesCard.tsx"

function App() {

  const notes: Note[] = [
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

  return (
    <>
    <Navbar />
    <main className="py-10">
      
      <h1>Sticky Notes</h1>
      <div className="flex mb-4">
        
      {notes.map((note) => (
        <NotesCard key={note.id} note={note} />
      ))}
      </div>
    </main>
    </>
  )
}

export default App
