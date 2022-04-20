import { React, useState, useLayoutEffect } from 'react'
import { ReactComponent as LinkedIn } from '../../assets/linkedin.svg';
import { ReactComponent as GitHub } from '../../assets/github.svg';
import { ReactComponent as Instagram } from '../../assets/instagram.svg';

function SocialLeft() {

    const [screenSize, setScreenSize] = useState([])

    useLayoutEffect(() => {
    
        window.addEventListener('resize', () => setScreenSize([window.innerWidth]));
    
        setScreenSize([window.innerWidth])
    
        return () => window.removeEventListener('resize', () => setScreenSize([window.innerWidth]));
    
    }, []);

  return (
    <div className={screenSize[0] > 768 ? "social--left" : "hidden"}>
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