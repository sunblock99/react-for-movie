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
    return <h1>Detail</h1>;


}

export default Detail;
