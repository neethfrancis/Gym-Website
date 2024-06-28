import React from 'react';
import "./members.css";
import { plansData } from '../../data/plansData';
import whiteTick from '../../assets/whiteTick.png';
import { Link } from 'react-scroll';

const Members = () => {
  return (
    <div className="plans-container">
        <div className="worksTitle"> 
            MEMBERSHIP
        </div>

        <div className="plans">
            {plansData.map((plan, i) => (
                <div className="plan" key={i}>
                    {plan.icon}
                    <span>{plan.name}</span>
                    <span>$ {plan.price}</span>
                    <div className="features">
                        {plan.features.map((feature, i) => (
                            <div className="feature" key={i}>
                                <img src={whiteTick} alt='tick'></img>
                                <span>{feature}</span>
                            </div>
                        ))}
                    </div>
                    <div>
                        <span className='spam-amall'>See More Benefits</span>
                    </div>
                    <Link to="contact-container" spy={true} smooth={true} offset={-100} duration={500}><button className="btn">Join Now</button></Link>

                </div>
            ))}
        </div>
    </div>
  );
};

export default Members;
