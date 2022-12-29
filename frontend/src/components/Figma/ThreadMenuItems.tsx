
import DesignThread from "../../styled-components/mainMenuBar/threads/DesignThread.styled";
import Label from "../../styled-components/mainMenuBar/threads/Label.styled";
import NewThread from "../../styled-components/mainMenuBar/threads/NewThread.styled";
import SalesMarketingThread from "../../styled-components/mainMenuBar/threads/SalesMarketingThread.styled";
import ThreadMenuItem from "../../styled-components/mainMenuBar/threads/ThreadMenuItem.styled";
import ThreadMenuItemsDiv from "../../styled-components/mainMenuBar/threads/ThreadMenuItemsDiv.styled";


const ThreadMenuItems = (props: any) => {
    return(
        <ThreadMenuItemsDiv>
            <ThreadMenuItem>
                <Label>
                    General
                </Label>
            </ThreadMenuItem>
            <DesignThread>
                <Label>
                    Design
                </Label>
            </DesignThread>
            <SalesMarketingThread>
                <Label>
                    Sales & Marketing
                </Label>
            </SalesMarketingThread>
            <NewThread>
                <Label>
                    + Create new thread
                </Label>
            </NewThread>
        </ThreadMenuItemsDiv>
    );
}

export default ThreadMenuItems;