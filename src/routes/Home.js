import { useState, useEffect } from "react";
import Movie from "../components/Movie";


function Home(){
    const  [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async() => {
    const json = await 
    (await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`)).json();
    setMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  },[])
  console.log(movies);
    return (
  <div>
    {loading ? <h1>로딩중...</h1> : 
    <div>{movies.map((movie) => (
    <Movie
      key={movie.id}
<<<<<<< HEAD
      id={movie.id}
=======
>>>>>>> 23aaed5eb5cc3b6adb3154d57e2c350b719419b0
      medium_cover_image={movie.medium_cover_image} 
      title={movie.title} 
      summary={movie.summary} 
      genres={movie.genres}
    />
      ))}</div>}
  </div>
  );
  
}

export default Home;