import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from "../App";

export default function Main() {

    const [posts, setPosts] = useState([]);
    const { user } = useContext(UserContext);

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
            <h1>{user}'s journal</h1>
            <h2>Daily journal for every user</h2>
            <hr />
        
            {posts.slice(0).reverse().map((post) => {
                return (
                    <div className='singlePost' key={post._id}>
                        <h3 className='title'><Link
                            to={`/home/${post._id}`}
                        >{post.title}</Link></h3>
                        <p>{post.content.substring(0, 200)}...<Link
                            to={`/home/${post._id}`}
                        >Read more...</Link></p>
                    </div>
                )
            })}
        </div>
    )
}