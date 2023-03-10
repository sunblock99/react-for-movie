import PropTypes from "prop-types";
  import {Link} from "react-router-dom";

<<<<<<< HEAD
function Movie({id, medium_cover_image, title, summary, genres}){
    return <div>
    <img src={medium_cover_image} alt={title}/>
    <h2>
      <Link to={`/movie/${id}`}>{title}</Link>
=======
function Movie({medium_cover_image, title, summary, genres}){
    return <div>
    <img src={medium_cover_image} alt={title}/>
    <h2>
      <Link to="/movie">{title}</Link>
>>>>>>> 23aaed5eb5cc3b6adb3154d57e2c350b719419b0
      </h2>
    <p>{summary}</p>
    <ul>
      {genres.map(g => <li key={g}>{g}</li>)}
    </ul>
</div>;
}

Movie.propTypes = {
<<<<<<< HEAD
    id: PropTypes.string.isRequired,
=======
>>>>>>> 23aaed5eb5cc3b6adb3154d57e2c350b719419b0
    medium_cover_image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}
export default Movie;