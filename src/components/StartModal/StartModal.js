import { useState, useEffect } from "react";

import closeCross from "./../../assets/images/closeCross.svg"

import { disableBodyScroll, enableBodyScroll} from "body-scroll-lock";


import { 
    ModalBackground,
    ModalContainer,
    ModalContainerCloseBtnWrapper,
    CloseBtn
} from "./StartModalStyled";




function StartModal({setModalVisibility}) {

    const [topOffset, setTopOffset] 
    = useState(Math.abs(document.querySelector("body").getBoundingClientRect().top));

    const keyboardListener = (e) => {
        if (e.key === "Escape") {
            closeModal();
        }
    }

    function closeModal() {
        enableBodyScroll(document.querySelector("body"));
        document.removeEventListener("keydown", keyboardListener);
        window.removeEventListener("resize", resizeListener);
        setModalVisibility(false);
    }

    useEffect(() => {
        disableBodyScroll(document.querySelector("body"));
        document.addEventListener("keydown", keyboardListener);
        window.addEventListener("resize", resizeListener);
    }, []);

    const resizeListener = () => {
        setTopOffset(Math.abs(document.querySelector("body").getBoundingClientRect().top));
    }

    function closeModalByClick(e) {
        if (e.target?.id === "modalBackground" || e.target?.id === "modalCloseBtn") {
            closeModal();
        }
    }


    return ( 
        <ModalBackground
            top={topOffset}
            onClick={closeModalByClick}
            id="modalBackground">
            <ModalContainer>
                <ModalContainerCloseBtnWrapper onClick={closeModalByClick} >
                    <CloseBtn src={closeCross} id = "modalCloseBtn">
                    </CloseBtn>
                </ModalContainerCloseBtnWrapper>
                MODAL
            </ModalContainer>

        </ModalBackground>
    );
}

export default StartModal;