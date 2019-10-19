import React from 'react';
import './card.css';
import Userlabel from './label';
import Comments from './comments';
import { Link } from 'react-router-dom';
import axios from 'axios';


class card extends React.Component {
    constructor(props){
        super(props)
        this.state={shown:false,comments:[]}
    }
    componentDidMount(){
        axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${this.props.data.id}`)
        .then((res)=>{
            this.setState({
                comments:res.data,
                })   
        })
    }
    renderComments = () => {
       this.setState({
           shown:!this.state.shown
       })
    }
    render(){
    const {title,body,userId,id} = this.props.data;
    const {user} = this.props;
    const {comments} = this.state;
        return (
            <div className="main-section">
                <Link to={`/profile/${userId}`}><Userlabel id={userId} user={user}/></Link>
                <br/>
                <h3 className="text-style">{title}</h3>
                <h4 className="text-style">{body}</h4>
                <p><Comments postid={id} open="false" onClick={()=>this.renderComments(id)}/></p>
                <br/>
                <p>{this.state.shown ? 
                        comments && comments.map((item,i)=>{
                          return (
                            <div key={item.id}>
                                <div>
                                {i+1}. {item.body} - {item.email}
                                </div>
                                <hr/>
                            </div>
                          )  
                        }) 
                        : 
                    null}
                </p>
            </div>
        );
}
}
 
export default card;