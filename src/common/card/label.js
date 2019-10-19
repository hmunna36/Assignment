import React from 'react';

const label = (props) => {
    const username = (id,user) =>{
        let data = user.find((item)=>{
            return item.id === id
        });
        if(data){
            return data.name
        }
    }
    
        return (
            <button className="button-style">{username(props.id,props.user)}</button>
        );
}

export default label;