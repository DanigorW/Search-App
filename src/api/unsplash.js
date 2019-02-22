import axios from 'axios'

export default axios.create({
    baseURL:"https://api.unsplash.com",
    headers:{
        Authorization:'Client-ID 13c17d7c6191e4976b0579df932f4098b1c4e9224b50615056f09b3b9cabbcfd'
    }
})


