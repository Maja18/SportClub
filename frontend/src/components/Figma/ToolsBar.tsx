import ToolsBarDiv from "../../styled-components/toolsBar/ToolsBarDiv.styled";
import ToolList from "./ToolList";
import close_tools_menu from '../../assets/close_tools_menu.png'
import CloseButtonDiv from "../../styled-components/toolsBar/CloseButtonDiv.styled";

const ToolsBar = () => {
    return(
        <ToolsBarDiv>
            <ToolList></ToolList>
            <CloseButtonDiv>
                <img src={close_tools_menu} alt='tool'></img>
            </CloseButtonDiv>
        </ToolsBarDiv>
    )
}

export default ToolsBar;