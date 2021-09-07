import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { UserContext } from '../../App';
import Footer from '../Home/Footer/Footer';
import Header from '../Home/Header/Header';

const NewsDetails = () => {

    const {cart}=useContext(UserContext);

    return (
        <div>
            <Header></Header>
            <div>
            <Container className="pt-5 mt-5">
                <h1 className="text-center" style={{color:"crimson"}} >{cart.newsTitle}</h1>
                <h5>Author: {cart.newsAuthor}</h5>
                <h5>Category: {cart.newsCategory}</h5>
                <img className="text-center" style={{width:"100%",height:"auto"}} src={cart.newsImage} alt="" />
                <p className="pt-3" style={{color:"#212529", fontSize:"15px" }} >{cart.newsDescription}</p>
            </Container>
            <Footer />
        </div>
        </div>
    );
};

export default NewsDetails;