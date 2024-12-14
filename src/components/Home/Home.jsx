import React from 'react'
import PropTypes from 'prop-types'
import Navbar from '../Header/Navbar'
import { Outlet } from 'react-router'

const Home = props => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    )
}

Home.propTypes = {}

export default Home