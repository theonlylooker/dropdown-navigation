import styled from "styled-components";
import DropDown from "./DropDown";

export const DropDownStyled = styled(DropDown)`
  display: inline-block;
  ul {
    list-style: none;
    /* position: absolute; */
  }
  .dropdown__item {
    margin-top: 1rem;
  }
  .dropdown__image {
    margin-right: 0.5rem;
  }
  .dropdown__title {
    background-color: hsl(0, 0%, 98%);
    border: none;
    padding: 0;
  }
  .dropdown__text {
    background-color: hsl(0, 0%, 98%);
    font-family: "Epilogue", sans-serif;
    color: hsl(0, 0%, 41%);
    margin-right: 0.5rem;
    display: inline;
    font-size: 1rem;
  }
  @media (min-width: 1440px) {
    .dropdown__text {
      font-size: 0.9rem;
    }
    .dropdown__title:focus {
      .dropdown__text {
        color: black;
      }
    }
    .dropdown__title:hover {
      .dropdown__text {
        color: black;
      }
    }
    */ .arrow {
      filter: invert();
    }
    ul {
      background-color: #fff;
      position: absolute;
      margin-top: 0.5rem;
      border-radius: 1rem;
      padding: 0rem 1rem 1.3rem 1.3rem;
      box-shadow: 0px 5px 25px -4px rgba(0, 0, 0, 0.4);
      -webkit-box-shadow: 0px 5px 25px -4px rgba(0, 0, 0, 0.4);
      -moz-box-shadow: 0px 5px 25px -4px rgba(0, 0, 0, 0.4);
      /* top: 3.5rem; */
    }
  }
`;
