import styled from "styled-components";
//slt
export const HeaderContainer = styled.header`
    padding: 0 30px;
    display: flex;
    justify-content: center;
    position:sticky;
    height: 75px;
    background-color: #f1f0ed;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;

    @media (min-width: 350px) and (max-width: 767px) {
        justify-content: flex-end;
    }

    .header-menu {
        display: flex;
        align-items: center;
        
        &_icon {
            width: 50px;
            height: 40px;
            fill: #67645e;
        }
    }
`;