import styled from 'styled-components';
import theme from '../styles/theme';

const { colors } = theme;

const StyledLogo = styled.a`
  padding: 0.5rem 1rem;
  margin: 0px 0.5rem;
  font-size: 1.25rem;
  font-weight: bold;
  color: ${colors.lightOrange};
  `;

const Logo = () => {
  return <StyledLogo>MATYLDA</StyledLogo>;
};

export default Logo;
