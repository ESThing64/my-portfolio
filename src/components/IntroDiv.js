import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



export default function IntroDiv() {
    return (
        <div>

            <div className="me">

                <p> Hi, I'm John, a backend web devloper. Welcome to my portfolio. Yes, I usually spend my evenings solving algorithms for fun</p>

            </div>

            <img className="me-img" src="./assets/img/headshot.png" width="200" height="200" alt="" />

            <ul className="sm-bar">


                <a href="https://www.linkedin.com/in/john-coakley-a9b6121a6/"><FontAwesomeIcon icon={['fab', 'linkedin']} /></a>
                <a href="https://www.instagram.com/life_in_seasia/"><FontAwesomeIcon icon={['fab', 'instagram']} /></a>
                <a href="https://github.com/ESThing64"><FontAwesomeIcon icon={['fab', 'github']} /></a>
            </ul>

        </div>
    )

}









