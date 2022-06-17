import styled from "styled-components";
//slt
export const HeaderContainer = styled.header`
    padding: 0 40px;
    display: flex;
    justify-content: flex-end;

    height: 60px;
    background-color: #1d1d1f;

    .header-logo {
        display: flex;
        align-items: center;
        
        &_icon {
            width: 50px;
            height: 40px;
            fill: #f5f5f7;
        }
    }
`;