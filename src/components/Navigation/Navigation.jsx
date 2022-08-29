import React from "react";
import { Link } from "react-router-dom";
import Search from "../../pages/Search";

const Navigation = () => {
    return (
        <nav className="border-b border-gray-700">
            <div className="container px-4 py-5 mx-auto flex items-center flex-col md:flex-row justify-between">
                <div className="flex items-center justify-between flex-col md:flex-row">
                    <Link 
                        to="/"
                        className="px-2 py-1 text-lg font-medium text-gray-700 transition-colors duration-200 transform rounded dark:text-gray-200 hover:text-gray-700 md:mx-2"
                    >
                        Movie App
                    </Link>
                    <Link 
                        to="/now_playing" 
                        className="px-2 py-1 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded dark:text-gray-200 hover:bg-gray-700 hover:text-gray-100 md:mx-2"
                    >
                        On Cinemas
                    </Link>
                    <Link 
                        to="/shows" 
                        className="px-2 py-1 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded dark:text-gray-200 hover:bg-gray-700 hover:text-gray-100 md:mx-2"
                    >
                        TV Shows
                    </Link>
                    <Link 
                        to="/actors" 
                        className="px-2 py-1 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded dark:text-gray-200 hover:bg-gray-700 hover:text-gray-100 md:mx-2"
                    >
                        Actors
                    </Link>
                    
                </div>
   
                <Search/>
            </div>
        </nav>
    );
}

export default Navigation;