import { MenuDiv } from "../../styled-components/header/Menu.styled";
import { MenuHeader } from "../../styled-components/header/MenuHeader.styled";
import workGroupIcon from '../../assets/workGroupIcon.png'
import { Information } from "../../styled-components/header/Information.styled";
import { MenuLabel } from "../../styled-components/header/MenuLabel.styled";
import { Description } from "../../styled-components/header/Description.styled";
import { MenuDevider } from "../../styled-components/header/MenuDivider.styled";
import { MenuOptions } from "../../styled-components/header/MenuOptions.styled";
import { OptionMenu } from "../../styled-components/header/Option.styled";
import { OptionLabel } from "../../styled-components/header/OptionLabel.styled";
import { SecondMenuDevider } from "../../styled-components/header/SecondMenuDivider.styled";
import { ChannelOptionMenu } from "../../styled-components/header/ChannelOptionMenu.styled";
import { ThirdMenuDevider } from "../../styled-components/header/ThirdMenuDevider.styled";
import log_out_icon from '../../assets/log_out_icon.png'
import { SignOut } from "../../styled-components/header/SignOut.styled";

const Menu = () => {
    return(
        <MenuDiv>
            <MenuHeader>
                <img src={workGroupIcon} alt='Search'></img>
                <Information>
                    <MenuLabel>
                        Creative direction A24
                    </MenuLabel>
                    <Description>
                        A24 Films
                    </Description>
                </Information>
            </MenuHeader>
            <MenuDevider></MenuDevider>
            {/* Menu options */}
            <MenuOptions>
                <OptionMenu>
                    <OptionLabel>
                        Manage work group
                    </OptionLabel>
                </OptionMenu>
                <OptionMenu>
                    <OptionLabel>
                        Switch work group
                    </OptionLabel>
                </OptionMenu>
                <OptionMenu>
                    <OptionLabel>
                        Add new work group
                    </OptionLabel>
                </OptionMenu>
                <OptionMenu>
                    <OptionLabel>
                        Preferences
                    </OptionLabel>
                </OptionMenu>
            </MenuOptions>
            <SecondMenuDevider></SecondMenuDevider>
            <ChannelOptionMenu>
                <OptionLabel>
                    Change chanel
                </OptionLabel>
            </ChannelOptionMenu>
            <ThirdMenuDevider></ThirdMenuDevider>
            {/* logout */}
            <SignOut>
                <img src={log_out_icon} alt='signout'></img>
                <OptionLabel>
                    Sign out
                </OptionLabel> 
            </SignOut>
        </MenuDiv>
    )
}

export default Menu;