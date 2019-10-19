import React, { Component } from 'react';
import Card from '../card/card';
import axios from 'axios';

class list extends Component {
    state={
        posts:[],
        user:[],
        comments:[],
        shown:false
    } 

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((res)=>{
            this.setState({
                posts:res.data  
            })
            axios.get('https://jsonplaceholder.typicode.com/users')
                .then((res)=>{
                    this.setState({
                        user:res.data
                })
            })
        })
    }
    
    render() {
        const { posts,user } = this.state;
        
        return (
            <div>
                {posts && posts.map((item)=>{
                    return(
                        <Card key={item.id} shown={this.state.shown} data={item} onClick={this.renderComments} user={user}/>
                    )
                })}
            </div>
        );
    }
}

export default list;