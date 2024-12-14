import React from 'react';
import { useLoaderData } from 'react-router';
import Cooking from '../Cook-Items/Cooking';

const Recipe = () => {
    const items = useLoaderData()

    // console.log(items)
    // console.log(items.meals)
    const mealsItems = items.meals
    console.log(mealsItems)
    return (
        <div className='md:w-9/12 mx-auto w-full '>
            <h3 className='text-xl font-medium ml-4'>Cooking Items : {mealsItems.length}</h3>
            <div className=''>
                {
                    mealsItems.map((items, idx) => <Cooking key={idx} meal={items}></Cooking>)
                }
            </div>
        </div>
    );
};

export default Recipe;