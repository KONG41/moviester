import axios from "axios";


const config = {
    baseURL: 'https://c335o4nzj4.execute-api.us-east-1.amazonaws.com',
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
