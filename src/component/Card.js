import React from 'react';
import { imgdata } from './imgdata';

function Card(props) {
  return ( 
    <div className="card col-lg-3 col-sm-4 m-2 shadow-lg d-inline-block">
        <img className="card-img-top" src={imgdata[props.items.id]} alt="banner none"/>
        <div className='card-img-overlay h-25 text-end '>
          <span className="badge bg-primary">
            {props.items.available}
          </span>
        </div>
        <div className="card-body">
          <h4 className="card-title">
            {props.items.name}
          </h4>
          <p className="card-text">Price -
            <span className='text-decoration-line-through text-muted'>
              {`${props.items.price}`}
            </span><br/>
            {`Discount Price -${props.items.discount}`}
          </p>
          <a href="#blank" onClick={props.handleCart} className="btn btn-outline-dark">
            {props.items.added?'Add to Cart':'Remove from cart'}
          </a>
        </div>
    </div> );
}

export default Card;