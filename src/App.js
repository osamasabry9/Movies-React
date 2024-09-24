import { Container } from "react-bootstrap";
import NavBar from "./components/NavBar";
import MoviesList from "./components/MoviesList";

function App() {
  return <div className="color-body">
    <NavBar />
    <Container>
     <MoviesList />
    </Container>
  </div>;
}

export default App;
