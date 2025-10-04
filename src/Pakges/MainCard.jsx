import React from "react";
import { Link } from "react-router";
const MainCard = ({ data }) => {
  const { id, name, price, description, image } = data;
  return (
    <div className="card bg-base-100 w-full  shadow-sm">
      <figure>
        <img className="h-[250px] " src={`${image}`} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {name}
          <div className="badge badge-secondary">{price}</div>
        </h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <Link className="badge badge-outline" to={`/details/${id}`}>
            View More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainCard;
