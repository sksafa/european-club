import React, { useEffect, useState } from 'react';
import './Home.css'
import Banner from '../Banner/Banner';
import LeagueInfo from '../LeagueInfo/LeagueInfo';

const Home = () => {

    const [leagueName, setLeagueName] = useState([]);
    useEffect(() => {
        fetch('https://www.thesportsdb.com/api/v1/json/1/all_leagues.php')
            .then(res => res.json())
            .then(data => setLeagueName(data.leagues))
    }, [])

    const sortName = leagueName.slice(0, 100)
    console.log(leagueName);

    return (
        <div className="bg-primary">
            <Banner></Banner>
            <div className="bg-primary home-css">
                {sortName.map(leagueName => <LeagueInfo leagueName={leagueName} ></LeagueInfo>)}
            </div>
        </div>
    );
};

export default Home;