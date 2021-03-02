import React from 'react';
import {useState} from 'react';
import './team.css';
import  Player from '../player/player';
import myPlayer from '../../data/data.json';
import Cart from '../cart/cart';

const Team = () => {

    const [cart,setCart] = useState([]);
    const [salary,setSalary] = useState([]);

    const handleAdPlayer =(player)=> {

        const newCart = [...cart,player.Name];
        setCart(newCart);
        console.log(cart);

        const newSalary = [...salary, player.salary];
        setSalary(newSalary);            
        }



    const [product] = useState(myPlayer)
    return (

        <div className = "player-selector">
        <div className = "my-player">
        <ul>

        {
          product.map(players => <Player player ={players} handleAdPlayer ={handleAdPlayer}></Player>)
        }
        
        </ul>
    </div>
        <div className = "player-cart">
         <Cart cart ={cart} salary ={salary}></Cart>
        </div>
        </div>
       
    );
};

export default Team;