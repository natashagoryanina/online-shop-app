import styled from 'styled-components';

export const HeaderListContainer = styled.nav`
    .header-list {
        display: flex;
        flex-direction: row;
        justify-content: center;

        &_item {
            color: #f5f5f7;
            &:not(:last-child) {
                margin-right: 20px;
            }
        }
    }
`;