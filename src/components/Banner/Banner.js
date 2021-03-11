import React from 'react';
import './Banner.css'
import bannerImage from './bg2.jpg'

 const style = {
    backgroundImage: `url(${bannerImage})`,
    height: '250px',
    backgroundSize: "cover",
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat'
 }

const Banner = () => {
    return (
        <div  style={style}>
            <div className="overlay">
                <h1 className="text-center caption">European Football Club</h1>
            </div>
        </div>
    );
};

export default Banner;