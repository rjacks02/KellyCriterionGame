import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { Outlet, Link, useLocation, useNavigate } from "react-router-dom";

const Game = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const blockInvalidChar = e => ['e', 'E', '+', '-'].includes(e.key) && e.preventDefault();

    const percentage = location.state.p
    const total = location.state.n

    const [count, setCount] = useState(1);
    const [capital, setCapital] = useState(100);
    const [wagerPercentage, setWagerPercentage] = useState(0);
    const [wagerTotal, setWagerTotal] = useState(0);
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [data, setData] = useState([100]);

    function handleWagerChange(event) {
        const newPercentage = event.target.value
        setWagerPercentage(newPercentage);
        let money = parseFloat(capital) * parseFloat(newPercentage) / 100;
        money = parseFloat(money.toFixed(2));
        if (isNaN(money)){
            money = 0;
        }
        setWagerTotal(money);
    }

    function runFlip(){
        if (wagerPercentage < 0 || wagerPercentage > 100){
            setError('Your wager must be between 0 and 100 inclusive. Fix above before continuing.')
        }
        else{
            const flip = Math.random();
            let newCapital = 0;

            if (parseFloat(flip) < percentage){
                setMessage('The Last Flip Was Heads! You Have Gained $' + wagerTotal + "!");
                newCapital = parseFloat(capital) + parseFloat(wagerTotal)
                setCapital(newCapital.toFixed(2));
            }
            else{
                setMessage('The Last Flip Was Tails! You Have Lost $' + wagerTotal + "!");
                newCapital = parseFloat(capital - wagerTotal)
                setCapital(newCapital.toFixed(2));
            }

            let money = parseFloat(newCapital) * parseFloat(wagerPercentage) / 100;
            money = parseFloat(money.toFixed(2));
            if (isNaN(money)){
                money = 0;
            }
            setWagerTotal(money);
            
            const newData = [...data, wagerPercentage, newCapital.toFixed(2)];
            setData(newData);

            setCount(count+1);
            if (newCapital <= 0){
                navigate('/End', {state: {finalCapital: 0, count: count, percentage: percentage, turns: total, gameData: data, lastPercentage: wagerPercentage}});
            }
            else if (newCapital >= 1000){
                navigate('/End', {state: {finalCapital: 1000, count: count, percentage: percentage, turns: total, gameData: data, lastPercentage: wagerPercentage}});
            }
            else if (count >= total){
                navigate('/End', {state: {finalCapital: newCapital, count: count, percentage: percentage, turns: total, gameData: data, lastPercentage: wagerPercentage}});
            }
        }
    }

    return(
    <div>
        <h1 class='Header'>Game {count}</h1>
        <p class = 'Label'>You Have Up To {total-count+1} Coin Flips Remaining!</p>
        <p class = 'Container'> <span class = 'Capital'>Current Capital = ${capital} </span></p>
        <div class = 'Label'>
            <label >Wager:    </label>
            <input onChange={handleWagerChange} onKeyDown = {blockInvalidChar} type="number" defaultValue="0" step = "1" min = "0" max = "100"/>
            <label >%</label>
            <p>You Will Be Wagering ${wagerTotal.toFixed(2)}</p>
        </div>
        <div class='Container'>
            <button class='Button' onClick={runFlip}><span>Flip The Coin!</span></button>
        </div>
        <p class = 'Error'><mark>{error}</mark></p>
        <p class = 'Label'>{message}</p>
    </div>
    );
  };
  
export default Game;
