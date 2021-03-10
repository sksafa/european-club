import React, { useEffect, useState } from 'react';
import './Home.css'
import Banner from '../Banner/Banner';
import LeagueInfo from '../LeagueInfo/LeagueInfo';

const Home = () => {
// { sortName.map(leagueName => <LeagueInfo leagueName={leagueName} ></LeagueInfo>)}
    const [leagueName, setLeagueName] = useState([]);
    useEffect(() => {
        fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League')
            .then(res => res.json())
            .then(data => setLeagueName(data.teams))
    }, [])

    console.log(leagueName);

    return (
        <div className="bg-primary">
            
            <Banner></Banner>
            <div className="bg-primary home-css">
            { leagueName.map(leagueName => <LeagueInfo leagueName={leagueName} ></LeagueInfo>)}
            </div>
        </div>
    );
};

export default Home;