import React from "react";
import { FaThumbsUp } from "react-icons/fa";

const ChefInfo = ({ chef }) => {
  const { id, chefName, chefPicture, yearsOfExperience, numRecipes, likes } =
    chef;
  return (
    <div className="card w-full shadow-md border">
      <figure className="bg-red-50">
        <img
          className="object-contain w-full h-80"
          src={chefPicture}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{chefName}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
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
        <button className="btn bg-blue-400 border-none hover:bg-blue-500">View Recipes</button>
      </div>
    </div>
  );
};

export default ChefInfo;
