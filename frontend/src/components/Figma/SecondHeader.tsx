import UsersDiv from "../../styled-components/secondaryHeader/UsersDiv.styled";
import SecondaryHeader from "../../styled-components/secondaryHeader/SecondaryHeader.styled";
import UsersInputDiv from "../../styled-components/secondaryHeader/UsersInputDiv.styled";
import UsersPhotoDiv from "../../styled-components/secondaryHeader/UsersPhotoDiv.styled";
import user1 from '../../assets/user1.png'
import user2 from '../../assets/user2.png'
import user3 from '../../assets/user3.png'
import user4 from '../../assets/user4.png'
import users from '../../assets/users.png'
import toolsButton from '../../assets/toolsButton.png'
import UsersNumberImage from "../../styled-components/secondaryHeader/UsersNumberImage.styled";
import ToolsButton from "../../styled-components/secondaryHeader/ToolsButton.style";
import DropDownDiv from "../../styled-components/secondaryHeader/DropDownDiv.styled";
import DropDown from "../../styled-components/secondaryHeader/DropDown.styled";


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
            <UsersDiv>
                <UsersInputDiv> {/* ne treba? */}
                    <UsersPhotoDiv>
                        <img src={user1} alt='user'></img>
                        <img src={user2} alt='user'></img>
                        <img src={user3} alt='user'></img>
                        <img src={user4} alt='user'></img>
                        <UsersNumberImage>
                            <img src={users} alt='users'></img>
                        </UsersNumberImage>
                    </UsersPhotoDiv> 
                </UsersInputDiv>
            </UsersDiv>

            {/* Tools button */}
            <ToolsButton>
                <img src={toolsButton} alt='button'></img>
            </ToolsButton>
                    
        </SecondaryHeader>
    );
}

export default SecondHeader;