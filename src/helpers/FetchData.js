import axios from "axios";


const config = {
    baseURL: 'https://moviester-api-py.vercel.app',
    headers:{
        'Accept': '*/*',
        'Connection': 'keep-alive'
    }
}

export const getHomes = () => {
    return axios.get('/home?suggest=all', config);
}

export const getSliders = () => {
    return axios.get('/sliders', config);
}

export const getDetailMovie = (id) => {
    return axios.get(`/movie_detail?id=/movie/${id}`, config);
}
