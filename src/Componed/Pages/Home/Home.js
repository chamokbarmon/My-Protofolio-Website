import React from 'react';
import AboutSelf from '../About us/AboutSelf';
import Banar from '../Banar/Banar';
import Card from '../Card/Card';
import ContactUS from '../ContactUs/ContactUS';
import Progressbar from '../Progressbar/Progressbar';

const Home = () => {
    return (
        <div>
            <Banar></Banar>
            <Progressbar></Progressbar>
            <Card></Card>
            <AboutSelf></AboutSelf>
            <ContactUS></ContactUS>
        </div>
    );
};

export default Home;