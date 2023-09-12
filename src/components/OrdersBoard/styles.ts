import { styled } from "styled-components";

export const Board = styled.div `
    padding: 18px;
    border: 2px solid rgba(204, 204, 204, 0.4);
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;

    header {
        padding: 20px;
        font-size: 22px;
        display: flex;
        align-items: center;
        gap: 10px;
    }
`;

export const OrdersContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 10px;
    
    button {
        background: #fff;
        border: 0.5px solid rgba(204, 204, 204, 0.4);
        height: 180px;
        border-radius: 30px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 20px;

        strong {
            font-weight: 300;
        }

        span {
            font-size: 20px;
            color: #0c8a3f;
        }

        & + button {
            margin-top: 10px;
        }
    }
`