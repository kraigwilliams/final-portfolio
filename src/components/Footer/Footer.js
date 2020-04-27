import React, { Component } from 'react'
import './Footer.css'

class Footer extends Component{
    render(){
        return(
            <footer>
            <div className="icon-bar">
              <a
                id="contact"
                aria-label="send me and email"
                href="mailto:williamskrg@live.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fa fa-envelope"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/kraig-williams-b62789186"
                aria-label= "my profile on LinkedIn"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="https://github.com/kraigwilliams"
                aria-label= "my profile on github"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fab fa-github"></i>
              </a>
            </div>
          </footer>
        )
    }
}

export default Footer