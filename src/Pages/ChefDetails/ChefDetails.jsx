import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ChefDetails = () => {
    const chefDetails = useLoaderData();
    const { id, chefName, chefPicture, yearsOfExperience, numRecipes, likes } = chefDetails;
    return (
        <div>
            <img src={chefPicture} alt="" />
        </div>
    );
};

export default ChefDetails;