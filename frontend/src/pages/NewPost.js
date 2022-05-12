import '../NewPost.css'
import { useState, useContext } from "react"
import { useNavigate } from 'react-router-dom'
import { UserContext } from "../App";
import { motion } from "framer-motion"


export default function NewPost() {

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const { user } = useContext(UserContext);
    const navigate = useNavigate();

    function handleClick() {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify({
                title: title,
                content: content,
                username: user
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
            <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1}}
                transition={{ type: "spring", stiffness: 30, delay: 0.3 }}
            >
                <h1 className='newPosth1'>New post</h1>
                <label className='newpostLabel'>Keywords of the day:</label>
                <input type='text' placeholder='Title' onChange={(e) => setTitle(e.target.value)} value={title} required />
                <label className='newpostLabel'>Let your thoughts flow here:</label>
                <textarea placeholder='Write here...' rows="18" col="30" onChange={(e) => setContent(e.target.value)} value={content} required />
                <button className="publishBtn" onClick={handleClick}>Publish</button>
            </motion.div>
        </div>
    )
}