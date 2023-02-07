import './App.css';
import React, { useEffect } from "react";
import axios from "axios"

function App() {

  const getMovies = async () => {
    const res = await axios.get("http://localhost:4000/");
    console.log(res);
  }

  useEffect(() => {
    getMovies()


  }, [])

  return (
    <div className="App">
      hello
    </div>
  );
}

export default App;
