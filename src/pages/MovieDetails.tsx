import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../services/api";
import type { Movie } from "../types/Movie";

const MovieDetails = () => {
    const { id } = useParams()
    const [movie, setMovie] = useState<Movie | null>(null);

    useEffect(() => {
        const fetchMovie = async () => {
            try {
                const response = await api.get(`/movie/${id}`);
                setMovie(response.data);
            } catch (error) {
                console.error("Error fetching movie details:", error);
            }
        }

        fetchMovie();
    }, [id])

    if (!movie) {
        return <div className="p-6 text-4x1 min-h-screen flex justify-center items-center">Loading...</div>;
    }

    return (
    <div className="min-h-screen flex flex-col items-center p-6">
            <div className="max-w-4xl w-full">
                <h1 className="text-5xl font-bold text-center mt-20 ">{movie.title}</h1>
                
                <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 justify-items-center mt-40">
                    {/* Imagem - ocupa 5 colunas */}
                    <div className="lg:col-span-5">
                        <img    
                            className="rounded-lg w-full h-auto object-cover shadow-md"
                            src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                            alt={movie.title}
                        />
                    </div>
                    
                    {/* Detalhes - ocupa 7 colunas */}
                    <div className="lg:col-span-7 w-full">
                        <div className="bg-gray-800 p-4 rounded-lg">
                            <p className="text-gray-300 mb-4 text-justify">{movie.overview}</p>
                            
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <p className="text-gray-400 font-semibold">Data de Lançamento:</p>
                                    <p className="text-white">{movie.release_date}</p>
                                </div>
                                <div>
                                    <p className="text-gray-400 font-semibold">Avaliação:</p>
                                    <p className="text-white">{movie.vote_average}/10</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieDetails;