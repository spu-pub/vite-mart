import { useState } from "react";
import "./App.css";

function App() {
  const MovieList = [
    {
      id: 1,
      name: "Terminator Salvation",
      image:
        "https://www.themoviedb.org/t/p/w1280/XE6GE6JFj8nMd2qPcqby15M82X.jpg",
      overview:
        "In the Year 2016, Resistance fighter Blair Williams embarks on a deadly mission to search for a threat that is weakening humanity's defense against the self-aware artificial",
      trailer: "-Czz-TcWCkA",
    },
  ];

  const [activeTrailer, setActiveTrailer] = useState<string | null>(null);

  const handleOpenTrailer = (trailerId: string) => {
    setActiveTrailer(trailerId);
  };

  const handleCloseTrailer = () => {
    setActiveTrailer(null);
  };

  return (
    // movielist
    <div className="page">
      <main className="content">
        <ul className="movie-grid">
          {MovieList.map((movie) => (
            <li key={movie.id}>
              <div className="poster">
                <img src={movie.image} alt={movie.name} />
              </div>
              <div className="details">
                <h2>{movie.name}</h2>
                <p>{movie.overview}</p>
              </div>

              {movie.trailer && (
                <button
                  className="trailer-button"
                  onClick={() => handleOpenTrailer(movie.trailer)}
                >
                  Watch Trailer
                </button>
              )}
            </li>
          ))}
        </ul>
      </main>
      {activeTrailer && (
        <div className="modal-overlay" onClick={handleCloseTrailer}>
          <div className="modal-content" onClick={(event) => event.stopPropagation()}>
            <button className="modal-close" onClick={handleCloseTrailer}>X</button>
            <div className="video-wrapper">
              <iframe src={`https://www.youtube.com/embed/${activeTrailer}?autoplay=1`}
              allowFullScreen
              allow="accelerometer: autoplay;"></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
