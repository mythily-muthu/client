import './App.css';
import React, { useEffect } from "react";
import axios from "axios"

function App() {

  const getAllMovies = async () => {
    const res = await axios.get("http://localhost:5000/api/movies");
    console.log(res);
  }

  useEffect(() => {
    getAllMovies()


  }, [])

  return (
    <div className="App">
      hello
    </div>
  );
}

export default App;
