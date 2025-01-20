import { useState } from "react";

export default function Player({initialname, symbol}) {
    const [playerName, setplayerName] = useState(initialname);
    const [isEditing, setIsEditing] = useState(false);

    function handleClick() {
        setIsEditing((editing) => !editing);
    }

    function handleChange(event) {
            console.log(event)
            setplayerName(event.target.value);
    }
        let editableplayerName = <span className="player-name">{playerName}</span>;
        //let buttonCaption = "Edit";
        if (isEditing) {
            editableplayerName = <input type="text" required Value={playerName} onChange={handleChange}/>
            //buttonCaption = "Save"
        }
        return (
            <li>
            <span className="player">
                {editableplayerName}
                <span className="player-symbol">{symbol}</span>
            </span>
                <button onClick={handleClick}>{isEditing ? "Save" : "Edit"}</button>
            </li>
        )
    }

