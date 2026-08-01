import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const Intro = () => {
    const [percentage, setPercentage] = useState(60);
    const [total, setTotal] = useState(100);
    const [percentageError, setPercentageError] = useState('');
    const [totalError, setTotalError] = useState('');
    const navigate = useNavigate();
    const blockInvalidChar = e => ['e', 'E', '+', '-', '.'].includes(e.key) && e.preventDefault();
    
    function handlePercentageChange(event) {
        setPercentage(event.target.value)
    }

    function handleTotalChange(event) {
        setTotal(event.target.value)
    }

    const toGame = () => {
        const tempPercentage = parseInt(percentage);
        const tempTotal = parseInt(total);
        if (tempPercentage < 0 || tempPercentage > 100){
            setPercentageError('The percentage (p) must be between 0 and 100 inclusive. Fix This Issue Above Before Beginning.');
            setTotalError('');
            if (tempTotal <= 0){
                setTotalError('The number of tosses (N) must be greater than 0. Fix This Issue Above Before Beginning.');
            }
        }
        else if (tempTotal <= 0){
            setPercentageError('');
            setTotalError('The number of tosses (N) must be greater than 0. Fix This Issue Above Before Beginning.');
        }
        else{
            setPercentageError('');
            setTotalError('');
            const percent = parseFloat(percentage) / 100;
            navigate('/Game', {state: {p: percent, n: total}});
        }
    }

    return(
    <div>
        <div className='Intro'>
            <h1 className='Header'>Description:</h1>
            <div className='IntroText'>
                <p>Imagine you have a starting capital of C=$100, and you are allowed to bet a percentage of your capital on a coin toss that has a p=60% chance to come up heads.</p>

                <p>If you bet $1 and you win, you’ll your new capital will be $101, if you lose you’ll have $99 now.</p>

                <p>Let’s assume that you get to repeat the game until a total of N=100 coin tosses have been played. You may change the percentage you wish to bet each time.</p>

                <p>Let’s also assume that your capital can grow to a maximum of M=$1000.</p>

                <p>If you reach the maximum at any time during the 100 coin tosses, the game stops and you can take pride in having made the maximum.</p>

                <p>If you reach $0 at any time of the game, the game also stops.</p>

                <p>So what percentage are you going to bet each time? Play the game, and see how much money you’ll have after 100 games.</p>
            </div>
        </div>

        <div  className='Label'>
            <label>Percentage To Come Up Heads = p:    </label>
            <input value={percentage} onChange={handlePercentageChange} onKeyDown = {blockInvalidChar} type="number" step = "1" min = "0" max = "100"/>
            <label>%</label>

            <br />
            <label>Total Coin Tosses = N:    </label>
            <input value={total} onChange={handleTotalChange} onKeyDown = {blockInvalidChar} type="number" step = "1" min = "0"/>
        </div>

        <div className='Container'>
            <button className='Button' onClick = {toGame}><span>Begin Game</span></button>
        </div>
        <p className='Error'><mark>{percentageError}</mark></p>
        <p className='Error'><mark>{totalError}</mark></p>
    </div>
    );
  };
  
export default Intro;