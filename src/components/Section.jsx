import styled from 'styled-components';
import theme from '../styles/theme';

const { sizes } = theme;

const Section = styled.section`
  display: flex;
  width: 100%;
  height: ${(props) => (props.height ? props.height : sizes.section)};
padding: ${sizes.padding};
  color: ${(props) => props.fontColor};
  background-color: ${(props) => props.bgColor};
  `;

export default Section;
