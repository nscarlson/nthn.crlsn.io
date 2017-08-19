import React from 'react'


const img = require('./images/profile.jpg');

const Home = () =>
    <div className="home">
        <p>
            {'I led a perfectly normal life until I started programming. Now I spend 90% of my time eating or sleeping or sitting in the cheapest available chair or any combination thereof, instead of looking for ants in the backyard.'}
        </p>
        <br />
        <img src={ img } />
        <br />
    </div>
    
export default Home
