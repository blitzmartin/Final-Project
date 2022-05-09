import React, { useState } from 'react'

export default function Main() {

    const [posts, setPosts] = useState([]);

    function getPosts() {
        fetch('/user/home')
            .then(res => res.json())
            .then(data => {
                setPosts(data);
            })
            .catch(err => console.log(err))
        return
    }

    return (
        <div className="mainContent">
            <h1>MAIN CONTENT</h1>
            <h2>Here I will show all the posts</h2>

            {posts.map((post) => {
                console.log(post)
                return (
                    <div key={post._id}>
                        <h3>{post.title}</h3>
                        <h4><em>{post.date}</em></h4>
                        <p>{post.content}</p>
                    </div>
                )
            })}
        </div>
    )
}