import React from "react";
import {
  FaCaravan,
  FaCcMastercard,
  FaStreetView,
  FaThumbsUp,
} from "react-icons/fa";
import choose from "../../../assets/choose.jpg";

const ChooseUs = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col items-center text-center mb-14">
        <h2 className="text-5xl font-bold mb-5 text-gray-700">WHY CHOOSE US</h2>
        <p className="max-w-3xl text-gray-500">
          An executive chef is the top chef in a restaurant or culinary
          establishment, responsible for overseeing the entire kitchen operation
          and creating the menu.
        </p>
      </div>
      <div className="grid grid-cols-3 items-center">
        <div>
          <div className="flex items-center gap-5 flex-col justify-center mb-5 border-b-2 px-10 py-10">
            <FaThumbsUp className="text-5xl text-blue-400" />
            <h2 className="text-3xl font-semibold">QUALITY PRODUCTS</h2>
            <p className="text-center text-lg">
              We guarantee the quality of all the recipe we provide as they are
              baked using the freshest ingredients.
            </p>
          </div>
          <div className="flex items-center gap-5 flex-col justify-center mb-5  px-10 py-10">
            <FaCaravan className="text-5xl text-blue-400" />
            <h2 className="text-3xl font-semibold">FREE DELIVERY</h2>
            <p className="text-center text-lg">
              All orders submitted by our US clients are delivered for free
              throughout the United States.
            </p>
          </div>
        </div>
        <div>
            <img src={choose} alt="" />
        </div>
        <div>
          <div className="flex items-center gap-5 flex-col justify-center mb-5 border-b-2 px-10 py-10">
            <FaStreetView className="text-5xl text-blue-400" />
            <h2 className="text-3xl font-semibold">CATERING SERVICE</h2>
            <p className="text-center text-lg">
              Our bakery also provides an outstanding catering service for
              events and special occasions.
            </p>
          </div>
          <div className="flex items-center gap-5 flex-col justify-center mb-5 px-10 py-10">
            <FaCcMastercard className="text-5xl text-blue-400" />
            <h2 className="text-3xl font-semibold">ONLINE PAYMENT</h2>
            <p className="text-center text-lg">
              We accept all kinds of online payments including Visa, MasterCard,
              American Express credit cards.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
