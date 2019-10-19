import React, { Component } from 'react';
import Axios from 'axios';
import './profile.css';
import {Link} from 'react-router-dom';

class pofile extends Component {
    state={profile:[],albums:[]}
    componentDidMount(){
        Axios.get(`https://jsonplaceholder.typicode.com/users/${this.props.match.params.id}`)
        .then((res)=>{
            this.setState({
                profile:res.data  
            })
            Axios.get(`https://jsonplaceholder.typicode.com/albums?userId=${this.props.match.params.id}`)
                .then((res)=>{
                    this.setState({
                        albums:res.data  
                    }) 
                })
        })
    }

    render() {
        const {name,phone,email,website} = this.state.profile;
        const address = this.state.profile.address;
        return (
            <div className='container'>
                <div>
                    {name}
                </div>
                <br/>
                <div>
                    Phone: {phone}
                    <br/>
                    E-Mail: {email}
                </div>
                <h3>
                    {address && address.street},
                    {address && address.suite},
                    {address && address.city},
                    {address && address.zipcode} 
                </h3>
                <div>
                    Website: {website}
                </div>
                <br/>
                <hr/>
                <h2>Albums</h2>
                <div className="flex-container">
                    {this.state.albums.map((item)=>{
                        return(
                            <div><Link to={`/albums/${item.id}`}>{item.title}</Link></div>
                        )
                    })}
                </div>
            </div>
        );
    }
}

export default pofile; 