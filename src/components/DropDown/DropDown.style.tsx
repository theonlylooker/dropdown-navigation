import styled from "styled-components";
import DropDown from "./DropDown";

export const DropDownStyled = styled(DropDown)`
  ul {
    list-style: none;
  }
  a {
    margin-right: 1rem;
  }
  .dropdown__item {
    margin-top: 1rem;
  }
  .dropdown__image {
    margin-right: 0.5rem;
  }
`;
