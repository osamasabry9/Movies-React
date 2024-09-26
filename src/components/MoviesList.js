import React, { useEffect } from "react";
import { Row } from "react-bootstrap";
import CardMovie from "./CardMovie";
import PaginationComponent from "./PaginationComponent";
import { useSelector, useDispatch } from "react-redux";
import { getAllMovies } from "../api/MoviesApi";

function MoviesList() {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.moviesList);
  const isLoading = useSelector((state) => state.movies.isLoading);
  const error = useSelector((state) => state.movies.error);

  useEffect(() => {
    dispatch(getAllMovies());
  }, [dispatch]);

  return (
    <Row className="mt-3">
      {error !== null ? (
        <div className="alert alert-danger">{error}</div>
      ) : null}
      {isLoading ? (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : movies.length >= 1 ? (
        movies.map((mov) => {
          return <CardMovie key={mov.id} mov={mov} />;
        })
      ) : (
        <h2 className="text-center p-5">لا يوجد افلام...</h2>
      )}

      {movies.length >= 1 ? <PaginationComponent /> : null}
    </Row>
  );
}

export default MoviesList;
