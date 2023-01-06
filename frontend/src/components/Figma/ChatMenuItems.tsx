import {ChatMenuItem} from "../../styled-components/mainMenuBar/chats/ChatMenuItem.styled";
import {ChatMenuItemDiv} from "../../styled-components/mainMenuBar/chats/ChatMenuItemDiv.styled";
import {ChatMenuItemsDiv} from "../../styled-components/mainMenuBar/chats/ChatMenuItemsDiv.styled";
import {Item} from "../../styled-components/mainMenuBar/chats/Item.styled";
import user1 from '../../assets/ana.png'
import {ChatLabel} from "../../styled-components/mainMenuBar/chats/ChatLabel.styled";
import user2 from '../../assets/bob.png'
import user3 from '../../assets/gema.png'
import user4 from '../../assets/harry.png'
import user5 from '../../assets/omega.png'
import { LabelDiv } from "../../styled-components/mainMenuBar/chats/LabelDiv.styled";
import { LineDevider } from "../../styled-components/mainMenuBar/LineDevider.styled";
import { ChatLineDevider } from "../../styled-components/mainMenuBar/chats/ChatLineDevider.styled";

const ChatMenuItems = (props: any) => {
    return(
        <ChatMenuItemsDiv>
            <ChatMenuItemDiv>
                <ChatMenuItem> 
                    <Item>
                        <img src={user1} alt='user'></img>
                        <LabelDiv>
                            <ChatLabel>
                                Anna Derux
                            </ChatLabel>
                        </LabelDiv>
                    </Item>
                </ChatMenuItem>
                <ChatMenuItem>
                    <Item>
                        <img src={user2} alt='user'></img>
                        <LabelDiv>
                            <ChatLabel>
                                Bob Stanhope
                            </ChatLabel>
                        </LabelDiv>
                    </Item>
                </ChatMenuItem>
                <ChatMenuItem>
                    <Item>
                        <img src={user3} alt='user'></img>
                        <LabelDiv>
                            <ChatLabel>
                                Gemma Chambers
                            </ChatLabel>
                        </LabelDiv>
                    </Item>
                </ChatMenuItem>
                <ChatMenuItem>
                    <Item>
                        <img src={user4} alt='user'></img>
                        <LabelDiv>
                            <ChatLabel>
                                Harry Stilton
                            </ChatLabel>
                        </LabelDiv>
                    </Item>
                </ChatMenuItem>
                <ChatMenuItem>
                    <Item>
                        <img src={user5} alt='user'></img>
                        <LabelDiv>
                            <ChatLabel>
                                Omega Evans
                            </ChatLabel>
                        </LabelDiv>
                    </Item>
                </ChatMenuItem>
            </ChatMenuItemDiv>
            <div>
                <ChatLineDevider></ChatLineDevider>
            </div>
        </ChatMenuItemsDiv>
    );
}

export default ChatMenuItems;