import Column from "../../styled-components/mainMenuBar/Column.styled";
import ChatList from "./ChatList";
import FilesMedia from "./FilesMedia";
import ThreadList from "./ThreadList";

const MainMenuBar = (props: any) => {
    return(
        <Column>
            {/* Threads */}
            <ThreadList></ThreadList>
            {/* Chats */}
            <ChatList></ChatList>
            {/* Files & Media */}
            <FilesMedia></FilesMedia>
        </Column>
    );
}

export default MainMenuBar;