import React from 'react';
import './TeamBanner.css'

const TeamBanner = (props) => {

    const { strTeamBanner, strTeamBadge } =props.teamInfo;
    const style = {
        backgroundImage: `url(${strTeamBanner})`,
        height: '250px',
        backgroundSize: "cover",
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
    }
    return (
        <div style={style}>
            <div className="overlay">
                <img className="image" src={strTeamBadge} alt="" />
            </div>
        </div>
    );
};

export default TeamBanner;