import React, { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";
import MovieApi from "../../common/apis/MovieApi";
import { APIkey } from "../../common/apis/MovieApiKey";
import { useDispatch } from "react-redux";
import { addMovies } from "../../features/movies/movieSlice";

const Home = () => {
  const movieText = "Harry";
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchMovies = async () => {
      const res = await MovieApi.get(
        `?apiKey=${APIkey}&s=${movieText}&type=movie`
      );
      dispatch(addMovies(res.data));
    };

    fetchMovies();
    return () => {};
  }, []);

  return (
    <div className="banner-img">
      <MovieListing />
    </div>
  );
};

export default Home;
