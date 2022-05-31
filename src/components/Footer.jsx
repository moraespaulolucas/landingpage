import styled from 'styled-components';
import theme from '../styles/theme';
import Section from './Section';

const { colors } = theme;

const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-around;
  `;

const Footer = ({ children }) => {
  return (
    <Section height="30%" bgColor={colors.black} fontColor={colors.white}>
      <StyledFooter>{children}</StyledFooter>
    </Section>
  );
};

export default Footer;
