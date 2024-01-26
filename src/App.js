import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
          import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MovieCard from './MovieCard';
import MovieDetail from './MovieDetail';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <div>
            {/* Render Movie Cards */}
            {/* Assume movies data is available */}
            {movies.map((movie) => (
              <MovieCard key={movie.title} movie={movie} />
            ))}
          </div>
        </Route>
        <Route path="/movies/:title" exact>
          {/* Render Movie Detail */}
          {/* Assume movies data is available */}
          <MovieDetail movies={movies} />
        </Route>
        <Route path="*">
          <div>404 - Not Found</div>
        </Route>
      </Switch>
    </Router>




        </a>
      </header>
    </div>
  );
}

export default App;
