import styled from 'styled-components';
import theme from '../styles/theme';

const { colors } = theme;

const NavButton = styled.a`
  padding: 0.5rem 0.75rem;
  margin: 0px 0.5rem;
  font-weight: bold;
  color: ${(props) => (props.login ? colors.white : colors.black)};
  background-color: ${(props) => (props.login ? colors.lightOrange : '')};
  border-radius: 0.5rem;
  cursor: ${(props) => (props.onClick ? 'pointer' : 'inital')};
  &:hover {
    color: ${(props) => (props.login ? '' : colors.white)};
    background-color: ${(props) =>
      props.login ? colors.orange : colors.lightBlue};
  }
  `;

export default NavButton;
