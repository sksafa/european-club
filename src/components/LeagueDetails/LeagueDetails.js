import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './LeagueDetails.css'

const LeagueDetails = () => {
    const { idTeam } = useParams();
    const [teamDetails, setDetails] = useState({});
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setDetails(data.teams[0]))
    }, [idTeam])

    
    const { strTeamBanner, strTeamBadge } = teamDetails;
    const style = {
        backgroundImage: `url(${strTeamBanner})`,
        height: '250px',
        backgroundSize: "cover",
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
    }

    return (
        <div>
            <div style={style}>
                <div className="overlay">
                    <img className="image" src={strTeamBadge} alt="" />
                </div>
            </div>
            <div className="infoSection">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 col-sm-12">

                        </div>
                        <div className="col-md-2 col-sm-12"></div>
                        <div className="col-md-5 col-sm-12">hgggfdgdfg</div>
                    </div>
                </div>
            </div>
            <div className="teamDes"></div>
        </div>
    );
};

export default LeagueDetails;