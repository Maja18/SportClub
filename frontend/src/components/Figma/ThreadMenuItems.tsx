
import { LineDevider } from "../../styled-components/mainMenuBar/LineDevider.styled";
import {ItemDiv} from "../../styled-components/mainMenuBar/threads/ItemDiv.styled";
import Label from "../../styled-components/mainMenuBar/threads/Label.styled";
import ThreadMenuItem from "../../styled-components/mainMenuBar/threads/ThreadMenuItem.styled";
import {ThreadMenuItemsDiv} from "../../styled-components/mainMenuBar/threads/ThreadMenuItemsDiv.styled";

const ThreadMenuItems = (props: any) => {
    return(
        <ThreadMenuItemsDiv>
            <ThreadMenuItem>
                <ItemDiv>
                    <Label>
                        General
                    </Label>
                </ItemDiv>
            </ThreadMenuItem>
            <ThreadMenuItem>
                <ItemDiv>
                    <Label>
                        Design
                    </Label>
                </ItemDiv>
            </ThreadMenuItem>
            <ThreadMenuItem style={{background:'rgba(152, 191, 218, 0.5)'}}>
                <ItemDiv>
                    <Label>
                        Sales & Marketing
                    </Label>
                </ItemDiv>
            </ThreadMenuItem>
            <ThreadMenuItem>
                <ItemDiv>
                    <Label>
                        + Create new thread
                    </Label>
                </ItemDiv>
            </ThreadMenuItem>
            <LineDevider dropDownOpened ={props.dropDownOpened}></LineDevider>
        </ThreadMenuItemsDiv>
    );
}

export default ThreadMenuItems;