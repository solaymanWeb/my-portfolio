import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import BannerFooter from '../BannerFooter/BannerFooter';
import Contact from '../Contact/Contact';
import Header from '../Header/Header';
import Projects from '../Projects/Projects';
import './Home.css'



const Home = () => {
    return (
        <div>
            <div className='header-and-banner'>
            <Header></Header>
            <Banner></Banner>
            </div>
            <BannerFooter></BannerFooter>
            <About></About>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
};

export default Home;