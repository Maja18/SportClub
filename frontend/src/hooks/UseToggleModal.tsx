import {  useState } from "react";

const useToggleModal = () => {
    const [showModal, setModal] = useState(false);
    const [id, setId] = useState(0);

    const toggle = (id: number) => {
        setModal(!showModal);
        setId(id);
    } 

    return [toggle, showModal, id] as const

}

export default useToggleModal;