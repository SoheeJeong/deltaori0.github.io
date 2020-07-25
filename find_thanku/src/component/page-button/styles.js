import styled from "styled-components/macro";

import { Link } from "react-router-dom";
import { THEME_COLOR } from "../../constant";

export const PageButton = styled.li(props)`
  border-radius: 50%;

  font-size: 1.4rem;
  background-color: ${(props) =>
    props.focus ? THEME_COLOR.PRIMARY : THEME_COLOR.GRAY};

  display: flex;
  justify-content: center;
  align-items: center;

  color: ${(props) => (props.focus ? "white" : "black")};
`;

export const PageButtonContainer = styled(Link)`
  text-decoration: none;
  color: inherit;

  width: 3.6rem;
  height: 3.6rem;

  display: flex;
  justify-content: center;
  align-items: center;
`;
