// import { faker } from '@faker-js/faker'
import axios from 'axios'
import { useEffect, useState } from 'react'

const Home = () => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        (async () => {
            const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
            // Limitando apenas aos 5 primeiros
            setPosts(res.data.slice(0, 5))
        })()
    }, [])

    const listMarkup = posts.length > 0
        ? (posts.map(post => (
            <div className="card shadow p-3 mb-5 bg-body rounded" key={post.id}>
                <div className="card-body">
                    <h5 className="card-title">{post.title}</h5>
                    <p className="card-text">{post.body}</p>
                </div>
            </div>
        )))
        : (<div className='text-center'>No posts found</div>)

    return (
        <div className="container">
            <h4 className="center">Home</h4>
            {/* <p>{`${faker.lorem.paragraph()}`}</p> */}
            {listMarkup}
        </div>
    )
}

export default Home