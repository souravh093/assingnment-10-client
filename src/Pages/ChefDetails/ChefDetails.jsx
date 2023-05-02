import React from "react";
import { FaThumbsUp } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import bannerDetails from "../../assets/bannerDetails.jpg";

const ChefDetails = () => {
  const chefDetails = useLoaderData();
  const {
    id,
    chefName,
    chefPicture,
    yearsOfExperience,
    numRecipes,
    likes,
    shortDescription,
  } = chefDetails;
  return (
    <div>
      <div
        className="bg-cover"
        style={{ backgroundImage: `url(${bannerDetails})` }}
      >
        <div className="grid grid-cols-3 max-w-7xl mx-auto items-center pt-10">
          <div className="col-span-2 flex flex-col gap-5">
            <h2 className="text-6xl font-bold text-blue-400">{chefName}</h2>
            <p className="text-xl text-gray-200">{shortDescription}</p>
            <p className="text-2xl text-gray-200">
              Years of experience: {yearsOfExperience}
            </p>
            <div className="flex gap-16 text-gray-300">
              <div className="text-2xl">Number of recipes:{numRecipes}</div>
              <div className="flex gap-2 text-2xl">
                {likes} <FaThumbsUp className="text-blue-400" />
              </div>
            </div>
            <button className="bg-blue-500 w-44 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              View Recipe
            </button>
          </div>
          <div className="col-span-1">
            <figure>
              <img
                className="object-contain w-full h-[500px]"
                src={chefPicture}
                alt="Shoes"
              />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefDetails;
