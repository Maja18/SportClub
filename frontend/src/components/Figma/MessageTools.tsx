import { MessageToolsDiv } from "../../styled-components/messages/MessageTools.styled";
import bookmark from '../../assets/bookmark.png'
import message from '../../assets/message.png'
import trash from '../../assets/trash.png'
import edit from '../../assets/edit.png'
import forward from '../../assets/forward.png'
import reply from '../../assets/reply.png'
import kebab_menu from '../../assets/kebab_menu.png'

const MessageTools = () => {
    return(
        <MessageToolsDiv>
            <img src={message} alt='user'></img>
            <img src={reply} alt='user'></img>
            <img src={forward} alt='user'></img>
            <img src={trash} alt='user'></img>
            <img src={edit} alt='user'></img>
            <img src={kebab_menu} alt='user'></img>
            <img src={bookmark} alt='user'></img>
        </MessageToolsDiv>
    )
}

export default MessageTools;