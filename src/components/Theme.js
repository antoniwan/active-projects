import styled from "styled-components";

const ThemeColors = {
  black: `#1b1725`,
  green: `#7ddf64`,
  red: `#ed254e`,
  blue: `#01baef`,
  yellow: `#f9dc5c`,
  tan: `#d0cd94`,
  indigo: `#22007c`
};

const Theme = styled.div`
  .container {
    max-width: 850px;
    margin-top: 60px;
    margin-bottom: 65px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 25px;
    padding-right: 25px;
  }
`;
export default Theme;
export { ThemeColors };
