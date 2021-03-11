import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import DetailsInfo from '../DetailsInfo/DetailsInfo';
import SocialInfo from '../SocialInfo/SocialInfo';
import TeamBanner from '../TeamBanner/TeamBanner';
import TeamDescription from '../TeamDescription/TeamDescription';
import './TeamDetails.css'

const TeamDetails = () => {

    const { idTeam } = useParams();
    const [teamInfo, setInfo] = useState({});

    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setInfo(data.teams[0]))
    }, [idTeam])

    console.log(teamInfo)
   

    return (
        <div className="detailsBody">
            <TeamBanner teamInfo={teamInfo} ></TeamBanner>
            <div className="infoSection">
                <DetailsInfo teamInfo={teamInfo}></DetailsInfo>
            </div>
            <TeamDescription teamInfo={teamInfo}></TeamDescription>
            <SocialInfo teamInfo={teamInfo}></SocialInfo>

        </div>
    );
};

export default TeamDetails;