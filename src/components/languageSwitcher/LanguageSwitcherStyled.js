import styled from "styled-components";

export const LanguageSwitcherContainer = styled.div`

    display: flex;
    flex-direction: row;
    justify-content: center;

    .switch-lang {
        display: flex;
        align-items: center;
        &_icon {
            width: 18px;
            height: 18px;
            fill: #f5f5f7;
        }
    }

    .select-lang {
        margin: 0;
        width: 100%;
        appearance: none;
        outline: none;
        background-color: transparent;
        border: none;
        font-family: inherit;
        font-size: 16px;
        color: #f5f5f7;
        cursor: pointer;
    }

    @media (min-width: 768px) {
        margin-left: 20px;

        .select-lang {
            margin-left: 4px;
            :hover {
                color: #7375f3;
            }
        }
    }

    @media (min-width: 350px) and (max-width: 767px) {
        margin-top: 20px;
        .select-lang {
            margin-left: 4px;
            font-size: 20px;
            :hover {
                color: #3538f1;
            }
        }
    }
`;