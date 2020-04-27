import React, { Component } from "react";
import "./Projects.css";
import spanimalsMobile from "../../images/spanimals-desktop.png";
import folkulDestop from "../../images/folkul-desktop.png";
import overlaysDesktop from "../../images/overlays-desktop.png";

class Projects extends Component {
  render() {
    document.title = "Best Projects - Kraig Williams Portfolio";
    return (
      <section aria-label='list of my projects'className="projects">
        <div aria-label='Folkul Project'>
          <h2>Folkul</h2>
          <p className="descriptions">
            Social Network site created over three weeks in a team of myself and
            two others.
          </p>
          <p>
            The idea of the site was to create a social network where people
            could save their thoughts on anything and choose to share with
            others or keep them private. It is a way to develop meaningful
            thoughts over social media rather that wasting time which is
            prevelant today.
          </p>
          <span>Technology:</span>
          <ul className="tech">
            
            <li>
              <i className="fas fa-star"></i>
              React
            </li>
            <li>
              <i className="fas fa-star"></i>
              Node.js
            </li>
            <li>
              <i className="fas fa-star"></i>
              PostgreSQL
            </li>
            <li>
              <i className="fas fa-star"></i>
              Express.js
            </li>
            <li>
              <i className="fas fa-star"></i>
              JWT
            </li>
          </ul>
          <p className="links">
            <a
              className="project-links"
              rel="noopener noreferrer"
              target="_blank"
              href="https://folkul.now.sh"
            >
              Visit Folkul live
            </a>

            <a
              className="project-links"
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/kraigwilliams/motive-client"
            >
              Folkul Github Repo
            </a>
          </p>
          <h3>Screenshot</h3>
          <img
            className="screenshots"
            alt="folkul desktop screenshot"
            src={folkulDestop}
          />
        </div>
        <div aria-label='Overlays Project'>
          <h2>Overlays </h2>
          <p className="descriptions">
            Note Saving Application that allows users to enter any url they
            visited on the web and save notes about that webpage.
          </p>
          <span>Technology:</span>
          <ul className="tech">
            <li>
              {" "}
              <i className="fas fa-star"></i> React
            </li>
            <li>
              {" "}
              <i className="fas fa-star"></i>Node.js
            </li>
            <li>
              <i className="fas fa-star"></i>PostgreSQL
            </li>
            <li>
              <i className="fas fa-star"></i>Express.js
            </li>
            <li>
              <i className="fas fa-star"></i>JWT
            </li>
          </ul>
          <p className="links">
            <a
              className="project-links"
              rel="noopener noreferrer"
              target="_blank"
              href="https://overlays.now.sh"
            >
              Visit Overlays live
            </a>

            <a
              className="project-links"
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/kraigwilliams/overlays-app"
            >
              Overlays Github Repo
            </a>
          </p>
          <h3>Screenshot</h3>
          <img
            className="screenshots"
            alt="overlays desktop screenshot"
            src={overlaysDesktop}
          />
        </div>
        <div aria-label='Spanimal Project'>
          <h2>Spanimal</h2>
          <p className="descriptions">
            App that teaches users spanish translations of animals. Utilizes the linked list data structure to implement the concept of 
            spaced repition to present users with words that they haven't mastered more often that words that they have.
          </p>
          <span>Technology:</span>
          <ul className="tech">
            <li>
              <i className="fas fa-star"></i>
              React
            </li>
            <li>
              <i className="fas fa-star"></i>
              Node.js
            </li>
            <li>
              <i className="fas fa-star"></i>
              PostgreSQL
            </li>
            <li>
              <i className="fas fa-star"></i>
              Express.js
            </li>
            <li>
              <i className="fas fa-star"></i>
              Cypress.js
            </li>
          </ul>
          <p className="links">
            <a
              className="project-links"
              rel="noopener noreferrer"
              target="_blank"
              href="https://spanimal.now.sh"
            >
              Visit Spanimals Live
            </a>

            <a
              className="project-links"
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/tpic12/spanimal-client"
            >
              Spanimal Github Repo
            </a>
          </p>
          <h3>Screenshot</h3>
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
