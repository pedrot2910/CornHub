import type { Movie } from "../types/Movie";
import { Link } from "react-router-dom";

interface props {
  movie: Movie;
}

const MovieCard = ({ movie }: props) => {
  return (
    <Link to={`/movie/${movie.id}`}>
      <div className="bg-gray-800 rounded overflow-hidden shadow hover:scale-105 transition">
        <img
          src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
          alt={movie.title}
          className="w-full h-auto rounded-t-lg"
        />
        <div className="p-2">
          <h2 className="text-lg font-semibold"></h2>
          <p className="text-sm text-gray-400">
            Nota: {movie.vote_average.toFixed(1)}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
