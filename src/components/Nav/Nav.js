import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './Nav.css'
class Nav extends Component{
    render(){
        return(
          <nav>
              <span ><Link to ='/'>Home</Link></span>
              <ul>

<li><Link to ='/about-me'>About Me</Link></li>
<li><Link to ='/projects'>Projects</Link></li>
<li><a  href="mailto:williamskrg@live.com"><i class="fas fa-envelope"></i>

Contact Me</a></li>      </ul>
              </nav>
        )
    }
}

export default Nav