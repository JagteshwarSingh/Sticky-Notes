import React from "react";
import type { Note } from "./Objects.ts";
import EditableTextBox from "./EditableTextBox.tsx";

function NotesCard({note}: {note: Note}) {
    var id: string = note.id.toString();
    var content: string = note.content;



    return <div className="notes border-2 p-4 m-4 rounded-lg shadow-lg flex-1">
        <h2 className="text-xl font-bold">
            <EditableTextBox text={id.toString()} />
        </h2>
        <div className="content flex flex-col">
            <EditableTextBox text={content} />
        </div>
    </div>
}

export default NotesCard;