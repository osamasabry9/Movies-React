import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import CardMovie from "./CardMovie";
import PaginationComponent from "./PaginationComponent";
import { useSelector, useDispatch } from "react-redux";
import { getAllMovies } from "../redux/actions/movieAction";

function MoviesList() {
  const [movies, setMovies] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllMovies());
  }, []);

  const dataMovies = useSelector((state) => state.movies);

  useEffect(() => {
    setMovies(dataMovies);
  }, [dataMovies]);

  return (
    <Row className="mt-3">
      {movies.length >= 1 ? (
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
