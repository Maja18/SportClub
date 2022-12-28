
import ChatDropdown from "../../styled-components/mainMenuBar/ChatDropdown.styled";
import Chats from "../../styled-components/mainMenuBar/Chats.styled";
import Column from "../../styled-components/mainMenuBar/Column.styled";
import LineDevider from "../../styled-components/mainMenuBar/LineDevider.styled";
import ThreadDropdown from "../../styled-components/mainMenuBar/ThreadDropdown.styled";
import Threads from "../../styled-components/mainMenuBar/Threads.styled";
import ChatMenuItems from "./ChatMenuItems";
import ThreadMenuItems from "./ThreadMenuItems";

const MainMenuBar = (props: any) => {
    return(
        <Column>
            <Threads>
                <ThreadDropdown>
                    THREADS
                    <span></span>
                </ThreadDropdown>
            </Threads>
            <ThreadMenuItems> 
            </ThreadMenuItems>
            <LineDevider>
            </LineDevider>
            {/* Chats */}
            <Chats>
                <ChatDropdown>
                    CHATS
                    <span></span>
                </ChatDropdown>
            </Chats>
            <ChatMenuItems>
                
            </ChatMenuItems>
        </Column>
    );
}

export default MainMenuBar;