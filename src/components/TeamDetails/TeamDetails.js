import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarker, faFlag, faVolleyballBall, faMars } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import malePic from '../../Photo/male.png';
import femalePic from '../../Photo/female.png';
import fbIcon from '../../Icon/Facebook.png';
import twitterIcon from '../../Icon/Twitter.png';
import ytIcon from '../../Icon/YouTube.png';
import './TeamDetails.css';

const TeamDetails = () => {
    const { id } = useParams();
    const [teamDetail, setTeamDetail] = useState([])
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setTeamDetail(data.teams[0]))
    }, [id]);
    const { strTeam, intFormedYear, strCountry, strSport, strGender, strTeamBanner, strTeamBadge, strDescriptionEN, strFacebook, strTwitter, strYoutube } = teamDetail;

    //conditional rendering 
    let gender = strGender;
    const showImage = gender === strGender ? <img className="img-fluid" src={malePic} alt="" />
        : <img className="img-fluid" src={femalePic} alt="" />


    return (
        <div>
            <div className="text-center banner">
                <img className="img-fluid w-100" src={strTeamBanner} alt="" />
            </div>
            <div className="container">
                <div className="m-auto">
                    <div className="row align-items-center justify-content-center p-3 team-info">
                        <div className="col-sm-6 pl-5">
                            <h2>{strTeam}</h2>
                            <p> <FontAwesomeIcon icon={faMapMarker} /> Founded: {intFormedYear}</p>
                            <h4> <FontAwesomeIcon icon={faFlag} /> Country: {strCountry}</h4>
                            <h4> <FontAwesomeIcon icon={faVolleyballBall} /> SportsType: {strSport}</h4>
                            <h4> <FontAwesomeIcon icon={faMars} /> Gender: {strGender}</h4>
                        </div>
                        <div className="col-sm-6">
                            {showImage}
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mt-3 p-3 border">
                <p>{strDescriptionEN}</p>
            </div>
            <div className="text-center my-4 social-icon-resize">
                <a href={`https://${strFacebook}`} target="_blank"><img src={fbIcon} alt="" /></a>
                <a href={`https://${strTwitter}`} target="_blank"><img src={twitterIcon} alt="" /></a>
                <a href={`https://${strYoutube}`} target="_blank"><img src={ytIcon} alt="" /></a>

            </div>
        </div>
    );
};

export default TeamDetails;