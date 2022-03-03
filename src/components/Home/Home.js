import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import MovieListing from "../MovieListing/MovieListing";
import {fetchAsyncMovies, fetchAsyncSeries} from '../../features/movies/movieSlice'

const Home = () => {
  const dispatch= useDispatch();    

  useEffect(() => {
    dispatch(fetchAsyncMovies())
    dispatch(fetchAsyncSeries())
    return () => {};
  }, [dispatch]);

  return (
    <div className="banner-img">
      <MovieListing />
    </div>
  );
};

export default Home;
