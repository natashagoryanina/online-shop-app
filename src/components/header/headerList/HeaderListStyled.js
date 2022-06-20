import styled from 'styled-components';

export const HeaderListContainer = styled.div`
    display: flex;
    align-items: center;

    .header-list {
        display: flex;

        &_item {
            cursor: pointer;
        }

        &_link {
            text-decoration: none;
            color: #f5f5f7;

            &-active {
                text-decoration: none;
                color: #9e9ffc;
            }
        }
    }

    @media (min-width: 768px) {

        .header-list {
            align-items: center;

            &_item {
                &:not(:last-child) {
                    margin-right: 20px;
                }
            }

            &_link {
                &:hover {
                    color: #6062f3;
                }
            }
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
            }

            &_link {
                &:hover {
                    color: #3538f1;
                }
            }
        }
    }
`;