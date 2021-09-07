import './App.css';
import react, { createContext, useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import HomePage from './Page/HomePage';
import Admin from './Components/Admin/Admin';
import NewsDetails from './Components/NewsDetails/NewsDetails';
import National from './Components/CategoryNews/National/National';
import International from './Components/CategoryNews/International/International';
import Sports from './Components/CategoryNews/Sports/Sports';
import Login from './Components/Login/Login';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute'
import Header from './Components/Home/Header/Header';






export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser]= useState({})
  const [cart,setCart]=useState({})
  return (
    <div className="">
       <UserContext.Provider value={{ loggedInUser, setLoggedInUser,cart,setCart }}>
       <Router>
     
        <Switch>
         
           <PrivateRoute path="/newsDetails">
            <NewsDetails />
           </PrivateRoute>
           <Route path='/national'>
           <Header /><br/><br/>
             <National />
             </Route>
             <Route path='/international'>
               <Header /><br/><br/>
             <International />
             </Route>
             <Route path='/sports'>
             <Header /><br/><br/>
             <Sports />
             </Route>
           <PrivateRoute path="/admin">
            <Admin />
           </PrivateRoute> 
           <PrivateRoute path="/panel/:adminPanel">
            <Admin />
           </PrivateRoute> 
          <Route exact path="/">
          <HomePage />
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
        </Switch>
     
    </Router>
    </UserContext.Provider>
    </div>
  );
}

export default App;
