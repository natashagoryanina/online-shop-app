import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  margin: 0 25px;
  top: 100px;
  left: 0;
  right: 0;
  height: calc(100vh - 100px);

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #67645ee6;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  z-index: 1200;
  overflow: auto;


  .modal {
    position: relative;
    overflow: hidden;
  
    &-icon {
        transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    }

    &-btn {
        position: absolute;
        top: 0;
        right: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        background-color: transparent;
        border: none;
        cursor: pointer;
        fill: #504f4f;

        &:hover {
            fill: #819ff5;
        }
    }
  }

`;