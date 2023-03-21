import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

<<<<<<< HEAD
function Movie({id, medium_cover_image, title, summary, genres}){
    return <div>
    <img src={medium_cover_image} alt={title}/>
    <h2>
      <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
    <p>{summary}</p>
    <ul>
      {genres.map(g => <li key={g}>{g}</li>)}
    </ul>
</div>;
}

Movie.propTypes = {
    id: PropTypes.string.isRequired,
    medium_cover_image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}
=======
function Movie({ id, coverImg, title, year, summary, genres }) {
  return (
    <div className={styles.movie}>
      <img src={coverImg} alt={title} className={styles.movie__img} />
      <div>
        <h2 className={styles.movie__title}>
          <Link to={`/movie/${id}`}>{title}</Link>
        </h2>
        <h3 className={styles.movie__year}>{year}</h3>
        <p>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
        <ul className={styles.movie__genres}>
          {genres.map((g) => (
            <li key={g}>{g}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

>>>>>>> 4621579f6cec56f2892aae575fd4de73eef59086
export default Movie;