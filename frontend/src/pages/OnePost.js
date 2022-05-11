import React, { useState, useEffect } from 'react'
import { useParams, useNavigate  } from 'react-router-dom'

export default function Main() {

    let params = useParams();
    const [post, setPost] = useState({
         title: '', 
         content: '', 
         date: ''
    });
    const navigate = useNavigate();
    const URL = `/user/home/${params.id}`; 

    function getOnePost() {
        fetch(URL)
            .then(res => res.json())
            .then(data => {
                setPost({
                    _id: data[0]._id,
                    title: data[0].title,
                    content: data[0].content,
                    date: data[0].date
                });
            })
            .catch(err => console.log(err))
        return
    }

    useEffect(() => {
        getOnePost();
    })

    function handleClick(){
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                postid: post._id
            })
        };
        fetch("/user/deletepost/", requestOptions)
            .then(res => {
                if (res.status === 200) {
                    navigate('/home', { replace: true });
                }
            });
    }

    return (
        <div className="mainContent">
                    <div key={post._id}>
                        <h3 className='title'>{post.title}</h3>
                        <h4><em>{post.date}</em></h4>
                        <p className='postContent'>{post.content}</p>
                        <button className="deleteBtn" onClick={handleClick}>Delete</button>
                    </div>
        </div>
    )
}