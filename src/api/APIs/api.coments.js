import axios from "axios";

const Coments = axios.create ({
    baseURL:'https://jsonplaceholder.typicode.com/posts/[ID]/comments'
})

export default Coments;



