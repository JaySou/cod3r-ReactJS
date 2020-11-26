import './Card.css'
import React from 'react';

export default (props) => {

    return (
        <div className="Card" style={{
            backgroundColor: props.color || '#f00',
            borderColor: props.color || '#f00'
        }}> 
            <div className="Title">
                {props.titulo}
            </div>
            <div className="Content">
                {props.children}
            </div>
        </div>
    )
}