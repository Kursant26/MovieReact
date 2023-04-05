import './App.scss';
import Header from "./components/Header";
import Footer from "./components/Footer";
import {Route, Routes} from "react-router-dom";
import Home from "./page/Home";
import Popular from "./page/Popular";
import TopRated from "./page/TopRated";
import MovieDetails from "./components/MovieDetails";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ActorDetails from "./components/ActorsDetails";
import Search from "./page/Search";

function App() {
  return (
    <div id="App">
      <Header/>
        <Routes>
            <Route path={"/"} element={ <Home/> }/>
            <Route path={"/popular"} element={ <Popular/> }/>
            <Route path={"/top_rated"} element={ <TopRated/> }/>
            <Route path={"/movie/movie_details/:movieId"} element={ <MovieDetails/> }/>
            <Route path={"/person/person_details/:personId"} element={ <ActorDetails/> }/>
            <Route path={"/search/search_movie/:movieName"} element={ <Search/> }/>
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
