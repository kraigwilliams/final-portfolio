import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Home.css';



class Home extends Component{
    render(){
        document.title= 'Introduction - Kraig Williams Portfolio';
        return(
          <section aria-label='Kraig Williams Developer Portfolio' className='home'>
            <div className="home-hero">
            <h1>Hi, I'm Kraig</h1>
            <p>I'm a FullStack Javascript Developer</p>
            <p>Welcome to my Portfolio.</p>
                <p> Here you will find my <Link to= '/projects'>best projects</Link> and my <Link to='/about-me'>about me</Link> section where you can get to know me better.</p>
            <p> If you would like to contact me about becoming a part of your talented development team I would love to speak with you. You may contact me directly through the links below. </p>
            </div>
            </section>
        )
    }
}

export default Home