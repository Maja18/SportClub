import { useState } from "react";
import {LineDevider} from "../../styled-components/mainMenuBar/LineDevider.styled";
import ThreadDropdown from "../../styled-components/mainMenuBar/threads/ThreadDropdown.styled";
import {Threads} from "../../styled-components/mainMenuBar/threads/Threads.styled";
import ThreadMenuItems from "./ThreadMenuItems";

const ThreadList = (props: any) => {

    return(
        <ThreadMenuItems></ThreadMenuItems>
    );

}

export default ThreadList;
