import React, { useContext, useEffect, useState } from 'react';
import { AiOutlineFileAdd } from "react-icons/ai";
import { BiUser } from "react-icons/bi"
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';


const Sidebar = ({ show }) => {

    const {loggedInUser} =  useContext(UserContext);
    const [isAdmin,setIsAdmin]=useState(false);
  
    useEffect(()=>{
        fetch('http://localhost:5000/isAdmin',{
            method: 'POST',
            headers: {'content-type':'application/json'},
            body: JSON.stringify({email: loggedInUser.email})
        })
        .then(res => res.json())
        .then(data => setIsAdmin(data))
    },[])


    return (
        <nav id="sidebar" className={show ? "active" : ""}>
            <div className="sidebar-header">
            <h1
        className="d-inline-block align-top"
        style={{ fontSize: "1.8rem", fontWeight: "bold" }}> 
        
        news<span className="dot">.com</span>
     </h1>
            </div>
            <ul className="list-unstyled components">
            <li>
                    <Link className="sidebar-text" to="/panel/user">
                        <BiUser style={{ fontSize: "1.3rem" }} />
                         <span >user</span> 
                    </Link>
                </li>
              {isAdmin && <div>
                  
               <li>
                    <Link className="sidebar-text" to="/panel/addNews">
                        <AiOutlineFileAdd style={{ fontSize: "1.3rem" }} />
                         <span >Add News</span> 
                    </Link>
                </li>
                <li>
                    <Link className="sidebar-text" to="/panel/addAdmin">
                        <AiOutlineFileAdd style={{ fontSize: "1.3rem" }} />
                         <span >Add Admin</span> 
                    </Link>
                </li>
                </div>
                }
               
            </ul>
            <ul className="list-unstyled CTAs">
                <li>
                    <Link to="/" className="download">Back to Home</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Sidebar;