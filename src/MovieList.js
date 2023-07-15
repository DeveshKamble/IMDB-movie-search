import { useState,useEffect } from 'react';


const MovieList = () => {
        
        const [movies, setMovies] = useState([]);
        const [genreList, setGenreList] = useState([])
        // const [error, setError] = useState(null);
        useEffect(()=>{
                fetch('https://api.themoviedb.org/3/genre/movie/list', {method: 'GET',headers: {accept: 'application/json',Authorization: `Bearer ${process.env.REACT_ACCESS_TOKEN}` }})
                        .then(res => res.json())
                        .then(json => { 
                                console.log(json.genres)
                                return setGenreList(json.genres)
                        })
                        .catch(err => console.error('error:' + err));
        },[])

        // function getGenre(given_id){
        //         const element = genreList.filter((genre)=>genre.id === given_id);
        //         return element.name;
        // }
        

        

        useEffect(() => {
                fetch("https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc", {
                method : "GET",
                headers : {
                        'Authorization': `Bearer ${process.env.REACT_ACCESS_TOKEN}`,
                        'accept': 'application/json'
                }
                })
                .then(response => {return response.json()})
                
                .then((result)=>{
                        result.results.length = result.results.length - (result.results.length%3)
                        setMovies(result.results)
                //console.log(result);
                })
                
        })

        
        
        return (
                <div className="movie-list">
                    {movies.map((movie)=> (
                    <div className="movie" key={movie.id}>
                        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="poster" height={400} width = {300}/>
                        <p> { movie.genre_ids[0] } </p>
                        <p> { movie.title } </p>
                        

                    </div>
                ))}
                </div>
            );

}
 
export default MovieList;