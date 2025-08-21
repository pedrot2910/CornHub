import { useEffect, useState } from "react";
import { api } from "../services/api";
import type { Movie } from "../types/Movie";
import MovieCard from "../components/MovieCard";

const Home = () => {
    const [movies, setMovies] = useState<Movie[]>([]);

    useEffect(() => {
        const fetchPopularMovies = async () => {
            try {
                const response = await api.get("/movie/popular");
                setMovies(response.data.results);
            }catch (error) {
                console.error("Error fetching popular movies:", error);
            }
        }

        fetchPopularMovies();
    }, []);

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-4">Popular Movies</h1>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {movies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    )
}

export default Home;