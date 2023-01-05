import {SearchBarRectangleStyle} from "../../styled-components/header/SearchBarRectangleStyle";
import {SearchBarStyle} from "../../styled-components/header/SearchBarStyle";
import {SearchButtonDivStyle} from "../../styled-components/header/SearchButtonDivStyle";
import {SearchButtonStyle} from "../../styled-components/header/SearchButtonStyle";
import SearchInputDivStyle from "../../styled-components/SearchInputDivStyle";
import SearchInputStyle from "../../styled-components/SearchInputStyle";
import searchIcon from '../../assets/searchIcon.png'

const SearchBar = () => {
    return(
        <SearchBarStyle>
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
        </SearchBarStyle>
    )
}

export default SearchBar;