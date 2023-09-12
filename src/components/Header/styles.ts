import { styled } from "styled-components";

export const Container = styled.header`
    background: #0c8a3f;
    display: flex;
    justify-content: center;
    height: 198px;
    align-items: center;
`;

export const Content = styled.div `
    width: 100%;
    max-width: 1216px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .page-details {
        h1{
            color: #080708;
            font-size: 32px;
        }

        h2 {
            color: #080708;
            font-weight: 400;
            font-size: 20px;
            opacity: 0.9;            
            margin-top: 6px;
        }
    }
`