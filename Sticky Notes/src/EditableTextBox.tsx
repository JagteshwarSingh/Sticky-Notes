import { useState, useRef, useEffect } from 'react';

export default function EditableTextBox({text}: {text: string}) {
    const [textValue, setTextValue] = useState(text);
    const [isEditing, setIsEditing] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (isEditing && inputRef.current){
            inputRef.current.focus();
        }
    }, [isEditing]);

    const handleTextClick = () => {
        setIsEditing(true);
    };

    const handleTextSave = () => {
        setIsEditing(false);
    };

    const handleTextKeyDown = (e: { key: string; }) => {
        if (e.key === 'Enter' || e.key === 'Escape') {
            handleTextSave();
        }
    };

    return (
        <>
            <div className="flex items-center gap-2 max-w-prose">
                {isEditing ? (
                    <input
                        ref={inputRef}
                        type="text"
                        value={textValue}
                        onChange={(e) => setTextValue(e.target.value)}
                        onKeyDown={handleTextKeyDown}
                    />
                ) : (
                    <p onClick={handleTextClick} className="flex">
                        {textValue}
                    </p>
                )}
            </div>
        </>
    )

}

