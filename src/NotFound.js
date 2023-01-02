import { Link } from "react-router-dom"

const NotFound = () => {
    return (
        <div className="not-found">
            <h2>Sorry</h2>
            <p>404</p>
            <p>No such a page</p>
            <Link to="/">Back to Home</Link>
        </div>
    )
}

export default NotFound