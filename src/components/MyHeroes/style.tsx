import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    width: 20%;
`;

export const ListMyHeroes = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin: 1rem;
`;

export const Item = styled.li`
    display: flex;
    flex-direction: column;
    border-top: 1px solid #d9d9d9;
    border-left: 1px solid #d9d9d9;
    border-radius: 20px;
    box-shadow: 5px 5px 10px #d9d9d9, 9px 6px 36px #ffffff;
    padding: 2rem;
    cursor: pointer;
    height: 200px;

    &:hover {
        border: 2px solid #ba2e2e;
    }

    h4 {
        text-align: center;
    }

    p {
        margin: 0;
    }

    img {
        width: 25px;
        height: 25px;
    }
`;