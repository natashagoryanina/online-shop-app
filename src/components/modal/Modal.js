import React, { useEffect } from 'react';
import { ModalContainer } from './ModalStyled';

const Modal = ({children, closeModal}) => {

    useEffect(() => {
        window.addEventListener("keydown", onEscapeClose);
        const body = document.querySelector("body");
        body.style.overflow = "hidden"; 
        return () => {
            window.removeEventListener("keydown", onEscapeClose);
            const body = document.querySelector("body");
            body.style.overflow = "auto";
        };
    });

    const onEscapeClose = (e) => {
        if (e.code === "Escape") {
            closeModal();
        };
    };

    return (
        <ModalContainer>
            <div className='modal'>
                {children}
            </div>
        </ModalContainer>
    );
};

export default Modal;