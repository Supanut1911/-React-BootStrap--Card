import React from "react";
import image1 from '../assets/img1.png'

function Card(props) {
  return (
    <div className="card animate__animated animate__fadeInUp" >
        <div className="overflow">
            <img src={props.image} className="card-img-top"/>
        </div>

      <div className="card-body">
        <h4 className="card-title titleColor">{props.title}</h4>
        <p className="card-text detailColor">
            {props.description}
        </p>
        <a href={props.url} className="btn btn-outline-primary border - 0" target="_blank">Go to this website</a>

      </div>
    </div>
  );
};

export default Card;
