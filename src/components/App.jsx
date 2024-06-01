import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { GlobalStyle } from "../GlobalStyle";

const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));
const Cast = lazy(() => import('./Cast'));
const Reviews = lazy(() => import('./Reviews'));
const NotFound = lazy(() => import('../pages/NotFound'));
const Header = lazy(() => import('./Header'));

export default function App () {
  return (
    <div>

      <GlobalStyle />
      
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />}/>
          <Route path="/movies/:id" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} /> {/* Страница с сообщением об ошибке навигации */}
        </Route>
      </Routes>

    </div>
  );
};