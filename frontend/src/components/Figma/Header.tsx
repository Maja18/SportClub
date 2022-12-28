import RectangleStyle from "../../styled-components/header/Rectangle";
import SearchBarRectangleStyle from "../../styled-components/header/SearchBarRectangleStyle";
import SearchBarStyle from "../../styled-components/header/SearchBarStyle";
import SearchButtonDivStyle from "../../styled-components/header/SearchButtonDivStyle";
import SearchButtonStyle from "../../styled-components/header/SearchButtonStyle";
import SearchInputDivStyle from "../../styled-components/SearchInputDivStyle";
import SearchInputStyle from "../../styled-components/SearchInputStyle";
import searchIcon from '../../assets/searchIcon.png'
import userProfile from '../../assets/userProfile.png'
import UserProfilePhoto from "../../styled-components/header/UserProfilePhoto.styled";
import HeaderDropdownDiv from "../../styled-components/header/HeaderDropdownDiv.styled";
import workGroupIcon from '../../assets/workGroupIcon.png'
import HeaderDropdown from "../../styled-components/header/HeaderDropdown.styled";

const Header = (props: any) => {
    return(
        <RectangleStyle>
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
            <SearchBarStyle>
                <SearchBarRectangleStyle>
                    <SearchInputDivStyle>
                        <SearchInputStyle>
                            Search creative directions A24
                        </SearchInputStyle>    
                    </SearchInputDivStyle>
                    
                    {/* Search button*/}
                    <SearchButtonDivStyle>
                        <SearchButtonStyle>
                            <img src={searchIcon} alt='Search'></img>
                        </SearchButtonStyle>  
                    </SearchButtonDivStyle>

                </SearchBarRectangleStyle>
            </SearchBarStyle>
            {/* Profile photo */}
            <UserProfilePhoto>
                <img src={userProfile} alt='profile'></img>
            </UserProfilePhoto>

        </RectangleStyle>
    );
}

export default Header;