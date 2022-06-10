import styled from "styled-components";
import { buttonStyledProps } from "../../types/types";

export const StyledButton = styled.a<buttonStyledProps>`
  padding: ${(props) => (props.type === "hero" ? "0.8rem" : "0.5rem 2.5rem")};
  border-radius: ${(props) => (props.type === "hero" ? "1rem" : "0.7rem")};
  background-color: ${(props) =>
    props.type === "hero" ? "hsl(0, 0%, 8%)" : "hsl(0, 0%, 98%)"};
  color: ${(props) =>
    props.type === "hero" ? "hsl(0, 0%, 98%)" : "hsl(0, 0%, 41%)"};
  border: ${(props) =>
    props.type === "hero"
      ? "solid hsl(0, 0%, 8%) 0.1rem"
      : "solid hsl(0, 0%, 41%) 0.1rem"};
  font-weight: ${(props) => (props.type === "hero" ? 700 : 500)};
  &:active {
    background-color: ${(props) =>
      props.type === "hero" ? "hsl(0, 0%, 98%)" : "hsl(0, 0%, 98%)"};
    color: ${(props) => (props.type === "hero" ? "black" : "hsl(0, 0%, 8%)")};
    border: ${(props) =>
      props.type === "hero"
        ? "solid hsl(0, 0%, 41%) 0.1rem"
        : "solid black 0.1rem"};
  }
  &:hover {
    background-color: ${(props) =>
      props.type === "hero" ? "hsl(0, 0%, 98%)" : "hsl(0, 0%, 98%)"};
    color: ${(props) => (props.type === "hero" ? "black" : "hsl(0, 0%, 8%)")};
    border: ${(props) =>
      props.type === "hero"
        ? "solid hsl(0, 0%, 41%) 0.1rem"
        : "solid black 0.1rem"};
  }
  @media (min-width: 1440px) {
    padding: ${(props) =>
      props.type === "hero" ? "0.8rem 1.1rem" : "0.5rem 1rem"};
  }
`;
