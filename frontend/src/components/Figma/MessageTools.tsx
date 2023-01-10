import { MessageToolsDiv } from "../../styled-components/messages/MessageTools.styled";
import bookmark from '../../assets/bookmark.png'
import message from '../../assets/message.png'
import trash from '../../assets/trash.png'
import edit from '../../assets/edit.png'
import forward from '../../assets/forward.png'
import reply from '../../assets/reply.png'
import kebab_menu from '../../assets/kebab_menu.png'
import { ToolImage } from "../../styled-components/messages/ToolImage.styled";

const MessageTools = () => {
    return(
        <MessageToolsDiv>
            <ToolImage>
                <img src={message} alt='user'></img>
            </ToolImage>
            <ToolImage>
                <img src={reply} alt='user'></img>
            </ToolImage>
            <ToolImage>
                <img src={forward} alt='user'></img>
            </ToolImage>
            <ToolImage>
                <img src={trash} alt='user'></img>
            </ToolImage>
            <ToolImage>
                <img src={edit} alt='user'></img>
            </ToolImage>
            <ToolImage>
                <img src={kebab_menu} alt='user'></img>
            </ToolImage>
            <div>
                <img src={bookmark} alt='user'></img>
            </div>
        </MessageToolsDiv>
    )
}

export default MessageTools;