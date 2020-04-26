import React, { Component } from "react";
import "./Bio.css";

class Bio extends Component {
  render() {
    document.title = "About Me - Kraig Williams Portfolio";
    return (
      <section className="bio">
        <div className="about-me">
          <h2>About Me</h2>
          <p>
            My name is Kraig Williams and I am an island guy who grew up in the
            Caribbean and immigrated to the USA at 21. I first got interested
            development after watching the movie The Social Network about the
            start of Facebook. I loved how people were able to come together on
            an idea and build it to something that changes then world.
            Collaborating with other skilled developers is my favorite thing
            about development as it brings out the best in me. In m have a
            passion for options trading in the markets and started coding to
            learn to build trading algorithms for my personal trading strategy.
            Outside of programming I am a huge soccer fan. My favorite team is
            Manchester United in England.
          </p>
        </div>
      </section>
    );
  }
}

export default Bio;
