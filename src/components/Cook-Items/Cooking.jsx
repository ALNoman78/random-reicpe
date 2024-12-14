import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'

const Cooking = ({ meal }) => {
    const { strMeal, strMealThumb, strCategory, idMeal } = meal
    return (
        <div>
            <h3 className='text-xl font-bold ml-4'> Recipe Name : {strMeal}</h3>
            <p className='ml-4'>Food Category : {strCategory}</p>
            <div className='object-cover p-3 md:w-[400px] h-auto'>
                <img className='rounded-xl w-full ' src={strMealThumb} alt="" />
            </div>
            <Link to={`/items/${idMeal}`} className='ml-2'>
                <button className='btn btn-outline btn-info my-2'>More Details</button>
            </Link>

        </div>
    )
}

Cooking.propTypes = {
    meal: PropTypes.object.isRequired,
}

export default Cooking