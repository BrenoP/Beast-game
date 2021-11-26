import styled from 'styled-components';

export default function ContainerCenter({ children, justCenter }) {

    const Container = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        height: ${props => props.justCenter ? "100%" : "90vh"};

        h3 {
            font-size: 1.6rem;    
        }

        p {
            width: 30vw;
            text-align: center;
            margin: 0 0 2rem 0;
            font-size: 1.1rem;  
        }
    `;

    return(
        <Container justCenter={justCenter}>
            { children }
        </Container>
    )
}

export function Container({ children }) {
    
    const Container = styled.div`
        display: flex;
        justify-content: space-between;
        margin: 3rem;
    `;
    
    return(
        <Container>
            { children }
        </Container>
    );
}