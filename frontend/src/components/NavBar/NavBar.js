import React, {useState, useEffect, useContext} from 'react';
import {Navbar,NavItem,NavLink,Nav} from 'reactstrap';
import { Route, Routes } from 'react-router-dom';
import Register from '../Register/Register'
import Login from '../LogIn/Login';
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
import Player from '../AddPlayer/Player';
import EditPlayer from '../EditPlayer/EditPlayer';
import { AuthContext } from '../../context/auth-context';
import ChangePassword from '../EditProfile/ChangePassword';
import { NavLink as Link } from 'react-router-dom';
import './NavBar.css'

const NavBar = () => {
    const authContext = useContext(AuthContext);
    const [logout] = useState(true)

    useEffect(() => {
        authContext.auth()
    },[])

    const logOut = () => {
        localStorage.removeItem('token');
    };
    
    return (
        <div className='Nav'>
            <Navbar color="dark"  expand="md"> 
                <Nav className={` ${!authContext.isAuth || (authContext.isAuth && logout) ? "container-fluid" : ""}`} navbar>
                    <NavItem>
                    <NavLink tag={Link} activeClassName="active" to="/">
                        Home
                    </NavLink>
                    </NavItem>
                    {authContext.isAuth &&  
                    <NavItem >
                        <NavLink tag={Link} activeClassName="active" to="/profile">Profile</NavLink>
                    </NavItem>}
                    {authContext.isAuth &&
                    <NavItem>
                        <NavLink tag={Link} activeClassName="active" to="/sportClubs">SportClubs</NavLink>
                    </NavItem>}
                    {authContext.isAuth && authContext.role==='EDITOR' &&
                    <NavItem>
                        <NavLink tag={Link} activeClassName="active" to="/players">Players</NavLink>
                    </NavItem>}
                    {!authContext.isAuth &&
                    <NavItem className="ml-auto">
                        <NavLink tag={Link} activeClassName="active" to="/register">Register</NavLink>
                    </NavItem>}
                    {!authContext.isAuth &&
                    <NavItem >
                        <NavLink tag={Link} activeClassName="active" to="/login">Login</NavLink>
                    </NavItem>}
                    {authContext.isAuth &&
                    <NavItem className="ml-auto">
                        <NavLink tag={Link} to="/" onClick={logOut}>Logout</NavLink>
                    </NavItem>}
                </Nav>
            </Navbar>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path="/register" element={<Register/>} ></Route>
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/profile" element={<Profile/>}></Route>
                <Route path='/editProfile' element={<EditProfile/>}></Route>
                <Route path='/changePassword' element={<ChangePassword/>}></Route>
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
                ? <Player/>:<div>You are not allowed to see this page!</div>}></Route>
                <Route path='/editPlayer/:id' element={authContext.isAuth && authContext.role==='EDITOR'
                ? <EditPlayer/>:<div>You are not allowed to see this page!</div>}></Route>
            </Routes>
        </div>
    );

};

export default NavBar;