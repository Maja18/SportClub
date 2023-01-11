import { LogOut } from "../../styled-components/header/LogOut.styled";
import { MenuDevider } from "../../styled-components/header/MenuDivider.styled";
import { OptionMenu } from "../../styled-components/header/Option.styled";
import { ProfileLabel } from "../../styled-components/header/ProfileLabel.styled";
import { ProfileOptions } from "../../styled-components/header/ProfileOptions.styled";
import { SecondMenuDevider } from "../../styled-components/header/SecondMenuDivider.styled";
import { UserInfo } from "../../styled-components/header/UserInfo.styled";
import { UserProfileInfo } from "../../styled-components/header/UserProfileInfo.styled";
import log_out_icon from '../../assets/log_out_icon.png'
import userProfile from '../../assets/userProfile.png'
import { Description } from "../../styled-components/header/Description.styled";
import { Information } from "../../styled-components/header/Information.styled";
import { OptionLabel } from "../../styled-components/header/OptionLabel.styled";

const UserProfileInformation = () => {
    return(
        <UserProfileInfo>
            <UserInfo>
                <Information>
                    <ProfileLabel>
                        Samantha Tilbury
                    </ProfileLabel> 
                    <Description>
                        A24 Films
                    </Description> 
                </Information>
                <img src={userProfile} alt='profile'></img> 
            </UserInfo>
            <MenuDevider></MenuDevider>
            {/* Options */}
            <ProfileOptions>
                <OptionMenu>
                    <OptionLabel>
                        Change your online status
                    </OptionLabel>
                </OptionMenu>
                <OptionMenu>
                    <OptionLabel>
                        Edit my profile
                    </OptionLabel>
                </OptionMenu>
                <OptionMenu>
                    <OptionLabel>
                        Leave work group
                    </OptionLabel>
                </OptionMenu>     
            </ProfileOptions>
            <SecondMenuDevider></SecondMenuDevider>
            {/* logout */}
            <LogOut>
                <img src={log_out_icon} alt='signout'></img>
                <OptionLabel>
                    Sign out
                </OptionLabel> 
            </LogOut>
        </UserProfileInfo>
    )
}

export default UserProfileInformation;