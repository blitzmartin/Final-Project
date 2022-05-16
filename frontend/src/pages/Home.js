import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from "../App";
import { motion } from "framer-motion"

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
            <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1}}
                transition={{ type: "spring", stiffness: 30, delay: 0.3  }}
            >
                <h1>Welcome {user}!</h1>
                <hr />
                {posts.length === 0 && <h2>There are no posts yet!</h2>}

                {posts.slice(0).reverse().map((post) => {
                    return (
                        <div className='singlePost' key={post._id}>
                            <h2 className='title'><Link
                                to={`/home/${post._id}`}
                            >{post.title}</Link></h2>
                            <p>{post.content.substring(0, 200)}...<Link
                                to={`/home/${post._id}`}
                            >Read more...</Link></p>
                        </div>
                    )
                })}
            </motion.div>
        </div>
    )
}