import React from 'react';
import './SocialInfo.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF,faTwitter,faYoutube } from '@fortawesome/free-brands-svg-icons'


const facebook = <FontAwesomeIcon icon={faFacebookF} />
const twitter = <FontAwesomeIcon icon={faTwitter} />
const youtube = <FontAwesomeIcon icon={faYoutube} />
const url = 'https://'


const SocialInfo = (props) => {
    const{strFacebook,strYoutube,strTwitter} =  props.teamInfo
    return (
        <div className="social">
            <a className="facebook" target="_blank" rel="noreferrer" href={url+strFacebook}>{facebook}</a>
            <a className="twitter"  target="_blank" rel="noreferrer" href={url+strTwitter}>{twitter}</a>
            <a className="youtube"  target="_blank" rel="noreferrer" href={url+strYoutube}>{youtube}</a>    
        </div>
    );
};

export default SocialInfo;