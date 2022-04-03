import React, { useEffect, useState } from 'react';

const Posts = () => {

    const [posts,setPosts]=useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res=>res.json())
        .then(data=>setPosts(data))
    },[])
    return (
        <div>
            <h2>Every posts facebook ever had: {posts.length}</h2>
          
        </div>
    );
};

export default Posts;