import axios from "axios";

const UserDetail = axios.create ({
    baseURL:'https://jsonplaceholder.typicode.com/users/3'
})

export default UserDetail;