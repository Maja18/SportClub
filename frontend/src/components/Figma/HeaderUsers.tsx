import {UsersDiv} from "../../styled-components/secondaryHeader/UsersDiv.styled";
import {UsersInputDiv} from "../../styled-components/secondaryHeader/UsersInputDiv.styled";
import {UsersNumberImage} from "../../styled-components/secondaryHeader/UsersNumberImage.styled";
import {UsersPhotoDiv} from "../../styled-components/secondaryHeader/UsersPhotoDiv.styled";
import user1 from '../../assets/user1.png'
import user2 from '../../assets/user2.png'
import user3 from '../../assets/user3.png'
import user4 from '../../assets/user4.png'
import users from '../../assets/users.png'

const HeaderUsers = () => {
    return(
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
    )
}

export default HeaderUsers;