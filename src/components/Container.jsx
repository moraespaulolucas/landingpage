import styled from 'styled-components';
import theme from '../styles/theme';
const { sizes } = theme;

const Container = styled.div`
display: flex;
flex-direction: column;

  h1 {
    font-size: ${sizes.text.h1};
    font-weight: bold;
  }
  h2 {
    font-size: ${sizes.text.h2};
    font-weight: bold;
  }
  h3 {
    font-size: ${sizes.text.h3};
    font-weight: bold;
  }
  h4 {
    font-size: ${sizes.text.h4};
    font-weight: bold;
  }
  p {
      font-size: ${sizes.text.p};
  }
  `;

export default Container;
