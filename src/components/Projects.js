import React from 'react';
import backBoneX from '../assets/img/chiropractor.png'
import readMe from '../assets/img/readme.png'
import team from '../assets/img/team.png'
import weather from '../assets/img/weather.png'
import chromeExtension from '../assets/img/clone.png'


export default function Projects() {
    return (

        <div>
            <h2 id="project-link"></h2>
            <h2 id="h2-projects">Projects</h2>
            <div id="projects">
            </div>

            <div className="flex-row">

                <div className="star-project">
                    <a href="https://floating-basin-17034.herokuapp.com" target="_blank"><img className="rounded-corners" src={backBoneX} height="400px" width="550px" alt="This is an example of John's Work" /> </a>
                    <h2 className="stara">Chiropractor-Pro</h2>

                </div>
                <div className="project-card">
                    <a href="https://github.com/ESThing64/README_Generator" target="_blank"><img className="rounded-corners" src={readMe} height="280px" width="400px" alt="This is an example of John's Work" /> </a>
                    <h2 className="pro">Readme generator</h2>
                </div>
                <div className="project-card">
                    <a href="https://github.com/ESThing64/-Team_Profile_Generator" target="_blank"><img className="rounded-corners" src={team} height="280px" width="400px" alt="This is an example of John's Work" /> </a>
                    <h2 className="pro">Team Profile </h2>
                </div>
                <div className="project-card">
                    <a href="https://esthing64.github.io/stunning-spoon_weather_dash/" target="_blank"><img className="rounded-corners" src={weather} height="280px" width="400px" alt="This is an example of John's Work" /> </a>
                    <h2 className="pro">Weather App</h2>
                </div>
                <div className="project-card">
                    <a href="https://intense-shelf-26175.herokuapp.com" target="_blank"><img className="rounded-corners" src={chromeExtension} height="280px" width="400px" alt="This is an example of John's Work" /> </a>
                    <h2 className="pro">Momentum Clone (in progress) </h2>
                </div>

            </div>

        </div>

    )
}