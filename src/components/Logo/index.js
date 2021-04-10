import React from "react";
import { Container, Books } from './styled'
import logo from "../../img/Logo.svg";
import logodark from "../../img/Logodark.svg";

function Logo({ dark }) {
  return (
    <Container>
      <img src={dark ? logodark : logo} alt="" />
      <Books dark={dark}>Books</Books>
    </Container>
  );
}

export default Logo;
