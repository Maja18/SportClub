
import { useState } from "react";
import { MessageDiv } from "../../styled-components/messages/MessageDiv.styled";
import { MessageText } from "../../styled-components/messages/MessageText.styled";
import { ProfileName } from "../../styled-components/messages/ProfileName.styled";

const Message = () => {
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseOver = () => {
        setIsHovering(true);
    };
    
    const handleMouseOut = () => {
        setIsHovering(false);
    };
    
    return(
        <div>
            
        </div>
    )
}

export default Message;