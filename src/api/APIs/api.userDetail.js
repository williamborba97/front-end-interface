import axios from "axios";

const UserDetail = axios.create ({
    baseURL:'https://jsonplaceholder.typicode.com/User'
})

export default UserDetail;