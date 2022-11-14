// import { faker } from '@faker-js/faker'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

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
        ? (posts.map(post => {
            // Outra forma que também funciona
            // const postLocation = {
            //     pathname: '/posts/' + post.id,
            //     state: {
            //         id: post.id
            //     }
            // }

            return (
                <div className="card shadow p-3 mb-5 bg-body rounded" key={post.id}>
                    <div className="card-body">
                        <Link to={`/posts/${post.id}`}>
                            <h5 className="card-title">{post.title}</h5>
                        </Link>
                        <p className="card-text">{post.body}</p>
                    </div>
                </div>
            )
        }))
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