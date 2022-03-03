import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import Home from "./components/Home/Home";
import MovieDetails from "./components/MovieDetails/MovieDetails";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="app">
      <Router>
        <Header></Header>
        <div className="container"></div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/movie/:imdbID" component={MovieDetails} />
          <Route component={PageNotFound} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
