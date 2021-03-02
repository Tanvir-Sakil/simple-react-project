import React from 'react';
import './cart.css';

const Cart = (props) => {

    console.log(props);

    let salary =0;

    for (let index = 0; index < props.salary.length; index++) {
         
         let salaryInt = props.salary[index];

        let salaryArr =  salaryInt.split("$");
        let salaryNum = parseFloat(salaryArr[1]);
         salary = salary + salaryNum;
        
    }
    
    return (
        <div className = "my-team">
            <h2 style={{color: "red", marginLeft : "10px"}}>My Team</h2>
            <h4>Team length : {props.cart.length}</h4>
            <ol>
            {
              props.cart.map(player=><li>{player}</li>)
            }
            </ol>
            <h3>Total Budget : ${salary}</h3>


        </div>
    );
};

export default Cart;