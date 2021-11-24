import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
`;

export const Item = styled.li`
    display: flex;
    flex-direction: column;
 
    &:hover {
        border: 1px solid blue;
    }
`;