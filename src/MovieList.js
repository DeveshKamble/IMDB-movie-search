import React,{ useState,useEffect } from 'react';
import RatingStars from './RatingStars';


const MovieList = () => {
        
        const [movies, setMovies] = useState([]);
        const [genreList, setGenreList] = useState([])
        // const [isHovering, setIsHovering] = useState(false)

        // const handleMouseOver = ()=> {
        //         setIsHovering(true)
        // };

        // const handleMouseOut = ()=> {
        //         setIsHovering(false)
        // };

        useEffect(()=>{
                fetch('https://api.themoviedb.org/3/genre/movie/list', {method: 'GET',headers: {accept: 'application/json',Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNjA3YmNkMWE5MmU4ZjNiYTMwOGMyMTllZDAyYTQ1NCIsInN1YiI6IjY0YWZjYzZkM2UyZWM4MDE0ZjRiMjIzZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ruWGARDVEMhbngkcqY_LTQ6d2nflN0VKltZBzDJhBQE` }})
                        .then(res => res.json())
                        .then(json => { 
                                return setGenreList(json.genres)
                        })
                        .catch(err => console.error('error:' + err));
        },[])
        

        function getGenre(given_id){
                for(let i = 0; i<genreList.length; i++){
                        if(genreList[i].id === given_id){
                                return genreList[i].name;
                        }
                }
        }
        

        useEffect(() => {
                fetch("https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc", {
                method : "GET",
                headers : {
                        'Authorization': `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNjA3YmNkMWE5MmU4ZjNiYTMwOGMyMTllZDAyYTQ1NCIsInN1YiI6IjY0YWZjYzZkM2UyZWM4MDE0ZjRiMjIzZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ruWGARDVEMhbngkcqY_LTQ6d2nflN0VKltZBzDJhBQE`,
                        'accept': 'application/json'
                }
                })
                .then(response => {
                        return response.json()
                })
                .then((result)=>{
                        result.results.length = result.results.length - (result.results.length%3);
                        setMovies(result.results)
                //console.log(result);
                })
                
        },[])

        console.log(movies)
        
        return (
                <div className="movie-list">
                        
                        {movies.map((movie)=> (
                        <div className="movie" key={movie.id}>
                                <div className="poster">
                                        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="poster" />
                                </div>
                                <div className="details" >
                                        {/* In thhe reverse order than display to use column reverse flec direction */}
                                        <p className='title'> { movie.title } </p>
                                        <div className="rating"><RatingStars id={movie.id} /></div>
                                        <p className='genre'> { getGenre(movie.genre_ids[0]) } </p>
                                </div>
                        </div>
                        ))}
                </div>
            );

}
 
export default MovieList;