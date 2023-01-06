import { useState } from "react";
import {ChatDropdown} from "../../styled-components/mainMenuBar/chats/ChatDropdown.styled";
import {ChatLineDevider} from "../../styled-components/mainMenuBar/chats/ChatLineDevider.styled";
import {Chats} from "../../styled-components/mainMenuBar/chats/Chats.styled";
import ChatMenuItems from "./ChatMenuItems";

const ChatList = (props: any) => {
    const [showChatItems, setShowChatItems] = useState(false)

    return(
       <div>
        <Chats>
            <ChatDropdown dropDownOpened ={showChatItems} onClick={() => setShowChatItems(!showChatItems)}>
                CHATS
                <span></span>
            </ChatDropdown>
        </Chats>
        {showChatItems ? <ChatMenuItems></ChatMenuItems> : null}
        {showChatItems ? null : <ChatLineDevider></ChatLineDevider>}
       </div>
    );

}

export default ChatList;