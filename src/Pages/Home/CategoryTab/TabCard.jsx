/* eslint-disable no-unused-vars */

import { Link } from "react-router-dom";

const TabCard = ({ toy }) => {
  const { _id, image, name, price, rating } = toy;
  return (
    <div className="card w-full bg-base-100 shadow-2xl border relative group overflow-hidden">
      <figure>
        <img
          className="border-b h-[320px] transition-transform duration-300 transform-gpu group-hover:scale-105"
          src={image}
          alt="Toys Car"
        />
      </figure>
      <div className="card-body">
        <h3 className="card-title">{name}</h3>
        <p>Price: {price}</p>
        <p>Rating: {rating}</p>
        <div className="card-actions mt-3">
          <Link to={`/viewDetails/${_id}`}>
            <button className="btn btn-block">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TabCard;
