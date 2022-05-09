import '../NewPost.css'
import { useState } from "react"
import { useNavigate } from 'react-router-dom'

export default function NewPost() {

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const navigate = useNavigate();

    function handleClick() {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                title: title,
                content: content
            })
        };
        fetch("/user/newpost", requestOptions)
            .then(res => {
                if (res.status === 200) {
                    setTitle(title)
                    setContent(content)
                    navigate('/home', { replace: true });
                }
                setTitle("");
                setContent("");
            });

    }

    return (
        <div className="newpostContainer">
            <h2>Compose:</h2>
            <label className='newpostLabel'>Title:</label>
            <input type='text' placeholder='Title' onChange={(e) => setTitle(e.target.value)} value={title} />
            <label className='newpostLabel'>Post:</label>
            <textarea placeholder='Write here...' rows="18" col="30" onChange={(e) => setContent(e.target.value)} value={content} />
            <button className="publishBtn" onClick={handleClick}>Publish</button>
        </div>
    )
}