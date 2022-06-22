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
        font-size: 20px;
        font-weight: 700;
        cursor: pointer;
    }

    @media (min-width: 768px) {
        margin-left: 20px;

        .switch-lang_icon {
            fill: #67645e;
        }

        .select-lang {
            margin-left: 4px;
            color: #67645e;

            &:hover {
                color: #52688F;
            }
        }
    }

    @media (min-width: 350px) and (max-width: 767px) {
        margin-top: 20px;

        .switch-lang_icon {
            fill: #f1f0ed;
        }

        .select-lang {
            margin-left: 4px;
            color: #f1f0ed;

            &:hover {
                color: #BDC6D9;
            }
        }
    }
`;