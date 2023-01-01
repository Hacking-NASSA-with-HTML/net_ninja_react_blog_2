import { useState } from "react";

const Create = () => {
    const [title, setTitle] = useState('Add blog\'s title')
    const [body, setBody] = useState('')
    // const [author, setAuthor] = useState('mario')
    const [author, setAuthor] = useState('mario')

    const handleSubmit = (e) => {
        e.preventDefault()
        const blog = { title, body, author }
        console.log(blog)
    }

    return (
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog body:</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label>Blog author:</label>
                {/* <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select> */}
                <input
                    type="text"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                />
                <button>Add Blog</button>
            </form>
        </div>
    )
}

export default Create