import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import News from '../News/News';

const AllNews = () => {

    const [allNews, setAllNews] =useState([])

    useEffect(()=>{
        axios.get('http://localhost:5000/news')
        .then(res=>{
            setAllNews(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    },[])
    
    return (
        <div>
        <h3 className='text-center mb-5 pt-3' style={{ fontWeight: '600' }}> International <span style={{ color: '#5DD233' }}>News</span></h3>
           
            <div className="container">
                <div className="text-center"></div>
                <Row md={3} lg={3} sm={12} xs={12}>    
                {
                    allNews.map((allNews)=><News allNews={allNews}/>)
                }
                </Row>
            </div>

    </div>
    );
};

export default AllNews;