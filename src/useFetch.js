import { useState, useEffect } from "react"

const useFetch = (url) => {
    const [data, setData] = useState(null)
    // Loader shown before data appear for rendering
    const [isPending, setIsPending] = useState(true)
    const [err, setErr] = useState(null)

    useEffect(() => {
        setTimeout(() => {
            // console.log('Use Effect ran')
            fetch(url)
                .then(res => {
                    // console.log(res)
                    if (!res.ok) {
                        throw Error('Could not  fetch the data for that resource!')
                    }
                    return res.json()
                })
                .then(data => {
                    // console.log(data)
                    setData(data)
                    setIsPending(false)
                    setErr(null)
                })
                .catch(error => {
                    // console.log(error.message)
                    setErr(error.message)
                    setIsPending(false)
                })
        }, 500);
    }, [url])

    return { data, isPending, err }
}

export default useFetch
