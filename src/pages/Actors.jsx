import React from "react";
import { useState, useEffect } from "react";
import ActorCard from "../components/ActorCard/ActorCard";

const API_URL = 'https://api.themoviedb.org/3/person/popular';
const API_KEY = '8e7a762545a04735bfe96225f4a31a87';

const Actors = () => {
    const [popularActors, setPopularActors] = useState([]);

    const getPopularActors = async () => {
        const response = await fetch(`${API_URL}?api_key=${API_KEY}`);
        const data = await response.json();

        setPopularActors(data.results);
    }

    useEffect(() => {
        getPopularActors();
    }, []);

    return (
        <div className="container mx-auto px-4 pt-6">
            <div>
                <h2 className="uppercase tracking-wider text-orange-500 text-lg font-semibold">Popular Actors</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:grid-cols-4 md:grid-cols-3">
                {popularActors.map((actor) => {
                    return <ActorCard actor={actor} key={actor.id} />;
                })}
            </div>
        </div>
    );
}

export default Actors;