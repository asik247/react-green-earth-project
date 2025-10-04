import React from "react";
import { Link, useLoaderData } from "react-router";

const MainCardDetails = () => {
  const { plants } = useLoaderData();
  const { category, image, name, price, description } = plants;
  return (
    <div className="card bg-base-100 md:w-96 w-full mt-5 block mx-auto  shadow-sm">
      <figure>
        <img className=" h-[300px] mt-5" src={ `${image}`} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
         {name}
          <div className="badge badge-secondary">{price}</div>
        </h2>
        <p>
         {description}
        </p>
        <div className="card-actions justify-end">
         
          <Link className="badge badge-outline" to={'/'}>Previous</Link>
         
        </div>
      </div>
    </div>
  );
};

export default MainCardDetails;
