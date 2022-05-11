import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Main() {

    const [posts, setPosts] = useState([]);

    function getPosts() {
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include'
        };
        fetch('/user/home', requestOptions)
            .then(res => res.json())
            .then(data => {
                setPosts(data);
            })
            .catch(err => console.log(err))
        return
    }

    useEffect(() => {
        getPosts();
    }, [])

    return (
        <div className="mainContent">
            <h1>MY BLOG</h1>
            <h2>Daily journal for every user</h2>
        
            {posts.slice(0).reverse().map((post) => {
                return (
                    <div key={post._id}>
                        <h3 className='title'><Link
                            to={`/home/${post._id}`}
                        >{post.title}</Link></h3>
                        <h4><em>{post.date}</em></h4>
                        <p>{post.content.substring(0, 200)}...<Link
                            to={`/home/${post._id}`}
                        >Read more...</Link></p>
                    </div>
                )
            })}
        </div>
    )
}