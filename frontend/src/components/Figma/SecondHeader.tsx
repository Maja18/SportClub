import {SecondaryHeader} from "../../styled-components/secondaryHeader/SecondaryHeader.styled";
import toolsButton from '../../assets/toolsButton.png'
import {ToolsButton} from "../../styled-components/secondaryHeader/ToolsButton.style";
import {DropDownDiv} from "../../styled-components/secondaryHeader/DropDownDiv.styled";
import {DropDown} from "../../styled-components/secondaryHeader/DropDown.styled";
import HeaderUsers from "./HeaderUsers";


const SecondHeader = (props: any) => {
    return(
        <SecondaryHeader>
            {/* Dropdown */}
            <DropDownDiv>
                <DropDown type="button">
                    SALES & MARKETING
                    <span></span>
                </DropDown>  
            </DropDownDiv>
            {/* Users */}
            <HeaderUsers></HeaderUsers>
            {/* Tools button */}
            <ToolsButton>
                <img src={toolsButton} alt='button'></img>
            </ToolsButton>
                    
        </SecondaryHeader>
    );
}

export default SecondHeader;