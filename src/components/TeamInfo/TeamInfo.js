import './TeamInfo.css'
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
const element = <FontAwesomeIcon icon={faArrowRight} />

const TeamInfo = (props) => {
    const {strTeam, strSport,strTeamBadge,idTeam} = props.teamName;
    return (
        <div className="col-md-4 col-sm-12 LeagueInfo" >
            <div className="team-info  ">
                <img src={strTeamBadge} alt=""/>
                    <h4>{strTeam}</h4>
                    <p>Sports Type: {strSport} </p>
                    <Link to={`/details/${idTeam}`}>
                        <button>Explore {element} </button>
                    </Link>
            </div>
        </div>
    );
};

export default TeamInfo;