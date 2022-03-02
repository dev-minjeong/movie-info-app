import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ id, coverImg, title, rating, summary, genres }) {
    return (
        <div key={id}>
            <img src={coverImg} alt={title}></img>
            <h2>
                <Link to={`/movie/${id}`}>{title} {rating}</Link>
            </h2>
            <p>{summary.length > 293 ? `${summary.slice(0, 293)}...` : summary}</p>
            <ul>
                {genres && genres.map((genres) => (
                    <li key={genres}>{genres}</li>
                ))}
            </ul>
        </div>
    );
}

Movie.protoTypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;