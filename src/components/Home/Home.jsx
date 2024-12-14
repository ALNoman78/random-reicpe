import React from 'react'
import PropTypes from 'prop-types'
import Navbar from '../Header/Navbar'
import { Outlet, useNavigation } from 'react-router'
import { ColorRing } from 'react-loader-spinner'

const Home = () => {
    const navigation = useNavigation()

    return (
        <div>
            <Navbar></Navbar>
            <div className='flex items-center justify-center'>
                {
                    navigation.state === 'loading' ? <ColorRing
                        visible={true}
                        height="80"
                        width="80"
                        ariaLabel="color-ring-loading"
                        wrapperStyle={{}}
                        wrapperClass="color-ring-wrapper"
                        colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
                    ></ColorRing> : <Outlet></Outlet>
                }
            </div>
        </div>
    )
}

Home.propTypes = {}

export default Home