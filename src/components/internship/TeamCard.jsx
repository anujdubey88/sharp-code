import React from "react";
import { team } from "../../dummydata";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import './team.css';

const TeamCard = () => {
  return (
    <>
      {team.map((val) => (
        <div className="flip-box" key={val.id}>
          <div className='items shadow flip-box-inner'>
            <div className='img flip-box-front'>
              <img src={val.cover} alt='' />
            </div>
            <div className='details flip-box-back'>
              <h2>{val.name}</h2>
              <p>{val.details}</p>
            </div>
            <div className="buttonprice">
              <span className="price">{val.price}</span>
              <Link to={`/registration?courseName=${val.name}`}>
                <button><li>Apply</li></button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default TeamCard;
