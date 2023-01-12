import {SecondaryHeader} from "../../styled-components/secondaryHeader/SecondaryHeader.styled";
import toolsButton from '../../assets/toolsButton.png'
import {ToolsButton} from "../../styled-components/secondaryHeader/ToolsButton.style";
import {DropDownDiv} from "../../styled-components/secondaryHeader/DropDownDiv.styled";
import {DropDown} from "../../styled-components/secondaryHeader/DropDown.styled";
import HeaderUsers from "./HeaderUsers";
import { DropDownMenu } from "../../styled-components/secondaryHeader/DropDownMenu.styled";
import { DropDownMenuItems } from "../../styled-components/secondaryHeader/DropDownMenuItems.styled";
import { ItemLabel } from "../../styled-components/secondaryHeader/ItemLabel.styled";
import { MenuItem } from "../../styled-components/secondaryHeader/MenuItem.styled";
import { useRef, useState } from "react";


const SecondHeader = (props: any) => {
    const [showItemsMenu, setShowItemsMenu] = useState(false)
    const dropdown = useRef<any>(null)

    const closeDropdown = (e: any)=>{
        if(dropdown.current && showItemsMenu && !dropdown.current.contains(e.target)){
          setShowItemsMenu(false)
        }
    }

    document.addEventListener('mousedown', closeDropdown)

    return(
        <SecondaryHeader>
            {/* Dropdown */}
            <DropDownDiv ref={dropdown}> {/* flex item */}
                <DropDown type="button" onClick={() => setShowItemsMenu(!showItemsMenu)}>
                    SALES & MARKETING
                    <span></span>
                </DropDown>  
            </DropDownDiv>
            {/* Drop down menu */}
            {showItemsMenu ? 
            <DropDownMenu>
            <DropDownMenuItems>
                <MenuItem>
                    <ItemLabel>
                        Design
                    </ItemLabel>    
                </MenuItem>
                <MenuItem>
                    <ItemLabel>
                        General
                    </ItemLabel>    
                </MenuItem>
                <MenuItem>
                    <ItemLabel>
                        Sales & marketing
                    </ItemLabel>    
                </MenuItem> 
            </DropDownMenuItems>
        </DropDownMenu> : null}  
            {/* Users */}
            <HeaderUsers></HeaderUsers>
            {/* Tools button */}
            <ToolsButton onClick={props.toggleToolbar}>
                <img src={toolsButton} alt='button'></img>
            </ToolsButton>           
        </SecondaryHeader>
    );
}

export default SecondHeader;