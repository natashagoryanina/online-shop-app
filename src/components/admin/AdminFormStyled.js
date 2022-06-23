import styled from "styled-components";

export const AdminFormContainer = styled.div`
    display: flex;
    flex-direction: row;
    overflow: hidden;
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
    background: #f1f0ed;

    @media (min-width: 768px) {
        .admin-img {

            &_container {
                position: relative;
                display: flex;
                background-size: cover;
                background-position: center;
                background-repeat: no-repeat;
                width: 100%;
                height: 100%;
            }

            &_text {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                font-size: 25px;
                color: #f1f0ed;
            }
        }

        .admin-form {
            display: flex;
            justify-content: flex-start;
            
            flex-direction: column;
            
            &_container {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 100%;
            }

            &_item {
                display: flex;
                align-items: center;
                margin-bottom: 25px;
                position: relative;
                font-size: 18px;
                color: #67645e;
            }

            &_select {
                margin-left: 10px;
                padding: 2px 0;
                width: 150px;

                appearance: none;
                outline: none;
                background-color: #f1f0ed;
                border: 1px solid #67645e;
                border-radius: 12px;
                color: #67645e;

                text-align: center;
                font-family: inherit;
                font-size: inherit;
                font-weight: inherit;
                cursor: pointer;

                &:hover{
                    color: #f1f0ed;
                    background-color: #67645e;
                }

                &-container {
                    position: relative;
                }

            }

            &_input {
                margin-left: 10px;
                padding: 2px 12px;
                width: 100%;

                background-color: #f1f0ed;
                border: 1px solid #67645e;
                border-radius: 12px;
                color: #67645e;

                font-family: inherit;
                font-size: inherit;
                font-weight: inherit;
                cursor: pointer;

                &:focus {
                    outline: none;
                    background-color: #67645e;
                    color: #f1f0ed;
                }
            }

            &_input[type=text] {
                box-sizing: border-box;
            }

            &_input::-webkit-outer-spin-button,
            &_input::-webkit-inner-spin-button {
                -webkit-appearance: none;
                margin: 0;
            }

            &_textarea {
                margin-left: 10px;
                padding: 6px 8px;
                width: 100%;
                resize: none;

                background-color: #f1f0ed;
                border: 1px solid #67645e;
                border-radius: 12px;
                color: #67645e;

                font-family: inherit;
                font-size: inherit;
                font-weight: inherit;
                cursor: pointer;

                &:focus {
                    outline: none;
                    background-color: #67645e;
                    color: #f1f0ed;
                }
            }

            &_btn {
                padding: 2px 0;

                background-color: #f1f0ed;
                border: 1px solid #67645e;
                border-radius: 12px;
                color: #67645e;

                font-family: inherit;
                font-size: 18px;
                font-weight: inherit;
                cursor: pointer;

                &:hover {
                    background-color: #67645e;
                    color: #f1f0ed;
                }
            }

            &_file {
                display: none;
            }

            &_icon {
                margin-left: 10px;
                width: 35px;
                height: 35px;
                fill: #67645e;
                cursor: pointer;
            }

            &_checkbox {
                opacity: 0;
                cursor: pointer;
                height: 0;
                width: 0;

                &:checked ~ .admin-form_checkmark {
                    background-color: #67645e;
                }

                &:checked ~ .admin-form_checkmark:after {
                    display: block;
                }
            }

            &_checkmark {
                height: 20px;
                width: 20px;
                border: 1px solid #67645e;
                border-radius: 7px;
                background-color: #f1f0ed;

                &:after {
                    display: none;
                    color: #f1f0ed;

                }
            }
        }
    }

    @media (min-width: 350px) and (max-width: 767px) {}
`;