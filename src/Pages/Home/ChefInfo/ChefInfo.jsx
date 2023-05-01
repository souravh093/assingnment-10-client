import React from "react";
import { FaThumbsUp } from "react-icons/fa";
import { Link } from "react-router-dom";

const ChefInfo = ({ chef }) => {
  const { id, chefName, chefPicture, yearsOfExperience, numRecipes, likes } =
    chef;

  return (
    <div className="card w-full hover:shadow-md border-2">
      <figure className="bg-red-50">
        <img
          className="object-contain w-full h-80"
          src={chefPicture}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{chefName}</h2>
        <p>Years of experience: {yearsOfExperience}</p>
        <div className="flex justify-between">
          <div>
            <h3>Number of recipes: {numRecipes}</h3>
          </div>
          <div className="flex gap-2 text-lg items-center">
            <p className="text-blue-400">{likes}</p>
            <FaThumbsUp className="text-blue-500" />
          </div>
        </div>
        <Link
          to={`/chef/${id}`}
          className="btn bg-blue-400 border-none hover:bg-blue-500"
        >
          View Recipes
        </Link>
      </div>
    </div>
  );
};

export default ChefInfo;
