import React from 'react';
import AppoinmentBanner from './AppoinmentBanner/AppoinmentBanner';
import Banner from './Banner/Banner';
import Services from './Services/Services';
import Dental from './Dental/Dental'

const Home = () => {
    return (
        <div>
            <Banner />
            <Services />
            <Dental />
            <AppoinmentBanner />
        </div>
    );
};

export default Home;