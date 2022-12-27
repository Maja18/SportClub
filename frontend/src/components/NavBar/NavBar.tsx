import React, {useState, useEffect, useContext} from 'react';
import {Navbar,NavItem,Nav, Button} from 'reactstrap';
import { Route, Routes, useNavigate } from 'react-router-dom';
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
import ChangePassword from '../EditProfile/ChangePassword';
import Login from '../LogIn/Login';
import AddEditPlayer from '../Player/AddEditPlayer';
import {getLoggedUser} from '../../slices/userSlice'
import StyledLink from '../../styled-components/StyledLink';
import { useAppSelector } from '../../hooks/useAppSelector';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import Figma from '../Figma/Figma';

type Props = {
    isFigma: boolean
}

const NavBar = (props: Props) => {
    const [logout] = useState(true)
    const user = useAppSelector((state) => state.user.user)
    const dispatch = useAppDispatch()
    const [showFigma, setShowFigma] = useState(props.isFigma)
    const navigate = useNavigate();

    const logOut = () => {
        localStorage.removeItem('token');
    };

    useEffect( () => {
        dispatch(getLoggedUser())
    }, [])

    const changeToFigma = () => {
        setShowFigma(true)
        navigate('/figma')
    }
    
    return (
        <div>
            {showFigma ? <Figma></Figma> : 
            <Navbar color="dark"  expand="md"> 
            <Nav className={` ${!user || (user && logout) ? "container-fluid" : ""}`} navbar>
                <NavItem>
                <StyledLink to="/">
                    Home
                </StyledLink>
                </NavItem>
                {user &&  <NavItem >
                    <StyledLink to="/profile">Profile</StyledLink>
                </NavItem>}
                {user && <NavItem>
                    <StyledLink to="/sportClubs">SportClubs</StyledLink>
                </NavItem>}
                {user && user.role ==='ROLE_EDITOR' &&
                <NavItem>
                    <StyledLink to="/players">Players</StyledLink>
                </NavItem>}
                <NavItem>
                <Button onClick={changeToFigma}>
                    Figma
                </Button>
                </NavItem>
                <NavItem>
                </NavItem>
                {!user && <NavItem >
                    <StyledLink to="/register">Register</StyledLink>
                </NavItem>}
                {!user && <NavItem >
                    <StyledLink to="/login">Login</StyledLink>
                </NavItem>}
                {user && <NavItem className="ms-auto">
                    <StyledLink reloadDocument to="/login"  onClick={logOut}>Logout</StyledLink>
                </NavItem>}
            </Nav>
        </Navbar>
            }
            
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path="/register" element={<Register/>} ></Route>
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/profile" element={<Profile/>}></Route>
                <Route path='/profile/editProfile' element={<EditProfile/>}></Route>
                <Route path='/profile/changePassword' element={<ChangePassword/>}></Route>
                <Route path='/sportClubs' element={<SportClubs/>}></Route>
                <Route path='/sportClubs/addNewClub' element={user && user.role ==='ROLE_EDITOR'
                ? <SportClub/>:<div>You are not allowed to see this page!</div>}></Route>
                <Route path='/sportClubs/editClub/:id' element={user && user.role==='ROLE_EDITOR'
                ? <EditClub/>:<div>You are not allowed to see this page!</div>}></Route>
                <Route path='/players' element={user && user.role==='ROLE_EDITOR' 
                ? <Players/>:<div>You are not allowed to see this page!</div>}>
                </Route> 
                <Route path='/sportClubs/players/:id' element={<ClubPlayers/>}></Route>
                <Route path='/sportClubs/addNewPlayer/:id' element={user && user.role ==='ROLE_EDITOR'
                ? <ClubPlayer/>:<div>You are not allowed to see this page!</div>}></Route>
                <Route path='/sportClubs/playersInfo/:id' element={<PlayerInfo/>}></Route>
                <Route path='/players/playersInfo/:id' element={<PlayerInfo/>}></Route>
                <Route path='/players/addNewPlayer' element={user && user.role ==='ROLE_EDITOR'
                ? <AddEditPlayer/>:<div>You are not allowed to see this page!</div>}></Route>
                <Route path='/editPlayer/:id' element={user && user.role ==='ROLE_EDITOR'
                ? <AddEditPlayer/>:<div>You are not allowed to see this page!</div>}></Route>
                <Route path="/figma" element={<Figma/>} ></Route>
            </Routes>
        </div>
    );

};

export default NavBar;