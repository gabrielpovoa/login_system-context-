import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3rem;

    h2 {
        margin-top: 4rem;
    }
    .button {
        display: block;
        background-color: #FFF;
        width: 30rem;
        margin: auto;
        padding: 1.8rem;
        box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
        cursor: pointer;
        border-radius:1rem;

    }
`;

export const Form = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;

    & input {
        width: 30rem;
        padding: 1.8rem;
        text-align: start;
        border-radius:.8rem;
        box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
    }
`;
