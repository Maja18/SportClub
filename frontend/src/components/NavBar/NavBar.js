import React from 'react';
import {
    Navbar,
    NavItem,
    NavLink,
    Nav
} from 'reactstrap';
import { Route, Link, Routes } from 'react-router-dom';
import Register from '../Register/Register'
import Login from '../LogIn/Login';
import Home from '../Home/Home';
import Profile from '../Profile/Profile';
import EditProfile from '../EditProfile/EditProfile'
import SportClubs from '../SportClubs/SportClubs';
import SportClub from '../AddSportClub/SportClub';

const NavBar = () => {

    return (
        <div>
            <Navbar color="dark"  expand="md">
                <Nav className="mr-auto" navbar>
                    <NavItem>
                        <NavLink tag={Link} to="/">Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={Link} to="/profile">Profile</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={Link} to="/sportClubs">SportClubs</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={Link} to="/login">Login</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={Link} to="/register">Register</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
            <Routes>
                <Route path='/'  element={<Home/>}></Route>
                <Route path="/register" element={<Register/>} ></Route>
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/profile" element={<Profile/>}></Route>
                <Route path='/editProfile' element={<EditProfile/>}></Route>
                <Route path='/sportClubs' element={<SportClubs/>}></Route>
                <Route path='/addNewClub' element={<SportClub/>}></Route>
            </Routes>
        </div>
    );

};

export default NavBar;