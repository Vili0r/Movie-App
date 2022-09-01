import React from "react";
import { useState, useEffect } from "react";
import TvShowCard from "../components/TvShowCard/TvShowCard";

const API_URL = 'https://api.themoviedb.org/3/tv';
const API_KEY = '8e7a762545a04735bfe96225f4a31a87';

const TvShows = () => {

    const [popularTvShows, setPopularTvShows] = useState([]);
    const [topRatedTvShows, setTopRatedTvShows] = useState([]);

    const getPopularTvShows = async () => {
        const response = await fetch(`${API_URL}/popular?api_key=${API_KEY}`);
        const data = await response.json();

        setPopularTvShows(data.results);
    }
    
    const getTopRatedTvShows = async () => {
        const response = await fetch(`${API_URL}/top_rated?api_key=${API_KEY}`);
        const data = await response.json();

        setTopRatedTvShows(data.results);
    }

    useEffect(() => {
        getPopularTvShows();
        getTopRatedTvShows();
    }, []);

    return (
        <div className="container mx-auto px-4 pt-6">
            <div>
                <h2 className="uppercase tracking-wider text-orange-500 text-lg font-semibold">Popular Show</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:grid-cols-4 md:grid-cols-3">
                {popularTvShows?.slice(0, 20).map((show) => {
                    return <TvShowCard show={show} key={show.id} />
                })}
            </div>

            <div>
                <h2 className="uppercase tracking-wider text-orange-500 text-lg font-semibold mt-20">Top Rated Shows</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:grid-cols-4 md:grid-cols-3">
                {topRatedTvShows?.slice(0, 20).map((show) => {
                    return <TvShowCard show={show} key={show.id} />
                })}
            </div>
        </div>
    );
}

export default TvShows;