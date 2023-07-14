import { json } from "react-router-dom";
import useFetch from "./UseFetch";

const MovieList = () => {
        let [movies, isPending] = useFetch("https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc");
        //console.log(movies)
        

        return <>
        {
                movies.map((movie)=>{
                        console.log(movie.id);
                        <div key={movie}>aha</div>
                })
        }
        </>
    
}
 
export default MovieList;