import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
    width: 80%;
`;

export const Item = styled.li`
    display: flex;
    flex-direction: column;
    border-top: 1px solid #d9d9d9;
    border-left: 1px solid #d9d9d9;
    border-radius: 20px;
    box-shadow: 5px 5px 10px #d9d9d9, 9px 6px 36px #ffffff;
    padding: 2rem 2rem;
    cursor: pointer;
    height: 280px;
    width: 230px;

    div {
        padding: 0rem 2rem;
    }

    &:hover {
        border: 2px solid #2e74ba;
    }

    h4 {
        text-align: center;
    }

    p {
        margin: 0;
    }
`;