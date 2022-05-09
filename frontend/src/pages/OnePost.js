import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

export default function Main() {

    let params = useParams();
    const [post, setPost] = useState({
         title: '', 
         content: '', 
         date: ''
    });

    const URL = `/user/home/${params.id}`; 
    //console.log(URL);

    function getOnePost() {
        fetch(URL)
            .then(res => res.json())
            .then(data => {
                setPost({
                    title: data[0].title,
                    content: data[0].content,
                    date: data[0].date
                });
                console.log(post)
            })
            .catch(err => console.log(err))
        return
    }

    useEffect(() => {
        getOnePost();
    }, [])

    return (
        <div className="mainContent">
                    <div key={post._id}>
                        <h3>TITLE: {post.title}</h3>
                        <h4><em>DATE: {post.date}</em></h4>
                        <p>CONTENT: {post.content}</p>
                    </div>
        </div>
    )
}