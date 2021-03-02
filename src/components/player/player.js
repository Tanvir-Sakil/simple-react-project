import React from 'react';

import './player.css';
import { Button } from 'react-bootstrap';

const Player = (props) => {

   
    const handleAdPlayer = props.handleAdPlayer;
    const {Name,salary,image} = props.player;
    return (
         <div>
          
        <div className ="player">
            <img src = {image} alt=""/>
            <h3>Name :{Name}</h3>
            <h5>Salary : {salary}</h5>
            <Button variant="success" onClick = { ()=>handleAdPlayer(props.player)}>Add the player </Button>
        </div>
        </div>
    );
};

export default Player;