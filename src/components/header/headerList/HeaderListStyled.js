import styled from 'styled-components';

export const HeaderListContainer = styled.nav`
    .header-list {
        display: flex;
        flex-direction: row;
        justify-content: center;

        &_item {
            color: #f5f5f7;
        }
    }

    @media (min-width: 768px) {
        margin: auto;

        .header-list {
            &_item {
                &:not(:last-child) {
                    margin-right: 20px;
                }
            }

            /* &_link {
                text-decoration: none;
                text-transform: uppercase;
                color: #00008b;
                &:hover {
                    color: #ffffff;
                }
            }

            &_link-active {
                color: #fff;
            } */
        }
    }

    @media (min-width: 350px) and (max-width: 767px) {
        background-color: none;
        
        .header-list {
            flex-direction: column;
            align-items: center;

            &_item {
                &:not(:last-child) {
                    margin-bottom: 20px;
                }
            }

            /* &_link {
                text-decoration: none;
                text-transform: uppercase;
                color: #00008b;
                font-weight: 700;
                font-size: 25px;
                &:hover{
                    //color: #f50404;
                    color: #0026ff;
                }
            }

            &_link-active {
                color: #fff;
            } */
        }
    }
`;