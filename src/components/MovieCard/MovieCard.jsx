import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {  
    const { poster_path, title, vote_average, release_date, id } = movie;
    
    return (
        <div className="mt-4 bg-gray-800 rounded-b-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            <img className="w-full" src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} />
            <div className="p-2 rounded-b-lg">
                <Link to={`/movie/${id}`}>
                    <p className="text-base hover:text-gray-300">{title}</p>
                </Link>
                <div className="flex items-center text-gray-400 mt-2">
                    <span className="bg-gray-200 flex justify-between rounded-full px-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 fill-current text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                        </svg>
                        {vote_average}
                    </span>
                    <span className="inline-block bg-gray-200 rounded-full px-2 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        {release_date}
                    </span>
                </div>
                <div className="text-gray-400">
                    Action, Thriller                    
                </div>
            </div>
        </div>
    );
}

export default MovieCard;