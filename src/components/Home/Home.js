import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Home extends Component{
    render(){
        document.title= 'Introduction - Kraig Williams Portfolio';
        return(
            <header className="App-header">
            <h1>Hi, I'm Kraig</h1>
            <p>I'm a FullStack Javascript Developer</p>
            <p>Here you will find my <Link to= '/projects'>best projects</Link> and an <Link to='/about-me'>about me</Link> section where you can get to know me better.</p>
            </header>
        )
    }
}

export default Home