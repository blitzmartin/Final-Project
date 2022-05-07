import '../NewPost.css'
import { useState } from "react"

export default function NewPost() {

    const [title, setTitle] = useState("");
    const [text, setText] = useState("");

    function handleChange() {

    }

    function handleClick() {

    }

    return (
        <div className="newpostContainer">
            <h2>Compose:</h2>
            <label>Title:</label>
            <input type='text' placeholder='Title' onChange={handleChange} value={title} />
            <label>Post:</label>
            <textarea placeholder='Write here...' rows="18" col="30" value={text} />
            <button onClick={handleClick}>Publish</button>
        </div>
    )
}