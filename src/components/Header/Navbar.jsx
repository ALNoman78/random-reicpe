import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router'

const Navbar = () => {
    return (
        <div className='md:w-10/12 mx-auto w-full'>
            <div className="navbar bg-base-100 ">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">TheMeal DB</a>
                </div>
                <div className="flex-none gap-6">
                    <ul className="menu menu-horizontal px-1">
                        <li><NavLink to='/items'>Recipe</NavLink></li>
                        <li><NavLink to='/s'>Oreder</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

Navbar.propTypes = {}

export default Navbar