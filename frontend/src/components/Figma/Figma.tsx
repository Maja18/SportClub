
import RectangleStyle from '../../styled-components/Rectangle';
import RowStyle from '../../styled-components/RowStyle';
import SearchBarRectangleStyle from '../../styled-components/SearchBarRectangleStyle';
import SearchBarStyle from '../../styled-components/SearchBarStyle';
import SearchButtonDivStyle from '../../styled-components/SearchButtonDivStyle';
import SearchButtonStyle from '../../styled-components/SearchButtonStyle';
import SearchInputDivStyle from '../../styled-components/SearchInputDivStyle';
import SearchInputStyle from '../../styled-components/SearchInputStyle';
import searchIcon from '../../assets/searchIcon.png'

const Figma = () => {
    return(
        <div>
            <RowStyle>
                <RectangleStyle>
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
                </RectangleStyle>
            </RowStyle>
        </div>
    );
}

export default Figma;