import styled from "styled-components";
//slt
export const HeaderContainer = styled.header`
    padding: 0 30px;
    display: flex;
    justify-content: center;

    height: 60px;
    background-color: #1d1d1f;

    @media (min-width: 350px) and (max-width: 767px) {
        justify-content: flex-end;
    }

    .header-menu {
        display: flex;
        align-items: center;
        
        &_icon {
            width: 50px;
            height: 40px;
            fill: #f5f5f7;
        }
    }
`;