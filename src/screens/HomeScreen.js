import React from 'react';

import Banner from '../components/Header/Banner';
import Foods from '../components/Foods Showcase/Foods';
import AboutUs from '../components/About/AboutUs';
import Footer from '../components/Footer/Footer';
import GetInTouch from '../components/GetInTouch/GetInTouch';

const HomeScreen = () => {
    return (
        <div>
            <Banner /> 
            <Foods />
            <AboutUs />
            <GetInTouch></GetInTouch>
            <Footer />
         </div>
    )
}

export default HomeScreen
