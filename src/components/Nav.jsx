import styled from 'styled-components';
import Logo from './Logo';
import NavButton from './NavButton';
import theme from '../styles/theme';

const { colors, sizes } = theme;

const StyledNav = styled.nav`
position: sticky;
display: flex;
align-items: center;
justify-content: space-around;
width: 100%;
height: min(10%, 5rem);
padding: ${sizes.padding2} ${sizes.padding};
background-color: ${colors.white};
@media only screen and (max-width: ${sizes.mediaQuery}) {
  justify-content: space-between;
}
  `;

const NavList = styled.div`
display: flex;
position: static;
flex: 1;
align-items: center;
justify-content: space-around;
transition: all ease 1s;
section {
  display: flex;
  margin-left: auto;
}
* {
  transition: all ease 0.2s;
}
@media only screen and (max-width: ${sizes.mediaQuery}) {
  flex-direction: column-reverse;
  justify-content: flex-end;
  position: fixed;
  height: 100%;
  width: ${sizes.sideMenu};
  top: 0;
  right: ${(props) => (props.activated ? 0 : `-${sizes.sideMenu}`)};
  background-color: ${colors.white};
  section {
    flex-direction: column;
    margin: 0;
  }
  * {
  margin: ${sizes.padding2} 0px;
  }
}
`;

const SidemenuButton = styled(NavButton)`
  display: none;
  @media only screen and (max-width: ${sizes.mediaQuery}) {
    display: initial;
}
`;

const Nav = ({ children, handleClick, sideMenu }) => {
  const sidemenuStatus = sideMenu;
  return (
    <StyledNav>
      <Logo />
      <SidemenuButton login onClick={handleClick}>
        ...
      </SidemenuButton>
      <NavList activated={sidemenuStatus}>
        {children}
        <SidemenuButton login onClick={handleClick}>
          X
        </SidemenuButton>
      </NavList>
    </StyledNav>
  );
};

export default Nav;
