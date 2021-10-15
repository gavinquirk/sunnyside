import { StyledHeader, Nav } from './styles/Header.styled';
import { Container } from './styles/Container.styled';

export default function Header() {
  return (
    <StyledHeader>
      <Container>
        <img src={'/images/desktop/image-header.jpg'} />
        <Nav>
          <span>sunnyside</span>
          <ul>
            <li>About</li>
            <li>Services</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </Nav>
      </Container>
      <h1>WE ARE CREATIVES</h1>
    </StyledHeader>
  );
}
