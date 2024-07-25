import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '0cbc92242b404a62b3d7f18523e23fbb'
    }
})

//https://api.rawg.io/docs/#operation/games_list