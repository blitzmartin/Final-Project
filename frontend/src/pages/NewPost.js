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
            <label className='newpostLabel'>Title:</label>
            <input type='text' placeholder='Title' onChange={(e)=>setTitle(e.target.value)} value={title} />
            <label className='newpostLabel'>Post:</label>
            <textarea placeholder='Write here...' rows="18" col="30" onChange={(e)=>setText(e.target.value)} value={text} />
            <button className="publishBtn" onClick={handleClick}>Publish</button>
        </div>
    )
}