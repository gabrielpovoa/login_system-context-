import styled from 'styled-components';

export const Images = styled.div`
    display:grid;
    grid-template-columns: repeat(auto-fit, minmax(27rem, 1fr));
    gap: 3rem;
    place-items: center;
    margin-top: 4rem;
`;

export const Img = styled.img`
    object-fit: cover;
    width: 30rem; 
    -webkit-border-radius: 50px;
    border-radius: .8rem;
    background: #f1f1f1;
    -webkit-box-shadow: 12px 12px 24px #cdcdcd, -12px -12px 24px #ffffff;
    box-shadow: 12px 12px 24px #cdcdcd, -12px -12px 24px #ffffff;
    padding: 2rem 5%;

    &:hover {
        background-color: #F2F2F2;
    }
`;
