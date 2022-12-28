
import DesignThread from "../../styled-components/mainMenuBar/DesignThread.styled";
import Label from "../../styled-components/mainMenuBar/Label.styled";
import NewThread from "../../styled-components/mainMenuBar/NewThread.styled";
import SalesMarketingThread from "../../styled-components/mainMenuBar/SalesMarketingThread.styled";
import ThreadMenuItem from "../../styled-components/mainMenuBar/ThreadMenuItem.styled";
import ThreadMenuItemsDiv from "../../styled-components/mainMenuBar/ThreadMenuItemsDiv.styled";


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