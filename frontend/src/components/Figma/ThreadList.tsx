import {LineDevider} from "../../styled-components/mainMenuBar/LineDevider.styled";
import ThreadDropdown from "../../styled-components/mainMenuBar/threads/ThreadDropdown.styled";
import {Threads} from "../../styled-components/mainMenuBar/threads/Threads.styled";
import ThreadMenuItems from "./ThreadMenuItems";

const ThreadList = (props: any) => {
    return(
       <div>
        <Threads> {/* threads title */}
            <ThreadDropdown>
                THREADS
                <span></span>
            </ThreadDropdown>
        </Threads>
        <ThreadMenuItems></ThreadMenuItems>
        <LineDevider></LineDevider>
       </div>
    );

}

export default ThreadList;
