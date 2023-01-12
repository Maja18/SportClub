import {HeaderDiv} from "../../styled-components/header/HeaderDiv";
import userProfile from '../../assets/userProfile.png'
import {UserProfilePhoto} from "../../styled-components/header/UserProfilePhoto.styled";
import {HeaderDropdownDiv} from "../../styled-components/header/HeaderDropdownDiv.styled";
import workGroupIcon from '../../assets/workGroupIcon.png'
import {HeaderDropdown} from "../../styled-components/header/HeaderDropdown.styled";
import SearchBar from "./SearchBar";
import { useRef, useState } from "react";
import UserProfileInformation from "./UserProfileInformation";
import Menu from "./Menu";
import { Information } from "../../styled-components/header/Information.styled";
import { DroDownDescription } from "../../styled-components/header/DropDownDescription.styled";

const Header = (props: any) => {
    const [showProfileInfo, setShowProfileInfo] = useState(false);
    const info = useRef<any>(null)
    const [showMenu, setShowMenu] = useState(false);
    const dropdown = useRef<any>(null)

    const closeInfo = (e: any)=>{
        if(info.current && showProfileInfo && !info.current.contains(e.target)){
            setShowProfileInfo(false)
        }
    }

    const closeDropdown = (e: any)=>{
        if(dropdown.current && showMenu && !dropdown.current.contains(e.target)){
          setShowMenu(false)
        }
    }

    document.addEventListener('mousedown', closeInfo)
    document.addEventListener('mousedown', closeDropdown)

    return(
        <HeaderDiv> {/* flex container */}
            {/* Dropdown */}
            <HeaderDropdownDiv ref={dropdown}> {/* flex item, flex container */}
                <img src={workGroupIcon} alt='Search'></img>
                <HeaderDropdown type="button" onClick={() => setShowMenu(!showMenu)}> 
                <Information>
                    Creative direction
                    <DroDownDescription>A24 Films</DroDownDescription>
                </Information>
                <span></span>
                </HeaderDropdown>
            </HeaderDropdownDiv>
            {/* Header menu */}
            {showMenu ? <Menu></Menu> : null}
            {/* Search bar*/}
            <SearchBar></SearchBar> {/* flex item */}
            {/* Profile photo */}
            <UserProfilePhoto ref={info} onClick={() => setShowProfileInfo(!showProfileInfo)}> {/* flex item */}
                <img src={userProfile} alt='profile'></img>
            </UserProfilePhoto> 
            {showProfileInfo ? <UserProfileInformation></UserProfileInformation> : null}  
        </HeaderDiv>
    );
}

export default Header;