import { Player } from "@lottiefiles/react-lottie-player";
import React, { lazy, Suspense } from "react";
import { Link, useLoaderData } from "react-router-dom";
import LazyLoading from "../../components/LazyLoading/LazyLoading";
const ChefInfo = lazy(() => import("./ChefInfo/ChefInfo"));

const Home = () => {
  const chefInfo = useLoaderData();
  return (
    <div>
      <div className="bg-red-50">
        <div className="max-w-7xl mx-auto grid grid-cols-2 items-center">
          <div>
            <p className="font-semibold"><span className="text-4xl text-yellow-500">W</span>elcome</p>
            <h2 className="font-bold text-7xl text-blue-400">SPICE ROUTE</h2>
            <h2 className="font-bold text-3xl my-4 max-w-xl">
              Discover Delicious Chef-Approved Recipes
            </h2>
            <p className="font-medium text-2xl text-gray-500 mb-8 tracking-widest max-w-md">
            A chef is a professional cook and tradesman who is proficient in all aspects of food preparation
            </p>
            <a href="#chefs" className="bg-white text-blue-500 font-medium py-3 px-6 rounded-lg shadow-md hover:shadow-lg">
              See Our Chefs
            </a>
          </div>
          <div>
            <Player src="banner.json" className="player" loop autoplay />
          </div>
        </div>
      </div>

      <div className="mt-20">
        <div className="flex flex-col items-center text-center mb-14">
          <h2 className="text-5xl font-bold mb-5 text-gray-700">OUR CHEFS</h2>
          <p className="max-w-3xl text-gray-500">
            An executive chef is the top chef in a restaurant or culinary
            establishment, responsible for overseeing the entire kitchen
            operation and creating the menu.
          </p>
        </div>
        <div id="chefs" className="max-w-7xl grid grid-cols-3 mx-auto gap-10">
          {chefInfo.map((chef) => (
            <Suspense  key={chef.id}  fallback={<LazyLoading />}>
              <ChefInfo chef={chef} />
            </Suspense>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
