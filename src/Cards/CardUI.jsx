import React from 'react'
import './card-style.css';

const Card = props =>{
return(
  <div className="card text-center">
      <div className="overflow">
          <img src={props.imgsrc}alt="j " className="card-img-top" width="50" height="50"/>
      </div>
      <div className="card-body text-dark">
          <h2 className="card-title">{props.title}</h2>
          <p className="card-text-text-secondary">{props.body} </p>
          <h4 className="price-of-crypto">Worth in USD: {props.price}</h4>
          <a href="#" className="btn btn-outline-success">Read More</a>
      </div>
  </div>  
);

}
export default Card;