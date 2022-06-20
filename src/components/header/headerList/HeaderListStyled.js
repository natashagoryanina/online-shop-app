import styled from 'styled-components';

export const HeaderListContainer = styled.div`
    display: flex;
    align-items: center;

    .header-list {
        display: flex;

        &_item {
            color: #f5f5f7;
            cursor: pointer;
        }
    }

    @media (min-width: 768px) {

        .header-list {
            align-items: center;

            &_item {
                &:not(:last-child) {
                    margin-right: 20px;
                }
                :hover {
                    color: #7375f3;
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
      
        flex-direction: column;
        
        .header-list {
            flex-direction: column;
            align-items: center;

            &_item {
                font-size: 20px;
                &:not(:last-child) {
                    margin-bottom: 20px;
                }
                :hover {
                    color: #3538f1;
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