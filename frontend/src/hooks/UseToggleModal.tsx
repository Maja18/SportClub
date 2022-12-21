import { Dispatch, SetStateAction, useState } from "react";

const useToggleModalHook = () => {
    const [modal, setModal] = useState(false);
    const [id, setId] = useState(0);

    const toggle = (id: number) => {
        setModal(!modal);
        setId(id);
    } 

    return [toggle, modal,  id] as const

}

export default useToggleModalHook;