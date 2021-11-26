import styled from 'styled-components';

const ButtonDefault = styled.button`
    border: 0;
    border-radius: 40px;
    padding: 1rem;
    background-color: #2e74ba;
    color: white;
    margin: 1rem 0 0 0;
    cursor: pointer;

    a {
        text-decoration: none;
        color: white;
        padding: 1rem;
    }
`;

export default function Button(props) {
    return(
        <ButtonDefault>
            {props.children}
        </ButtonDefault>
    );
}