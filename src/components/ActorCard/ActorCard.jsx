import React from "react";
import { Link } from "react-router-dom";

const ActorCard = ({ actor }) => {  
    const { profile_path, name, id, known_for } = actor;
    
    return (
        <div className="mt-4 bg-gray-800 rounded-b-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            <img className="w-full" src={profile_path ? `https://image.tmdb.org/t/p/w235_and_h235_face${profile_path}` : `https://ui-avatars.com/api/?size=235&name=${name}`} alt={name} />
            <div className="p-2 rounded-b-lg">
                <Link to={`/person/${id}`}>
                    <p className="text-base hover:text-gray-300">{name}</p>
                </Link>
                <div className="text-sm truncate text-gray-400">
                    {known_for?.map((known, index) => {
                        return (index ? ', ' : '') + known.title
                    })}
                </div>
            </div>
        </div>
    );
}

export default ActorCard;