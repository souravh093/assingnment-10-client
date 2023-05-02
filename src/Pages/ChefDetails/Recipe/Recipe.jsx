import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { FaStar } from "react-icons/fa";

const Recipe = ({ recipe }) => {
  const [disable, setDisable] = useState(false);
  const { title, ingredients, cookingMethod, rating } = recipe;

  const showToast = () => {
    setDisable(true);
    toast.success(`${title} is your favorite recipe`);
  };
  return (
    <div className="bg-white hover:shadow-md w-full rounded-lg border-2 border-blue-400 p-16">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div className="mb-4">
        <h3 className="text-lg font-bold mb-2">Ingredients:</h3>
        <ul>
          {ingredients.map((ingredient, index) => (
            <li className="text-blue-400" key={index}>
              {ingredient}
            </li>
          ))}
        </ul>
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-bold mb-2">Cooking Method:</h3>
        <p className="text-blue-400">{cookingMethod}</p>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <FaStar rating={rating} />
          <span className="text-gray-700 ml-2">{rating} stars</span>
        </div>
        <button
          onClick={showToast}
          className={`bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded ${disable && 'opacity-50 cursor-not-allowed'}`}
        >
          Favorite
        </button>
      </div>
    </div>
  );
};

export default Recipe;
