import ChatDropdown from "../../styled-components/mainMenuBar/chats/ChatDropdown.styled";
import ChatLineDevider from "../../styled-components/mainMenuBar/chats/ChatLineDevider.styled";
import Chats from "../../styled-components/mainMenuBar/chats/Chats.styled";
import ChatMenuItems from "./ChatMenuItems";

const ChatList = (props: any) => {
    return(
       <div>
        <Chats>
            <ChatDropdown>
                CHATS
                <span></span>
            </ChatDropdown>
        </Chats>
        <ChatMenuItems></ChatMenuItems>
        <ChatLineDevider></ChatLineDevider>
       </div>
    );

}

export default ChatList;