import Home from "../pages/Home";
import Genre from "../pages/Genre";
import MovieDetail from "../pages/MovieDetail";
import NoPage from "../pages/NoPage";
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
        path: "/movie/:id",
        el: <MovieDetail />
    },
    {
        path: "*",
        el: <NoPage />
    }
]

export default routes;