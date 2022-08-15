import React, { useState } from "react";
import { Container } from "react-bootstrap";
import MoiveForm from "./components/moive_form/Movie_form";
import MoiveList from "./components/moive_list/Movie_list";
import Nav from "./components/navbar/Navbars";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  const [movies, setMovies] = useState([]);   // take state because both form and list component parent is App component and pass props both component 
  return (
    <div className="App">
      <Nav />
      <Container className="wrap">
        <div className="form">
          <MoiveForm movies={movies} setMovies={setMovies} />
        </div>
        <div className="list">
          <MoiveList movies={movies} setMovies={setMovies} />
        </div>
      </Container>
    </div>
  );
};

export default App;
