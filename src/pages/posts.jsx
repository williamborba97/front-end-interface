import React, { Component } from "react";
import posts from '../api/APIs/api.posts';
//import userDetail from '../api/APIs/api.userDetail'
//import Coments from "../api/APIs/api.coments";
import { Container } from "./details/styles"

class Posts extends Component{

    state = {
        posts:[],
    }

    async componentDidMount(){
        const response = await posts.get('');
        this.setState({posts:response.data});
    }

    render(){

        const { posts } = this.state

        return(
            
           <Container>

            <h2>nome do usuario </h2>
            <h1>titulo do post</h1>
            <p>post</p>
            <a href="">comentarios</a><a href=""></a>

           {console.log(posts)}

            {posts.map(post=>(
            <li key={post.usersId}>
                <h2>{post.title}</h2>
            </li>))
            };

            </Container>
            
        );
        
    }
}

export default Posts