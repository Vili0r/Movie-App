import React from "react";
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";

const API_URL = 'https://api.themoviedb.org/3/tv';
const API_KEY = '8e7a762545a04735bfe96225f4a31a87';

const TvShowDetails = () => {
    const [tvShow, setTvShow] = useState([]);
    const [cast, setCast] = useState([]);
    const [video, setVideo] = useState([]);
    const params = useParams();

    const getTvShow = async () => {
        const response = await fetch(`${API_URL}/${params.id}?api_key=${API_KEY}`);
        const data = await response.json();

        setTvShow(data);
    }
    
    const getCast = async () => {
        const response = await fetch(`${API_URL}/${params.id}/credits?api_key=${API_KEY}`);
        const data = await response.json();

        setCast(data.cast);
    }
    
    const getVideo = async () => {
        const response = await fetch(`${API_URL}/${params.id}/videos?api_key=${API_KEY}`);
        const data = await response.json();

        setVideo(data.results[0]);
    }

    useEffect(() => {
        getTvShow();
        getCast();
        getVideo();
    }, []);

    const { poster_path, name, vote_average, first_air_date, overview, created_by } = tvShow;

    return (
        <>
            <div className="border-b border-gray-700">
                <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row">
                    <img className="w-96 md:w-64" src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={name} />

                    <div className="md:ml-24">
                        <h2 className="text-xl font-semibold">{name}</h2>
                        <div className="flex flex-wrap items-center text-gray-400 text-sm mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 fill-current text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                            </svg>
                            <span className="ml-1">
                                {vote_average?.toFixed(1)}
                            </span>
                            <span className="mx-2">|</span>
                            <span >
                                {first_air_date}
                            </span>
                            <span className="mx-2">|</span>
                            <span className="text-gray-400">
                                {tvShow.genres?.map((genre, index) => {
                                    return (index ? ', ' : '') + genre.name
                                })}
                            </span>
                        </div>
                        <p className="text-gray-300 mt-8">
                            {overview}
                        </p>

                        <div className="mt-12">
                            <div className="flex mt-4">
                                {created_by?.map((crew) => {
                                    return(
                                        <div className="mr-8" key={crew.id}>
                                            <div>{crew.name}</div>
                                            <div className="text-sm text-gray-400">Creator</div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
    
                        {
                            video.key 
                                ? (
                                    <div className="mt-12">
                                        <a 
                                            href={`https://youtube.com/watch?v=${video.key}`} 
                                            target="_blank" 
                                            className="inline-flex items-center bg-orange-500 text-gray-900 rounded font-semibold px-5 py-4 hover:bg-orange-600 transition ease-in-out duration-150">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <span className="ml-2">Play Trailer</span>
                                        </a>
                                    </div>
                                ) : ''
                        }
                    </div>
                </div>
            </div>
            <div className="border-b border-gray-800">
                <div className="container mx-auto px-4 py-16">
                    <h2 className="text-4xl font-semibold">Cast</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                        {cast?.slice(0, 10).map((cast) => {
                            return (
                                <div className="mt-8">
                                    <a href="">
                                        <img src={`https://image.tmdb.org/t/p/w300${cast.profile_path}`} alt={cast.name} className="hover:opacity-75 transition ease-in-out duration-150" />
                                    </a>
                                    <div className="mt-2">
                                        <a href="" className="text-lg mt-2 hover:text-gray:300">{cast.name}</a>
                                        <div className="text-sm text-gray-400">
                                            {cast.character}
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div> 
        </>
    );
}

export default TvShowDetails;