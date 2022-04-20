import { React, useState, useLayoutEffect } from 'react'
import { ReactComponent as GitHub } from '../../assets/github.svg'
import { ReactComponent as LinkedIn } from '../../assets/linkedin.svg'
import { ReactComponent as Instagram } from '../../assets/instagram.svg'

function Footer() {

    const [screenSize, setScreenSize] = useState([])

    useLayoutEffect(() => {
    
        window.addEventListener('resize', () => setScreenSize([window.innerWidth]));
    
        setScreenSize([window.innerWidth])
    
        return () => window.removeEventListener('resize', () => setScreenSize([window.innerWidth]));
    
      }, []);

  return (
    <>
        <footer id="footer" className="footer">
            <div className={screenSize[0] < 768 ? "footer__container" : "hidden"}>
                <ul className="footer__list">
                    <li>
                        <a href="https://www.github.com/Pavelhaj93" className="footer__link">
                            <GitHub height="20px"/>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/pavelhajduch/" className="footer__link">
                            <LinkedIn height="20px"/>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/pavelhaj/" className="footer__link">
                            <Instagram height="20px" />
                        </a>
                    </li>
                </ul>
            </div>
            <div>
                <p>Designed & Built by Pavel Hajduch</p>
            </div>
        </footer>
    </>
  )
}

export default Footer