import React from 'react'
import PropTypes from 'prop-types'
import { useLoaderData, useNavigate } from 'react-router'

const Details = () => {
    const items = useLoaderData()
    const navigate = useNavigate()

    const handleBack = () => {
        navigate(-1)
    }
    const item = items.meals[0]

    // console.log(items.meals[0]);

    const { idMeal, strYoutube, strIngredient1, strMealThumb, strIngredient2, strIngredient3, strIngredient4, strIngredient5, strIngredient6, strIngredient7 } = item
    return (
        <div className='md:w-9/12 mx-auto w-full'>
            <img src={strMealThumb} alt="" />
            <h3 className='text-2xl font-bold mt-2'>Full Ingredients : </h3>
            <ul className='list-disc capitalize ml-8 my-4'>
                <li>{strIngredient1}</li>
                <li>{strIngredient2}</li>
                <li>{strIngredient3}</li>
                <li>{strIngredient4}</li>
                <li>{strIngredient5}</li>
                <li>{strIngredient6}</li>
                <li>{strIngredient7}</li>
            </ul>
            <div className='flex gap-8 items-center'>
                <a href={strYoutube} className='btn btn-outline btn-success my-5'>
                    <button>Full Recipe link </button>
                </a>
                <button className='btn btn-warning btn-outline px-12' onClick={handleBack}>Back</button>
            </div>
        </div>
    )
}

Details.propTypes = {}

export default Details