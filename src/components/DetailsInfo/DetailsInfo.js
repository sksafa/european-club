import React from 'react';
import './DetailsInfo.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt,faFlag,faFutbol,faMars } from '@fortawesome/free-solid-svg-icons'

const DetailsInfo = (props) => {
    const {strTeam,intFormedYear,strCountry,strSport,strGender } = props.teamInfo;

    return (
        <div className="container teamInfoSection">
            <div className="row">
                <div className="col-md-6 col-sm-12">
                    <h2>{strTeam}</h2>
                    <p><FontAwesomeIcon icon={faMapMarkerAlt} /> Founded: {intFormedYear} </p>
                    <p><FontAwesomeIcon icon={faFlag} /> Country: {strCountry} </p>
                    <p><FontAwesomeIcon icon={faFutbol} /> Sport Type: {strSport} </p>
                    <p><FontAwesomeIcon icon={faMars} /> Gender: {strGender} </p>
                </div>
                <div className="col-md-1 col-sm-12"></div>
                <div className="col-md-5 col-sm-12">hgggfdgdfg</div>
            </div>
        </div>
    );
};

export default DetailsInfo;