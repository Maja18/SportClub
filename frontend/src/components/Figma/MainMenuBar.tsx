
import { useState } from "react";
import { ChatDropdown } from "../../styled-components/mainMenuBar/chats/ChatDropdown.styled";
import { ChatLineDevider } from "../../styled-components/mainMenuBar/chats/ChatLineDevider.styled";
import { Chats } from "../../styled-components/mainMenuBar/chats/Chats.styled";
import { LineDevider } from "../../styled-components/mainMenuBar/LineDevider.styled";
import { MenuBar } from "../../styled-components/mainMenuBar/MenuBar.styled";
import ThreadDropdown from "../../styled-components/mainMenuBar/threads/ThreadDropdown.styled";
import { Threads } from "../../styled-components/mainMenuBar/threads/Threads.styled";
import ChatList from "./ChatList";
import FilesMedia from "./FilesMedia";
import ThreadList from "./ThreadList";

const MainMenuBar = (props: any) => {
    const [showThreadItems, setShowThreadItems] = useState(false);
    const [showChatItems, setShowChatItems] = useState(false)
    
    return(
        <MenuBar> 
            {/* Threads */}
            <Threads> {/* threads title */}
                <ThreadDropdown dropDownOpened = {showThreadItems} onClick={() => setShowThreadItems(!showThreadItems)}>
                    THREADS
                    <span></span>
                </ThreadDropdown>
            </Threads>
           {showThreadItems ? <ThreadList></ThreadList> : null}
           {showThreadItems ? null : <LineDevider></LineDevider>}
            {/* Chats */}
            <Chats>
                <ChatDropdown dropDownOpened ={showChatItems} onClick={() => setShowChatItems(!showChatItems)}>
                    CHATS
                    <span></span>
                </ChatDropdown>
            </Chats>
            {showChatItems ? <ChatList></ChatList> : null}
            {showChatItems ? null : <ChatLineDevider></ChatLineDevider>}
            {/* Files & Media */}
            <FilesMedia></FilesMedia>
        </MenuBar>
    );
}

export default MainMenuBar;