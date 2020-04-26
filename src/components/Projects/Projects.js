import React, { Component } from "react";
import "./Projects.css";
import spanimalsMobile from "../../images/spanimals-mobile.png";
import folkulDestop from "../../images/folkul-desktop.png";
import overlaysDesktop from "../../images/overlays-desktop.png";

class Projects extends Component {
  render() {
    document.title = "Best Projects - Kraig Williams Portfolio";
    return (
      <section className="projects">
        <div>
          <h2>Folkul</h2>
          <p className="descriptions">
            Social Network site created over three weeks in a team of myself and
            two others.
          </p>
          <p>
            {" "}
            The idea of the site was to create a social network where people
            could save their thoughts on anything and choose to share with
            others or keep them private. It is a way to develop meaningful
            thoughts over social media rather that wasting time which is
            prevelant today.</p>
            <p>Technology:
              <ul>
                <li>React</li>
                <li>Node.js</li>
                <li>PostgreSQL</li>
                <li>Express.js</li>
                <li>Styled Components</li>
              </ul>
            </p>
            <br />
            <a
            className='project-links'
              rel="noopener noreferrer"
              target="_blank"
              href="https://folkul.now.sh"
            >
              Visit Folkul live
            </a>
            <br />
            <a
            className='project-links'
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/kraigwilliams/motive-client"
            >
              Folkul Github Repo{" "}
            </a>
            <br />
            <img
              className="screenshots"
              alt="folkul desktop screenshot"
              src={folkulDestop}
            />
          
        </div>
        <div>
          <h2>Overlays </h2>
          <p className="descriptions">
            Note Saving Application that allows users to enter any url they
            visited on the web and save notes about that webpage
          </p>
          <p>Technology:
              <ul>
                <li>React</li>
                <li>Node.js</li>
                <li>PostgreSQL</li>
                <li>Express.js</li>
                
              </ul>
            </p>
          <a className='project-links'
            rel="noopener noreferrer"
            target="_blank"
            href="https://overlays.now.sh"
          >
            Visit Overlays live
          </a>
          <br />
          <a
          className='project-links'
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/kraigwilliams/overlays-app"
          >
            Overlays Github Repo{" "}
          </a>
          <br />
          <img
            className="screenshots"
            alt="overlays desktop screenshot"
            src={overlaysDesktop}
          />
        </div>
        <div>
          <h2>Spanimal</h2>
          <p className="descriptions">
            App that teaches users spanish translations of animals{" "}
          </p>
          <p>Technology:
              <ul className='tech'>
                <li>React</li>
                <li>Node.js</li>
                <li>PostgreSQL</li> 
                <li>Express.js</li>
                <li>Cypress.js</li>
              </ul>
            </p>
          <a
          className='project-links'
            rel="noopener noreferrer"
            target="_blank"
            href="https://spanimal.now.sh"
          >
            Visit Spanimals Live
          </a>
          <br />
          <a
          className='project-links'
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/tpic12/spanimal-client"
          >
            Spanimal Github Repo{" "}
          </a>
          <h3>Screenshots</h3>
          
            
            <img
              className="screenshots"
              alt="spanimals mobile screenshot"
              src={spanimalsMobile}
            />
          
        </div>
      </section>
    );
  }
}

export default Projects;
