import React from 'react';

    const Comments = (props) => {
        return (
            <div>
                <button className="button-style2" onClick={props.onClick}>Comments</button>
            </div>   
        );
    }
    
export default Comments;