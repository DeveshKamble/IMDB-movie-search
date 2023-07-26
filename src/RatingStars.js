import React,{ useEffect, useState } from "react";
import star from './images/star.png'


const RatingStars = ({id}) => {
    const [rating, setRating] = useState(null)
    let numOfStars = 5;

    useEffect(()=>{
            fetch(`https://api.themoviedb.org/3/movie/${id}/account_states`,{
                method:'GET',
                headers:{
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNjA3YmNkMWE5MmU4ZjNiYTMwOGMyMTllZDAyYTQ1NCIsInN1YiI6IjY0YWZjYzZkM2UyZWM4MDE0ZjRiMjIzZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ruWGARDVEMhbngkcqY_LTQ6d2nflN0VKltZBzDJhBQE'
                }
            }).then((response)=>{
                return response.json();
            }).then((data)=>{
                setRating(data.rated)
                
            })
        },[id])
    console.log(rating)
    
    
    
    return(
        [...Array(numOfStars)].map((i)=><img src={star} alt="star" className="star" key={i}/>)
            
    )
}
 
export default RatingStars;