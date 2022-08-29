import React from "react";
import { useState, useEffect } from "react";
import SearchDropdown from "../components/SearchDropdown/SearchDropdown";

const API_URL = 'https://api.themoviedb.org/3/search/movie';
const API_KEY = '8e7a762545a04735bfe96225f4a31a87'

const Search = () => {
    const [searchResults, setSearchResults] = useState([]);
    const [searchInput, setSearchInput] = useState('');

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}?api_key=${API_KEY}&query=${title}`);
        const data = await response.json();

        setSearchResults(data.results);
    }

    const inputHandler = (e) => {
        const search = e.target.value;
        setSearchInput(search);
        searchMovies(searchInput);
    }

    useEffect(() => {
        searchMovies('');
    }, []);

    return(
        <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <svg className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none">
                    <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
            </span>

            <input 
                type='search'   
                className="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-full dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300" 
                placeholder="Search" 
                value={searchInput}
                onChange={inputHandler}
            />

            {
                searchInput.length > 2
                    ?(
                    searchResults?.length > 0
                        ? (
                            <div className="absolute bg-gray-800 text-sm rounded w-64 mt-4">
                                {searchResults?.slice(0, 8).map((movie) => (
                                    <SearchDropdown movie={movie} key={movie.id} />  
                                ))}
                            </div>
                        ) : (
                            <div className="absolute bg-gray-800 text-sm rounded w-64 mt-4">
                                <ul>
                                    <li className="border-b border-gray-700">
                                        <span className="text-base block hover:text-gray-700 px-3 py-3">No movies found</span>
                                    </li>
                                </ul>
                            </div>
                        )
                ): ('')
            }
        </div>
    );
}

export default Search;