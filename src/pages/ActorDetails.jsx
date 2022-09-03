import React from "react";
import { useState,useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const API_URL = 'https://api.themoviedb.org/3/person';
const API_KEY = '8e7a762545a04735bfe96225f4a31a87';

const ActorDetails = () => {
    const [actorDetails, setActorDetails] = useState([]);
    const [actorSocials, setActorSocials] = useState([]);
    const [actorCredits, setActorCredits] = useState([]);
    const params = useParams();

    const getActorDetails = async () => {
        const response = await fetch(`${API_URL}/${params.id}?api_key=${API_KEY}`);
        const data = await response.json();

        setActorDetails(data);
    }
    
    const getActorSocials = async () => {
        const response = await fetch(`${API_URL}/${params.id}/external_ids?api_key=${API_KEY}`);
        const data = await response.json();
        
        setActorSocials(data);
    }
    
    const getActorCredits = async () => {
        const response = await fetch(`${API_URL}/${params.id}/combined_credits?api_key=${API_KEY}`);
        const data = await response.json();
        
        setActorCredits(data.cast);
    }

    useEffect(() => {
        getActorDetails();
        getActorSocials();
        getActorCredits();
    }, []);

    const { profile_path, name, birthday, known_for, place_of_birth, biography, homepage } = actorDetails;
    const { facebook_id, instagram_id, twitter_id } = actorSocials;

    return (
        <>
            <div className="border-b border-gray-700">
                <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row">
                    <div className="flex-none">
                        <img className="w-96 md:w-64" src={profile_path ? `https://image.tmdb.org/t/p/w300${profile_path}` : `https://via.placeholder.com/300x450`} alt={name} />
                        <ul className="flex items-center mt-4">
                            {
                                facebook_id
                                ?
                                    <li>
                                        <a href={`https://facebook.com/${twitter_id}`} title="Facebook">
                                            <svg className="fill-current text-gray-400 hover:text-white w-6" viewBox="0 0 448 512"><path d="M448 56.7v398.5c0 13.7-11.1 24.7-24.7 24.7H309.1V306.5h58.2l8.7-67.6h-67v-43.2c0-19.6 5.4-32.9 33.5-32.9h35.8v-60.5c-6.2-.8-27.4-2.7-52.2-2.7-51.6 0-87 31.5-87 89.4v49.9h-58.4v67.6h58.4V480H24.7C11.1 480 0 468.9 0 455.3V56.7C0 43.1 11.1 32 24.7 32h398.5c13.7 0 24.8 11.1 24.8 24.7z"/></svg>
                                        </a>
                                    </li>
                                : ''

                            }
                            {
                                instagram_id
                                ?
                                    <li class="ml-6">
                                        <a href={`https://instagram.com/${twitter_id}`} title="Instagram">
                                            <svg className="fill-current text-gray-400 hover:text-white w-6" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
                                        </a>
                                    </li>
                                : ''
                            }
                            {
                                twitter_id
                                ?
                                    <li class="ml-6">
                                        <a href={`https://twitter.com/${twitter_id}`} title="Twitter">
                                            <svg className="fill-current text-gray-400 hover:text-white w-6" viewBox="0 0 512 512"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/></svg>
                                        </a>
                                    </li>
                                : ''

                            }
                            {
                                homepage 
                                ?
                                    <li class="ml-6">
                                        <a href={homepage} title="Website">
                                            <svg class="fill-current text-gray-400 hover:text-white w-6" viewBox="0 0 496 512"><path d="M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm82.29 357.6c-3.9 3.88-7.99 7.95-11.31 11.28-2.99 3-5.1 6.7-6.17 10.71-1.51 5.66-2.73 11.38-4.77 16.87l-17.39 46.85c-13.76 3-28 4.69-42.65 4.69v-27.38c1.69-12.62-7.64-36.26-22.63-51.25-6-6-9.37-14.14-9.37-22.63v-32.01c0-11.64-6.27-22.34-16.46-27.97-14.37-7.95-34.81-19.06-48.81-26.11-11.48-5.78-22.1-13.14-31.65-21.75l-.8-.72a114.792 114.792 0 01-18.06-20.74c-9.38-13.77-24.66-36.42-34.59-51.14 20.47-45.5 57.36-82.04 103.2-101.89l24.01 12.01C203.48 89.74 216 82.01 216 70.11v-11.3c7.99-1.29 16.12-2.11 24.39-2.42l28.3 28.3c6.25 6.25 6.25 16.38 0 22.63L264 112l-10.34 10.34c-3.12 3.12-3.12 8.19 0 11.31l4.69 4.69c3.12 3.12 3.12 8.19 0 11.31l-8 8a8.008 8.008 0 01-5.66 2.34h-8.99c-2.08 0-4.08.81-5.58 2.27l-9.92 9.65a8.008 8.008 0 00-1.58 9.31l15.59 31.19c2.66 5.32-1.21 11.58-7.15 11.58h-5.64c-1.93 0-3.79-.7-5.24-1.96l-9.28-8.06a16.017 16.017 0 00-15.55-3.1l-31.17 10.39a11.95 11.95 0 00-8.17 11.34c0 4.53 2.56 8.66 6.61 10.69l11.08 5.54c9.41 4.71 19.79 7.16 30.31 7.16s22.59 27.29 32 32h66.75c8.49 0 16.62 3.37 22.63 9.37l13.69 13.69a30.503 30.503 0 018.93 21.57 46.536 46.536 0 01-13.72 32.98zM417 274.25c-5.79-1.45-10.84-5-14.15-9.97l-17.98-26.97a23.97 23.97 0 010-26.62l19.59-29.38c2.32-3.47 5.5-6.29 9.24-8.15l12.98-6.49C440.2 193.59 448 223.87 448 256c0 8.67-.74 17.16-1.82 25.54L417 274.25z"/></svg>
                                        </a>
                                    </li> 
                                : ''
                            }
                        </ul>
                    </div>

                    <div className="md:ml-24">
                        <h2 className="text-xl font-semibold">{name}</h2>
                        <div className="flex flex-wrap items-center text-gray-400 text-sm mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="w-5 fill-current text-orange-400" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.87c1.355 0 2.697.055 4.024.165C17.155 8.51 18 9.473 18 10.608v2.513m-3-4.87v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0L3 16.5m15-3.38a48.474 48.474 0 00-6-.37c-2.032 0-4.034.125-6 .37m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.17c0 .62-.504 1.124-1.125 1.124H4.125A1.125 1.125 0 013 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 016 13.12M12.265 3.11a.375.375 0 11-.53 0L12 2.845l.265.265zm-3 0a.375.375 0 11-.53 0L9 2.845l.265.265zm6 0a.375.375 0 11-.53 0L15 2.845l.265.265z" />
                            </svg>
                            <span className="ml-2">
                                {birthday} born in {place_of_birth}
                            </span>
                        </div>   

                        <p className="text-gray-300 mt-8">
                            {biography}
                        </p> 

                        <h4 className="font-semibold mt-12">
                            Known For
                        </h4>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
                                {actorCredits?.slice(0,5).map((credit) => {
                                    return (
                                        <div>
                                            <div className="mt-4">
                                                <img className="hover:opacity-75 transition ease-in-out duration-150" src={`https://image.tmdb.org/t/p/w185${credit.poster_path}`}  alt={credit.title} />
                                            </div>
                                            <Link to={`/movie/${credit.id}`}>
                                                {credit.title}
                                            </Link>
                                        </div>
                                    )
                                })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ActorDetails;