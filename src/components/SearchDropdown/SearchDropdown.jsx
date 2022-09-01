import React from "react";
import { Link } from "react-router-dom";

const SearchDropdown = ({ movie }) => {  
    const { poster_path, title, id } = movie;
   
    return (
        <>
            <ul>
                <li className="border-b border-gray-700">
                    <Link   
                        to={`/movie/${id}`}
                        className="flex items-center hover:text-gray-700 px-3 py-3"
                    >
                        <img className="w-8" src={poster_path ? `https://image.tmdb.org/t/p/w92${poster_path}` : `https://via.placeholder.com/50x75` } alt={title} />
                        <span className="ml-2">
                            {title}
                        </span>
                    </Link>
                </li>
            </ul>
        </>
    );
}

export default SearchDropdown;