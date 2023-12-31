import { Player } from "@lottiefiles/react-lottie-player";
import React, { lazy, Suspense } from "react";
import { useLoaderData } from "react-router-dom";
import LazyLoading from "../../components/LazyLoading/LazyLoading";
import Offer from "./Offer/Offer";
import ChooseUs from "./ChooseUs/ChooseUs";
const ChefInfo = lazy(() => import("./ChefInfo/ChefInfo"));

const Home = () => {
  const chefInfo = useLoaderData();
  return (
    <div>
      <div className="bg-red-50">
        <div className="max-w-7xl px-10 py-5 md:px-0 md:py-0 mx-auto grid grid-cols-1 md:grid-cols-2 items-center">
          <div>
            <p className="font-semibold">
              <span className="text-4xl text-yellow-500">W</span>elcome
            </p>
            <h2 className="font-bold text-4xl md:text-7xl text-blue-400">SPICE ROUTE</h2>
            <h2 className="font-bold text-3xl my-4 max-w-xl">
              Discover Delicious Chef-Approved Recipes
            </h2>
            <p className="font-medium text-md md:text-2xl text-gray-500 mb-8 tracking-widest max-w-md">
              A chef is a professional cook and tradesman who is proficient in
              all aspects of food preparation
            </p>
            <a
              href="#chefs"
              className="bg-white text-blue-500 font-medium py-3 px-6 rounded-lg shadow-md hover:shadow-lg"
            >
              See Our Chefs
            </a>
          </div>
          <div>
            <Player src="banner.json" className="player" loop autoplay />
          </div>
        </div>
      </div>

      <div className="mt-20">
        <div className="flex flex-col items-center text-center mb-14 px-10 md:px-0">
          <h2 className="md:text-5xl text-2xl font-bold mb-5 text-gray-700">OUR CHEFS</h2>
          <p className="max-w-3xl text-gray-500">
            An executive chef is the top chef in a restaurant or culinary
            establishment, responsible for overseeing the entire kitchen
            operation and creating the menu.
          </p>
        </div>
        <div id="chefs" className="max-w-7xl grid grid-cols-1 px-10 md:px-0 md:grid-cols-3  mx-auto gap-10">
          {chefInfo.map((chef) => (
            <Suspense key={chef.id} fallback={<LazyLoading />}>
              <ChefInfo chef={chef} />
            </Suspense>
          ))}
        </div>
      </div>

      <div className="mt-20">
        <Offer />
      </div>

      <div className="mb-20 mt-20">
        <ChooseUs />
      </div>

    </div>
  );
};

export default Home;
