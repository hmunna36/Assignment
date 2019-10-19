import React, { Component } from 'react';
import Axios from 'axios';
import './albums.css';

class albums extends Component {
    state={images:[]}
    componentDidMount(){
        Axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${this.props.match.params.id}`)
        .then((res)=>{
            this.setState({
                images:res.data  
            })
            console.log(res.data);
            
        })
    }
    render() {
        console.log(this.state.images);
        
        return (
            <div>
              {this.state.images.map((item)=>{
                  return(
                    <div class="row">
                        <div class="column">
                             <img src={item.url} alt="Snow" style={{width:'100%'}}/>
                             <center><h4>{item.title}</h4></center>
                        </div>
                    </div>
                  )
              } ) }
            </div>
        );
    }
}

export default albums;