import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router';
import './AllTeams.css'

const AllTeams = (props) => {
    const {strTeamBadge, idTeam, strTeam, strSport} = props.team;
    const history = useHistory();
    const handleExplore = (id) => {
        history.push(`/team/${id}`)
    }
    return (
        <div className="col-sm-4 border rounded text-center p-5 shadow team-container">
            <div className="team-logo rounded-circle">
                <img src={strTeamBadge} alt=""/>
            </div>
            <h4>Team Name: {strTeam}</h4>
            <p>Sports Type: {strSport}</p>
            <button className="explore-btn" onClick={() => handleExplore(idTeam)}> Explore <FontAwesomeIcon icon={faArrowRight} /></button>           
        </div>
    );
};

export default AllTeams;