import React from 'react';
import { useParams } from 'react-router';

const LeagueDetails = () => {
    const {idLeague} = useParams();
    return (
        <div>
            <h2>this is league details {idLeague}</h2>
        </div>
    );
};

export default LeagueDetails;