import React from 'react'
import './team.css';
import team1 from '../../assets/t-image2.jpg';
import team2 from '../../assets/t-image1.png';
import team3 from '../../assets/t-image3.jpg';
import team4 from '../../assets/t-image4.jpg';
import team5 from '../../assets/t-image6.jpg';
import team6 from '../../assets/t-image7.jpg';

function team() {
    return (
        <section id="works">
            <h2 className="worksTitle">MEET THE TEAM</h2>
            <div className='row'>
                <div className='column'>
                    <div className='container'>
                        <div className='card'>
                            <div className='front'>
                                <img className='img1'src={team1} alt=''></img>
                            </div>
                            <div className='back'>
                                <h2> John Patric </h2>
                                <h3>Founder & Owner</h3>
                            </div>
                        </div>
                    </div>

                    <div className='container'>
                        <div className='card'>
                            <div className='front'>
                            <img className='img1'src={team2} alt=''></img>
                            </div>
                            <div className='back'>
                                <h2>SIMONE WALTERS </h2>
                                <h3>Coach</h3>
                            </div>
                        </div>
                    </div>

                    <div className='container'>
                        <div className='card'>
                            <div className='front'>
                            <img className='img1'src={team3} alt=''></img>
                            </div>
                            <div className='back'>
                                <h2> TOM DOWNEY </h2>
                                <h3>Coach</h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='column'>
                    <div className='container'>
                        <div className='card'>
                            <div className='front'>
                            <img className='img1'src={team4} alt=''></img>
                            </div>
                            <div className='back'>
                                <h2> Lary Mathew </h2><br />
                                <h3>Coach</h3>
                            </div>
                        </div>
                    </div>

                    <div className='container'>
                        <div className='card'>
                            <div className='front'>
                            <img className='img1'src={team5} alt=''></img>
                            </div>
                            <div className='back'>
                                <h2> ELOISE BANKS </h2>
                                <h3>Coach</h3>
                            </div>
                        </div>
                    </div>

                    <div className='container'>
                        <div className='card'>
                            <div className='front'>
                            <img className='img1'src={team6} alt=''></img>
                            </div>
                            <div className='back'>
                                <h2> HENRY JENKINS </h2>
                                <h3>Coach</h3>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default team
