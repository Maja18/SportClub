import React from 'react';
import image from '../../assets/background.png'
import './Home.css'

const Home = () => {
    return(
        <div className='Div'>
            <h1>Welcome to Sport Clubs</h1>
            <img src={image} />
        </div>
    );
};

export default Home;