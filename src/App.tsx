import { useState } from 'react'
import './App.css'

function App() {
  const MovieList = [
    {
      id: 1,
      name: "Terminator Salvation",
      image: "https://www.themoviedb.org/t/p/w1280/XE6GE6JFj8nMd2qPcqby15M82X.jpg",
      overview: "In the Year 2016, Resistance fighter Blair Williams embarks on a deadly mission to search for a threat that is weakening humanity's defense against the self-aware artificial",
    }
  ];
  return (
    // movielist
    <div>
      {MovieList.map((movie) => (
        <div key={movie.id}>
          <h2>{movie.name}</h2>
          <img src={movie.image} alt={movie.name} />
          <p>{movie.overview}</p>
        </div>
      ))}
    </div>
  )
}

export default App
