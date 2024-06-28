import React from 'react';
import './intro.css';
import { Link } from 'react-scroll';

const Intro = () => (
  <section id="intro">
    <div className="content">
      <div className="introText">
        <h1>THE ONLY
          IMPOSIBLE
          JOURNEY IS
          THE ONE YOU
          NEVER BEGIN.</h1><br />
        <div className='figures'>
          <div>
            <spam>+140</spam>
            <spam>expert coaches</spam>
          </div>
          <div>
            <spam>+978</spam>
            <spam>members joined</spam>
          </div>
          <div>
            <spam>+50</spam>
            <spam>fitness program</spam></div>
        </div>
        <div className="btnGroup">
          <Link to="plans-container" spy={true} smooth={true} offset={-30} duration={500}><button className="btn">BEGIN YOUR JOURNEY {`>>`} </button></Link>

        </div>
      </div>

    </div>


  </section>
);

export default Intro;