import React from 'react'
import { ReactComponent as LinkedIn } from '../../assets/linkedin.svg';
import { ReactComponent as GitHub } from '../../assets/github.svg';
import { ReactComponent as Instagram } from '../../assets/instagram.svg';

function SocialLeft() {
  return (
    <div className="social--left">
        <ul className="social--left__list">
            <li>
                <a href="https://www.github.com/Pavelhaj93" className="social__link">
                    <GitHub height="20px"/>
                </a>
                
            </li>
            <li>
                <a href="https://www.linkedin.com/in/pavelhajduch/" className="social__link">
                    <LinkedIn height="20px"/>
                </a>
            </li>
            <li>
               <a href="https://www.instagram.com/pavelhaj/" className="social__link">
                   <Instagram height="20px" />
               </a>
            </li>
            
        </ul>
    </div>
  )
}

export default SocialLeft