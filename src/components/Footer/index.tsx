import { Container, Content} from "./styles";
import { SocialIcons } from "./styles";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin} from 'react-icons/fa';

export function Footer() {
    return (
    <Container>
      <Content>
        <div className="page-details">
          <h1>Rafael Cambito Maciel</h1>
          <h2>Programação WebII - IFPR - 2023</h2>
        </div>

        <SocialIcons>
          <FaInstagram />
          <FaTwitter />
          <FaFacebook />
          <FaLinkedin />
        </SocialIcons>
      </Content>
    </Container>
  );
}