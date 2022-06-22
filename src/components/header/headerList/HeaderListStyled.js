import styled from 'styled-components';

export const HeaderListContainer = styled.div`
    display: flex;
    align-items: center;

    .header-list {
        display: flex;

        &_item {
            font-size: 20px;
            font-weight: 700;
            cursor: pointer;
        }

        &_link {
            text-decoration: none;
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
                color: #67645e;

                &-active {
                    text-decoration: none;
                    color: #7391C8;
                }

                &:hover {
                    color: #52688F;
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

                &:not(:last-child) {
                    margin-bottom: 20px;
                }
            }

            &_link {
                color: #f1f0ed;

                &-active {
                    text-decoration: none;
                    color: #7391C8;
                }

                &:hover {
                    color: #BDC6D9;
                }
            }
        }
    }
`;