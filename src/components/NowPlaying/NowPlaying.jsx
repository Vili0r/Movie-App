import React from 'react';
import { useState,useEffect } from "react";
import MovieCard from "../MovieCard/MovieCard";

const API_URL = 'https://api.themoviedb.org/3/movie/now_playing';
const API_KEY = '8e7a762545a04735bfe96225f4a31a87';

const NowPlaying = () => {
    const [nowPlaying, setNowPlaying] = useState([]);

    const getNowPlaying = async () => {
        const response = await fetch(`${API_URL}?api_key=${API_KEY}`);
        const data = await response.json();

        setNowPlaying(data.results);
    }

    useEffect(() => {
        getNowPlaying();
    }, []);

    return (
        <div className="container mx-auto px-4 pt-6">
            <div>
                <h2 className="uppercase tracking-wider text-orange-500 text-lg font-semibold">Now Playing</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:grid-cols-4 md:grid-cols-3">
                {nowPlaying.map((movie) => {
                    return <MovieCard movie={movie} key={movie.id} />;
                })}
            </div>
        </div>
    );
}

export default NowPlaying