import React from 'react';
import { Link } from 'react-router-dom';
import style from './style.css';
import logo from './assets/codemotion-logo.png';


const Home = () => (
  <div className={style.main}>
    <div className={style.hero}>
      <img src={logo} alt="Codemotion Logo" width="357" height="50" />
      <h1>Hello Amsterdam</h1>
    </div>
  </div>

);

export default Home;
