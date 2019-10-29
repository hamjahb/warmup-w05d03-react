
import React from 'react';

const Character = props => (
    <div className="card">
        <h2>{props.char.charName}</h2>
        <img src={props.char.imgSrc} alt="" />
        <p>House: {props.houseName} </p>
    </div>
)


export default Character;