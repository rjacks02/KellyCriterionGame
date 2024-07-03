import React from 'react';
import ReactDOM from 'react-dom/client';
import { Outlet, Link, useLocation, useNavigate } from "react-router-dom";

const End = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const capital = location.state.finalCapital;
    const count = location.state.count;
    const percentage = location.state.percentage;
    const max = location.state.turns;
    const data = location.state.gameData;
    const lastWager = location.state.lastPercentage;

    function playAgain(){
        navigate('/Intro');
    }

    function submitForm(){
        let headPercentage = percentage;
        let maxTurns = max;
        let finalCapital = capital;
        data.push(lastWager);
        data.push(finalCapital.toFixed(2));
        let gameData = data;

        const HEAD_PERCENTAGE = "entry.574903203";
        const MAX_TURNS = "entry.616542073";
        const FINAL_CAPITAL = "entry.1359788107";
        const GAME_DATA = "entry.1997005850";

        const baseURL = "https://docs.google.com/forms/d/e/1FAIpQLSdoNcULyFKEuaC0h3ibuK2bMXC4supvbXdey2Ub4aboJddGDw/formResponse"

        let submitURL = `${baseURL}?${HEAD_PERCENTAGE}=${encodeURIComponent(headPercentage)}&${MAX_TURNS}=${encodeURIComponent(maxTurns)}&${FINAL_CAPITAL}=${encodeURIComponent(finalCapital)}&${GAME_DATA}=${encodeURIComponent(gameData.toString())}`;

        window.location.href = submitURL;
    }

    return(
    <div>
        <h1 class = 'Header'>End of Game</h1>
        <p class = 'Label'>Your Final Capital After {count} Flips:</p>
        <div class = 'Container'>
            < p class = 'Capital'>${capital.toFixed(2)}</p>
        </div>
        <div class = 'Container'>
            <button class = 'Button' onClick = {submitForm}><span>Share Data?</span></button>
            <button class = 'Button' onClick = {playAgain}><span>Play Again?</span></button>
        </div>
    </div>
    );
  };
  
export default End;