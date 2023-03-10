<<<<<<< HEAD
import { useEffect } from "react";
import { useParams } from "react-router-dom";

function Detail(){
    const {id} = useParams();
    console.log(id);
    const getmovie = async () => {
        const json = await(
            await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`))
    .json();
    }
    
    useEffect(() => {
       getmovie();
    }, []);
=======
function Detail(){
>>>>>>> 23aaed5eb5cc3b6adb3154d57e2c350b719419b0
    return <h1>Detail</h1>;


}

export default Detail;
