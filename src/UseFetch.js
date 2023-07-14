import { useEffect, useState } from "react";


const useFetch = async (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(false);
    // const [error, setError] = useState(null);

    useEffect(() => {
        fetch(url, {
            method : "GET",
            headers : {
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNjA3YmNkMWE5MmU4ZjNiYTMwOGMyMTllZDAyYTQ1NCIsInN1YiI6IjY0YWZjYzZkM2UyZWM4MDE0ZjRiMjIzZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ruWGARDVEMhbngkcqY_LTQ6d2nflN0VKltZBzDJhBQE',
                'accept': 'application/json'
            }
        })
        .then(data => data.json())
        .then(data => {
            setData(data)
            console.log(data)
        })
    }, [url])
    return {data,isPending};
}

export default useFetch;