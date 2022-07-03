import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Projects from '../Projects/Projects';
import './Home.css'



const Home = () => {
    return (
        <div className='all-component-wraper'>
            <div className='header-and-banner'>
            <Header></Header>
            <Banner></Banner>
            </div>
            <About></About>
            <Projects></Projects>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;