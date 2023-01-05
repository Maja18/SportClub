
import { MenuBar } from "../../styled-components/mainMenuBar/MenuBar.styled";
import ChatList from "./ChatList";
import FilesMedia from "./FilesMedia";
import ThreadList from "./ThreadList";

const MainMenuBar = (props: any) => {
    return(
        <MenuBar> 
            {/* Threads */}
            <ThreadList></ThreadList>
            {/* Chats */}
            <ChatList></ChatList>
            {/* Files & Media */}
            <FilesMedia></FilesMedia>
        </MenuBar>
    );
}

export default MainMenuBar;