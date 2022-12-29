import HeaderDiv from "../../styled-components/header/HeaderDiv";
import userProfile from '../../assets/userProfile.png'
import UserProfilePhoto from "../../styled-components/header/UserProfilePhoto.styled";
import HeaderDropdownDiv from "../../styled-components/header/HeaderDropdownDiv.styled";
import workGroupIcon from '../../assets/workGroupIcon.png'
import HeaderDropdown from "../../styled-components/header/HeaderDropdown.styled";
import SearchBar from "./SearchBar";

const Header = (props: any) => {
    return(
        <HeaderDiv>
            {/* Dropdown */}
            <HeaderDropdownDiv>
                <img src={workGroupIcon} alt='Search'></img>
                <HeaderDropdown type="button">
                    Creative direction A24 <br/>
                    A24 Films
                    <span></span>
                </HeaderDropdown>
            </HeaderDropdownDiv>
            {/* Search bar*/}
            <SearchBar></SearchBar>
            {/* Profile photo */}
            <UserProfilePhoto>
                <img src={userProfile} alt='profile'></img>
            </UserProfilePhoto>

        </HeaderDiv>
    );
}

export default Header;