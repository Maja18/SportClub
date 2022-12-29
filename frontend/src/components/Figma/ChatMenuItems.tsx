import ChatMenuItem from "../../styled-components/mainMenuBar/chats/ChatMenuItem.styled";
import ChatMenuItemDiv from "../../styled-components/mainMenuBar/chats/ChatMenuItemDiv.styled";
import ChatMenuItemsDiv from "../../styled-components/mainMenuBar/chats/ChatMenuItemsDiv.styled";
import Item from "../../styled-components/mainMenuBar/chats/Item.styled";
import user1 from '../../assets/ana.png'
import ChatLabel from "../../styled-components/mainMenuBar/chats/ChatLabel.styled";
import user2 from '../../assets/bob.png'
import user3 from '../../assets/gema.png'
import user4 from '../../assets/harry.png'
import user5 from '../../assets/omega.png'

const ChatMenuItems = (props: any) => {
    return(
        <ChatMenuItemsDiv>
            <ChatMenuItemDiv> {/* jel treba oba? */}
                <ChatMenuItem>
                    <Item>
                        <img src={user1} alt='user'></img>
                        <ChatLabel>
                            Anna Derux
                        </ChatLabel>
                    </Item>
                </ChatMenuItem>
                <ChatMenuItem>
                    <Item>
                        <img src={user2} alt='user'></img>
                        <ChatLabel>
                            Bob Stanhope
                        </ChatLabel>
                    </Item>
                </ChatMenuItem>
                <ChatMenuItem>
                    <Item>
                        <img src={user3} alt='user'></img>
                        <ChatLabel>
                            Gemma Chambers
                        </ChatLabel>
                    </Item>
                </ChatMenuItem>
                <ChatMenuItem>
                    <Item>
                        <img src={user4} alt='user'></img>
                        <ChatLabel>
                            Harry Stilton
                        </ChatLabel>
                    </Item>
                </ChatMenuItem>
                <ChatMenuItem>
                    <Item>
                        <img src={user5} alt='user'></img>
                        <ChatLabel>
                            Omega Evans
                        </ChatLabel>
                    </Item>
                </ChatMenuItem>
            </ChatMenuItemDiv>
        </ChatMenuItemsDiv>
    );
}

export default ChatMenuItems;