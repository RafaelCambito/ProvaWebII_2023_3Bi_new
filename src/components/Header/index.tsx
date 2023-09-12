
import logo from "../../assets/images/logoifpr.png"

import { Container, Content } from "./styles";

export function Header() {
    return (
        <Container>
            <Content>
                <img src={logo} alt="IFPR Cascavel" />

                <div className="page-details">
                    <h1>Instituto Federal do Paraná</h1>
                    <h2>Campus Cascavel</h2>
                </div>

                
            </Content>
        </Container>
    );
}