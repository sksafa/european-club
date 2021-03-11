import React, { useEffect, useState } from 'react';
import './Home.css'
import Banner from '../Banner/Banner';
import TeamInfo from '../TeamInfo/TeamInfo';

const Home = () => {

    const [teamName, setTeamName] = useState([]);
    useEffect(() => {
        fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League')
            .then(res => res.json())
            .then(data => setTeamName(data.teams))
    }, [])

    return (
        <div className="mainBody">
            <Banner></Banner>
            <div className="home-css">
            { teamName.map(teamName => <TeamInfo teamName={teamName} ></TeamInfo>)}
            </div>
        </div>
    );
};

export default Home;