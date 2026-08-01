import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route } from "react-router-dom";
import Intro from './pages/Intro.js';
import Game from './pages/Game.js';
import End from './pages/End.js';
import './styles.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className='App'>
      <div className='Main'>
        <h1>The Kelly Criterion Investment Game</h1>
        <p className='Subtitle'>Requested by Dr. Klaus Volpert</p>
      </div>
    <HashRouter>
    <div className='Content'>
      <Routes>
        <Route index element={<Intro />} />
        <Route path = 'Intro' element={<Intro />} />
        <Route path = 'Game' element={<Game />} />
        <Route path = 'End' element={<End />} />
      </Routes>
    </div>
  </HashRouter>
  </div>
);
