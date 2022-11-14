import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router"

const Post = () => {
    const { id } = useParams()
    
    // Dessa forma (instrutor), não funciona
    // const id = props.match.params.id
    const [post, setPost] = useState([])

    useEffect(() => {
        (async () => {
            const res = await axios.get("https://jsonplaceholder.typicode.com/posts/" + id)
            setPost(res.data)
        })()
    }, [id])
        
    return (
        <div>
            <div className="card">
                <div className="card-header">
                    Post #{post.id}
                </div>
                <div className="card-body">
                    <h5 className="card-title">{post.title}</h5>
                    <p className="card-text">{post.body}</p>
                </div>
            </div>
        </div>
    )
}

export default Post