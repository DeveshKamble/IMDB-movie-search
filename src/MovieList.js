import useFetch from "./UseFetch";

const MovieList =() => {
        const {data:movies,isPending} = useFetch("https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc");
        console.log(movies)
        
        // return (
            
        //     <div className="movie-list" key='id'>
        //         {
        //         movies.map(function(movie){
        //             if(!movies){
        //             return (
        //                 (
        //                 <div className="movie">
        //                     {console.log(movie.title)}
        //                 </div>
        //                 )
        //             )}
        //         })}
        //     </div>
        // );
    
}
 
export default MovieList;