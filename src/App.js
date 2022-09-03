import React from "react";
import { Route, Routes } from "react-router-dom";

import Navigation from "./components/Navigation/Navigation";
import PopularMovies from "./components/PopularMovies/PopularMovies";
import MovieDetails from "./pages/MovieDetails";
import TvShows from "./pages/TvShows";
import Actors from "./pages/Actors";
import NowPlaying from "./components/NowPlaying/NowPlaying";
import TvShowDetails from "./pages/TvShowDetails";
import ActorDetails from "./pages/ActorDetails";

const App = () => {

  return (
    <div className="bg-gray-900 text-white font-sans">
      <Navigation />
      <Routes>
        <Route path="/" element={<PopularMovies />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/now_playing" element={<NowPlaying />} />
        <Route path="/shows" element={<TvShows />} />
        <Route path="/tv/:id" element={<TvShowDetails />} />
        <Route path="/actors" element={<Actors />} />
        <Route path="/person/:id" element={<ActorDetails />} />
      </Routes>
    </div>
  );
}

export default App;