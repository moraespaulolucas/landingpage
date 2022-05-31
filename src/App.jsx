import { useState } from 'react';

import Container from './components/Container';
import Nav from './components/Nav';
import NavButton from './components/NavButton';
import Section from './components/Section';
import Footer from './components/Footer';

import './styles/reset.css';
import './styles/fonts.css';

import theme from './styles/theme';
const { colors, sizes } = theme;

function App() {
  // sidemenu
  const [sidemenu, setSidemenu] = useState(false);
  const activeSidemenu = () => {
    setSidemenu(!sidemenu);
  };
  // return component
  return (
    <Container>
      <Nav handleClick={activeSidemenu} sideMenu={sidemenu}>
        <NavButton href="#">início</NavButton>
        <NavButton href="#about">quem somos</NavButton>
        <NavButton href="#clients">nossos parceiros</NavButton>
        <section>
          <NavButton href="#" login>
            entrar
          </NavButton>
          <NavButton href="#" login>
            cadastrar
          </NavButton>
        </section>
      </Nav>
      <Section id="home" bgColor={colors.white} fontColor={colors.black}>
        <h3>Conheça Matylda</h3>
      </Section>
      <Section id="about" bgColor={colors.orange} fontColor={colors.white}>
        <h3>Quem Somos</h3>
      </Section>
      <Section id="clients" bgColor={colors.blue} fontColor={colors.white}>
        <h3>Nossos Parceiros</h3>
      </Section>
      <Footer />
    </Container>
  );
}

export default App;
