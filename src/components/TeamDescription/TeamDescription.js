import React from 'react';
import './TeamDescription.css'

const TeamDescription = (props) => {
    const { strStadiumDescription, strDescriptionEN } = props.teamInfo;
    return (
        <div className="teamDes">
            <div className="container">
                <p>{strDescriptionEN}</p>
                <p>{strStadiumDescription}</p>
            </div>
        </div>
    );
};

export default TeamDescription;