import React from "react";
import Styled from "styled-components";
import tw from "twin.macro";
import Logo from "../logo";
import NavItems from "./navItems";


const NavContainer = Styled.div`
  z-index: 1000;
${tw`
    flex 
    flex-row
    w-full
    max-w-screen-2xl
    items-center 
    justify-between
    lg:w-10/12
    // lg:pl-6 
    // lg:pr-6 
`}
`;
export const Navbar = () => {
  return (
    <NavContainer>
        <Logo />
        <NavItems/>

    </NavContainer>
  );
};
