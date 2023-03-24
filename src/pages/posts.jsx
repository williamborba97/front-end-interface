import React, { Component } from "react";
import posts from '../api/APIs/api.posts';
import UserDetail from '../api/APIs/api.userDetail'
//import Coments from "../api/APIs/api.coments";
import { Container } from "./details/styles"

class Posts extends Component{

    state = {
        posts:[],
        UserDetail:[]
    }

    async componentDidMount(){
        const responsePosts = await posts.get('');
        this.setState({posts:responsePosts.data});

          const responseUser = await UserDetail.get('');
        this.setState({UserDetail:responseUser.data});  
    }

   

    render(){

        const { posts,UserDetail } = this.state
        const post = UserDetail.id 

        return(

            
           <Container>

            

            
             {posts.map(post=>(
            <div key={post.id}>
                <h2></h2>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
                <a href="">comentarios</a><br/><br/><br/>
            </div>))
            } 

            </Container>
            );
        }
}

export default Posts