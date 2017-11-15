import styled from "styled-components";

const ThemeColors = {
  black: `#1b1725`,
  green: `#7ddf64`,
  red: `#e63946`,
  blue: `#457b9d`,
  yellow: `#f9dc5c`,
  tan: `#d0cd94`,
  indigo: `#22007c`,
  accent: `#f1faee`
};

const Theme = styled.div`
  .container {
    max-width: 850px;
    margin-top: 25px;
    margin-bottom: 25px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 25px;
    padding-right: 25px;
  }
`;
export default Theme;
export { ThemeColors };
