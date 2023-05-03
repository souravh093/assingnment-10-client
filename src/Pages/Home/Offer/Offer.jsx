import React from "react";
import banner2 from "../../../assets/banner2.jpg";

const Offer = () => {
  return (
    <div className="bg-cover" style={{ backgroundImage: `url(${banner2})` }}>
      <div className="max-w-7xl mx-auto py-20">
        <h2 className="mb-6 uppercase text-7xl font-bold text-gray-200 ">
          Spacial Recipe
        </h2>
        <h2 className="uppercase text-2xl flex gap-3 items-center text-gray-100">
          <span className="text-7xl shadow-xl border-2 border-red-900 text-white rounded-md bg-red-500  py-3 px-10 font-bold">
            -20%
          </span>
          off This recipe
        </h2>
        <p className="max-w-xl my-5 text-gray-100">
          A spatial chef recipe would likely involve the use of innovative
          culinary techniques and presentation styles to create visually
          stunning and delicious dishes. The chef may experiment with molecular
          gastronomy or use unusual ingredients to push the boundaries of
          traditional cooking. The presentation of the dish would also be a key
          focus, with a focus on creating a unique and memorable dining
          experience for the customer. Overall, a spatial chef recipe would be
          an exciting and cutting-edge culinary creation that combines artistry,
          science, and taste.
        </p>
        <button className="text-white bg-blue-400 text-2xl py-3 px-10 rounded-md">Get Recipe</button>
      </div>
    </div>
  );
};

export default Offer;
