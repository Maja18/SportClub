import React, {useState, useEffect, useContext} from 'react';
import {Navbar,NavItem,Nav} from 'reactstrap';
import { Route, Routes } from 'react-router-dom';
import Register from '../Register/Register'
import Home from '../Home/Home';
import Profile from '../Profile/Profile';
import EditProfile from '../EditProfile/EditProfile'
import SportClubs from '../SportClubs/SportClubs';
import SportClub from '../AddSportClub/SportClub';
import EditClub from '../EditSportClub/EditClub'
import Players from '../Players/Players';
import ClubPlayers from '../ClubPlayers/ClubPlayers';
import ClubPlayer from '../AddClubPlayer/ClubPlayer';
import PlayerInfo from '../PlayerInfo/PlayerInfo';
import { AuthContext } from '../../context/auth-context';
import ChangePassword from '../EditProfile/ChangePassword';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
import Login from '../LogIn/Login';
import AddEditPlayer from '../Player/AddEditPlayer';
import useAuthContextHook from '../../hooks/useAuthContext';


const StyledLink = styled(Link)`
    color: blue;
    display: flex;
    align-items: center;
    font-size: 18px;
    font-weight: 700;
    text-decoration: none;
    padding: 8px 6px;
    width: 100%;

    &.active {
        color: white;
    }

`;


const NavBar = () => {
    const authContext = useAuthContextHook();
    const [logout] = useState<boolean>(true)

    const logOut = () => {
        localStorage.removeItem('token');
    };
    
    return (
        <div>
            <Navbar color="dark"  expand="md"> 
                <Nav className={` ${!authContext.isAuth || (authContext.isAuth && logout) ? "container-fluid" : ""}`} navbar>
                    <NavItem>
                    <StyledLink to="/">
                        Home
                    </StyledLink>
                    </NavItem>
                    {authContext.isAuth &&  
                    <NavItem >
                        <StyledLink to="/profile">Profile</StyledLink>
                    </NavItem>}
                    {authContext.isAuth &&
                    <NavItem>
                        <StyledLink to="/sportClubs">SportClubs</StyledLink>
                    </NavItem>}
                    {authContext.isAuth && authContext.role==='EDITOR' &&
                    <NavItem>
                        <StyledLink to="/players">Players</StyledLink>
                    </NavItem>}
                    {!authContext.isAuth &&
                    <NavItem >
                        <StyledLink to="/register">Register</StyledLink>
                    </NavItem>}
                    {!authContext.isAuth &&
                    <NavItem >
                        <StyledLink to="/login">Login</StyledLink>
                    </NavItem>}
                    {authContext.isAuth &&
                    <NavItem className="ms-auto">
                        <StyledLink to="/"  onClick={logOut}>Logout</StyledLink>
                    </NavItem>}
                </Nav>
            </Navbar>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path="/register" element={<Register/>} ></Route>
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/profile" element={<Profile/>}></Route>
                <Route path='/profile/editProfile' element={<EditProfile/>}></Route>
                <Route path='/profile/changePassword' element={<ChangePassword/>}></Route>
                <Route path='/sportClubs' element={<SportClubs/>}></Route>
                <Route path='/sportClubs/addNewClub' element={authContext.isAuth && authContext.role==='EDITOR'
                ? <SportClub/>:<div>You are not allowed to see this page!</div>}></Route>
                <Route path='/sportClubs/editClub/:id' element={authContext.isAuth && authContext.role==='EDITOR'
                ? <EditClub/>:<div>You are not allowed to see this page!</div>}></Route>
                <Route path='/players' element={authContext.isAuth && authContext.role==='EDITOR' 
                ? <Players/>:<div>You are not allowed to see this page!</div>}>
                </Route> 
                <Route path='/sportClubs/players/:id' element={<ClubPlayers/>}></Route>
                <Route path='/sportClubs/addNewPlayer/:id' element={authContext.isAuth && authContext.role==='EDITOR'
                ? <ClubPlayer/>:<div>You are not allowed to see this page!</div>}></Route>
                <Route path='/sportClubs/playersInfo/:id' element={<PlayerInfo/>}></Route>
                <Route path='/players/playersInfo/:id' element={<PlayerInfo/>}></Route>
                <Route path='/players/addNewPlayer' element={authContext.isAuth && authContext.role==='EDITOR'
                ? <AddEditPlayer/>:<div>You are not allowed to see this page!</div>}></Route>
                <Route path='/editPlayer/:id' element={authContext.isAuth && authContext.role==='EDITOR'
                ? <AddEditPlayer/>:<div>You are not allowed to see this page!</div>}></Route>
            </Routes>
        </div>
    );

};

export default NavBar;