import {HeaderDiv} from "../../styled-components/header/HeaderDiv";
import userProfile from '../../assets/userProfile.png'
import {UserProfilePhoto} from "../../styled-components/header/UserProfilePhoto.styled";
import {HeaderDropdownDiv} from "../../styled-components/header/HeaderDropdownDiv.styled";
import workGroupIcon from '../../assets/workGroupIcon.png'
import {HeaderDropdown} from "../../styled-components/header/HeaderDropdown.styled";
import SearchBar from "./SearchBar";
import { UserProfileInfo } from "../../styled-components/header/UserProfileInfo.styled";
import { useRef, useState } from "react";
import { UserInfo } from "../../styled-components/header/UserInfo.styled";
import { ProfileLabel } from "../../styled-components/header/ProfileLabel.styled";
import { MenuDevider } from "../../styled-components/header/MenuDivider.styled";
import { ProfileOptions } from "../../styled-components/header/ProfileOptions.styled";
import { OptionMenu } from "../../styled-components/header/Option.styled";
import { SecondMenuDevider } from "../../styled-components/header/SecondMenuDivider.styled";
import { LogOut } from "../../styled-components/header/LogOut.styled";
import log_out_icon from '../../assets/log_out_icon.png'
import UserProfileInformation from "./UserProfileInformation";

const Header = (props: any) => {
    const [showProfileInfo, setShowProfileInfo] = useState(false);
    const [showUserPhoto, setShowUserPhoto] = useState(true);
    const info = useRef<any>(null)

    const closeInfo = (e: any)=>{
        if(info.current && showProfileInfo && !info.current.contains(e.target)){
            setShowProfileInfo(false)
            setShowUserPhoto(true)
        }
    }

    document.addEventListener('mousedown', closeInfo)

    return(
        <HeaderDiv> {/* flex container */}
            {/* Dropdown */}
            <HeaderDropdownDiv> {/* flex item, flex container */}
                <img src={workGroupIcon} alt='Search'></img>
                <HeaderDropdown type="button"> {/* flex item */}
                    Creative direction A24 <br/>
                    A24 Films
                    <span></span>
                </HeaderDropdown>
            </HeaderDropdownDiv>
            {/* Search bar*/}
            <SearchBar></SearchBar> {/* flex item */}
            {/* Profile photo */}
                {showUserPhoto ? 
                <UserProfilePhoto onClick={() => {setShowProfileInfo(!showProfileInfo); setShowUserPhoto(false)}}> {/* flex item */}
                    <img src={userProfile} alt='profile'></img>
                </UserProfilePhoto> : null} 
            {showProfileInfo ? <UserProfileInformation></UserProfileInformation> : null}  
        </HeaderDiv>
    );
}

export default Header;