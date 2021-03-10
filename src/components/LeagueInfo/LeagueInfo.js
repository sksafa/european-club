import './LeagueInfo.css'
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
const element = <FontAwesomeIcon icon={faArrowRight} />

const LeagueInfo = (props) => {
    const {strLeague, strSport,idLeague} = props.leagueName;
    return (
        <div className="col-md-4 col-sm-12 LeagueInfo" >
            <div className="team-info  ">
                    <h4>{strLeague}</h4>
                    <p>Sports Type: {strSport} </p>
                    <Link to={`/details/${idLeague}`}>
                        <button>Explore {element} </button>
                    </Link>
            </div>
        </div>
    );
};

export default LeagueInfo;