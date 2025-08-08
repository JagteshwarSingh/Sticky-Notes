import React from "react";
import type { Note } from "./Objects.ts";

function NotesCard({note}: {note: Note}) {
    var id: number = note.id;
    var content: string = note.content;



    return <div className="notes border-2 p-4 m-4 rounded-lg shadow-lg flex-1">
        <h2 className="text-xl font-bold">id: {id}</h2>
        <div className="content">
            <p>{content}</p>
        </div>
    </div>
}

export default NotesCard;