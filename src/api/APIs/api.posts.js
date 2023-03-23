import axios from "axios";

const posts = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com/posts'
});

export default posts;