import React from 'react';
import Banar from './../Components/Home/Banar/Banar';
import HomeSidebar from './../Components/Home/HomeSidebar/HomeSidebar';
import Footer from './../Components/Home/Footer/Footer';
import Header from './../Components/Home/Header/Header'
import AllNews from './../Components/Home/AllNews/AllNews';
const HomePage = () => {
    return (
        <div>
            <Header></Header> <br/><br/><br/>
            <div style={{height:'400px'}} className="row">
                <div className="col-md-3">
                    <HomeSidebar />
                </div>
                <div className="col-md-9">
                <Banar />
                </div>
            </div>
             
             <AllNews />

            <Footer />
        </div>
    );
};

export default HomePage;