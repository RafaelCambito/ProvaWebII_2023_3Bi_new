import { Board, OrdersContainer } from "./styles";

interface OrdersBaordProps {
    icon: string;
    title:string;
}

export function OrdersBoard({icon, title}:OrdersBaordProps) {
    return (
        <Board>
                <header>
                    <span>{icon}</span>
                    <strong>{title}</strong>
                </header>

                <OrdersContainer>
                    <button type="button">
                        <strong>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni sequi, eius blanditiis nihil iusto laboriosam!</strong>
                    </button>
                </OrdersContainer>
            </Board>
    );
}

