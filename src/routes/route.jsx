import Home from "../pages/Home";
import Genre from "../pages/Genre";
import MovieDetail from "../pages/MovieDetail";
const routes = [
    {
        path: "/",
        el: <Home />

    },
    {
        path: "/genre",
        el: <Genre />
    },
    {
        path: "/details",
        el: <MovieDetail />
    }
]

export default routes;