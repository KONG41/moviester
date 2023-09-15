import Home from "../pages/Home";
import Genre from "../pages/Genre";

const routes = [
    {
        path: "/",
        el: <Home />

    },
    {
        path: "/genre",
        el: <Genre />
    }
]

export default routes;