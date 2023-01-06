import { useState } from "react";
import {LineDevider} from "../../styled-components/mainMenuBar/LineDevider.styled";
import ThreadDropdown from "../../styled-components/mainMenuBar/threads/ThreadDropdown.styled";
import {Threads} from "../../styled-components/mainMenuBar/threads/Threads.styled";
import ThreadMenuItems from "./ThreadMenuItems";

const ThreadList = (props: any) => {
    const [showThreadItems, setShowThreadItems] = useState(false)

    return(
       <div>
         <Threads> {/* threads title */}
            <ThreadDropdown  dropDownOpened ={showThreadItems} onClick={() => setShowThreadItems(!showThreadItems)}>
                THREADS
                <span></span>
            </ThreadDropdown>
        </Threads>
        {showThreadItems ? <ThreadMenuItems></ThreadMenuItems> : null}
        {showThreadItems ? null : <LineDevider></LineDevider>}
       </div>
    );

}

export default ThreadList;
