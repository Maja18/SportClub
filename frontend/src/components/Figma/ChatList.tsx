import { useState } from "react";
import {ChatDropdown} from "../../styled-components/mainMenuBar/chats/ChatDropdown.styled";
import {ChatLineDevider} from "../../styled-components/mainMenuBar/chats/ChatLineDevider.styled";
import {Chats} from "../../styled-components/mainMenuBar/chats/Chats.styled";
import ChatMenuItems from "./ChatMenuItems";

const ChatList = (props: any) => {

    return(
        <ChatMenuItems></ChatMenuItems>
    );

}

export default ChatList;