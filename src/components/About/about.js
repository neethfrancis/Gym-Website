import React from 'react';
import './about.css';
import gym from '../../assets/t-image5.webp';
import Statistics from '../Statistics/statistics';
const Skills = () => {
    return (
        <section id="skills">
            <h2 className="skillTitle">WHO ARE WE</h2>
            <div className="column-about">
                <div className="gymImage">
                    <img src={gym} alt='hg' />
                </div>
                <div className="desc-container">
                    <p>
                        At TheGym we believe Crossfitters come in all shapes and sizes, we are all on a journey towards our own personal best health and fitness levels. A journey that makes us better as athletes, friends and people.
                        <br />Our facility is unlike any other gym you've been to before. We pride ourselves not only in providing world class CrossFit training, but we also believe in creating a motivating and dynamic environment. We are the community dedicated to your human evolution, one workout at a time.
                        <br /> Come in for a free trial class! Lose some body fat, gain some friends, and get fit for life!
                    </p>
                </div>
            </div>
            <Statistics />
        </section>
    );
}

export default Skills;
