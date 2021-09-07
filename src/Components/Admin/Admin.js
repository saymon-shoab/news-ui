import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
// import AddProduct from '../AddProduct/AddProduct';
// import EditProduct from '../EditProduct/EditProduct';
// import ManageProduct from '../ManageProduct/ManageProduct';
import AddNews from './../AddNews/AddNews'
import AddAdmin from './../AddAdmin/AddAdmin'
import Sidebar from '../Sidebar/Sidebar';
import AdminNavbar from './AdminNavbar';
import User from '../User/User';

const Admin = () => {
    const { adminPanel } = useParams();
    // const [editProduct, setEditProduct] = useState({});
    const [showSidebar, setShowSidebar] = useState(false);

    return (
        <>
            <div className="wrapper">
                <Sidebar show={showSidebar} />
                <div id="content">
                    <AdminNavbar setShowSidebar={setShowSidebar} show={showSidebar} />
                    {adminPanel === "addNews" ? <AddNews />
                        : adminPanel === "addAdmin" ? <AddAdmin /> : adminPanel === "user"? <User />: <User/>}
                            
                </div>
            </div>
        </>
    );
};

export default Admin;