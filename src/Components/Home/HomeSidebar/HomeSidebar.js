import React from 'react';
import { Link } from 'react-router-dom';

const HomeSidebar = () => {
    return (
        <div>
             <nav id="sidebar" style={{height:'300px'}} >
            <div className="sidebar-header">
            <h1
        className="d-inline-block align-top"
        style={{ fontSize: "1.8rem", fontWeight: "bold" }}> 
        
        Category<span className="dot">-News</span>
     </h1>
            </div>
            <ul className="list-unstyled components">
               
                <li>
                    <Link className="sidebar-text" to="/national">
                       
                         <span >National </span> 
                    </Link>
                </li>
                <li>
                    <Link className="sidebar-text" to="/international">
                        
                         <span >International</span> 
                    </Link>
                </li>
                <li>
                    <Link className="sidebar-text" to="/sports">
                       
                         <span >Sports</span> 
                    </Link>
                </li>
               
            </ul>
          
        </nav>
        </div>
    );
};

export default HomeSidebar;