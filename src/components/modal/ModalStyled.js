import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  top: 100px;
  left: 0;
  width: 100vw;
  height: calc(100vh - 100px);
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 25px;
  background-color: #67645ee6;
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