import { useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

export const MainView = () => {
      const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Coming To America",
      image:
        "https://images.app.goo.gl/ypNfVVhByYTFAQgg7",
      director: "John Landis",
      description: "An extremely pampered African prince travels to Queens, New York and goes undercover to find a wife that he can respect for her intelligence and strong will. A noble, adventurous prince and his valet agree to find love in the Big Apple against his fathers wishes.",
      genre: "Comedy"
    },
    {
      id: 2,
      title: "The GodFather",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/51WAikRq37L._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
      director: "Francis Ford Coppola",
      description: "It is the first installment in The Godfather trilogy, chronicling the Corleone family under patriarch Vito Corleone from 1945 to 1955. It focuses on the transformation of his youngest son, Michael Corleone, from reluctant family outsider to ruthless mafia boss.",
      genre: "Drama"
    },
    {
      id: 3,
      title: "Rush Hour",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/5131OWtQRaL._SX381_BO1,204,203,200_.jpg",
      director: "Brett Ratner",
      description: "A loyal and dedicated Hong Kong Inspector teams up with a reckless and loudmouthed L.A.P.D. detective to rescue the Chinese Consuls kidnapped daughter, while trying to arrest a dangerous crime lord along the way.",
      genre: "Comedy"
    }
  ]);

  const [selectedMovie, setSelectedMovie] = useState(null);

  if (selectedMovie) {
    return ( <MovieView movie={selectedMovie} onBackClick={() => setSelectedMovie(null)} /> 
    );
  }

  if (movies.length === 0) {
    return <div>The list is empty!</div>;
  }

 return (
    <div>
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onMovieClick={(newSelectedMovie) => {
            setSelectedMovie(newSelectedMovie);
          }}
        />
      ))}
    </div>
  );
}