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







export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser]= useState({})
  const [cart,setCart]=useState({})
  return (
    <div className="">
       <UserContext.Provider value={{ loggedInUser, setLoggedInUser,cart,setCart }}>
       <Router>
     
        <Switch>
          <Route path="/admin">
            <Admin />
           </Route>
           <Route path="/newsDetails">
            <NewsDetails />
           </Route>
           <Route path='/national'>
             <National />
             </Route>
             <Route path='/international'>
             <International />
             </Route>
             <Route path='/sports'>
             <Sports />
             </Route>
           <Route path="/admin">
            <Admin />
           </Route> 
           <Route path="/panel/:adminPanel">
            <Admin />
           </Route> 
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
