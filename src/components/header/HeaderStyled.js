import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    height: 60px;
    background-color: #1d1d1f;
    padding: 0 40px;
    justify-content: space-between;
    align-items: center;

    .header-logo {
        text-decoration: none;
        font-weight: 700;

        &_icon {
            width: 50px;
            height: 40px;
            fill: #f5f5f7;
        }
    }
`;