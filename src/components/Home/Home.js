import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import AllTeams from '../AllTeams/AllTeams';
import './Home.css'

const Home = () => {
    const [teams, setTeams] = useState([]);
    useEffect(() => {
        const url = 'https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League';
        fetch(url)
            .then(res => res.json())
            .then(data => setTeams(data.teams))
    }, [])
    return (
        <div className="container-fluid">
            <div className="banner-image">
                <div className="banner-text">
                    <h1>Inside Team</h1>
                </div>
            </div>
            <div className="container">
                <h3 className="text-center m-4 ">Total Team:{teams.length}</h3>
                <div className="row">
                    {
                        teams.map(team => <AllTeams team={team}></AllTeams>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;