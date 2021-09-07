import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';

const News = (props) => {
    const {newsTitle, newsAuthor, newsCategory, newsImage, newsDescription} =props.allNews
    const {setCart}=useContext(UserContext);
    return (
        <div>
              <div   className="card service-card py-3 px-1 mb-5 border-0 " style={{ width: '18rem', textDecoration: 'none',marginTop:'50px' }}>
                        <img style={{ width: '280px', height:'350px' }} className="mx-auto"  alt='package-img' src={newsImage}  />
                        <div className="card-body">
                            <h5 className="card-title text-center">{newsTitle}</h5>
                            <h6 className="card-title text-center">{newsAuthor}</h6>
                            <h3 className="card-text text-center">{newsCategory}</h3>
                        </div>
                        <div className="text-center">
                        <Button 
                            className="button__style shadow-none" 
                            as={Link} 
                            to="/newsDetails" onClick={()=>setCart(props.allNews)} >
                                View More
                            </Button>
                        </div>
                    </div>
        </div>
    );
};

export default News;