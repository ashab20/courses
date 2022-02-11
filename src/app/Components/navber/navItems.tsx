import React, { useState } from "react";
import { IoIosClose, IoMdMenu } from "react-icons/io";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import tw from "twin.macro";
import { SCREEN } from "../../../responsive";

const ListContainer = styled.ul`
  ${tw`
        flex 
        list-none
    `}
`;

const NavItem = styled.li<{ Menu?: any }>`
  ${tw`
        text-xl md:text-base text-gray-700 font-medium mr-2 md:mr-5 font-Roboto cursor-pointer transition duration-300 ease-in-out lg:text-xl hover:text-gray-500
    `}
`;

const MenuStyled = styled.div`

  ${tw` 
    absolute text-center bg-gray-700 bottom-0 top-0 p-8 text-white right-0
  `}
  ul{
    display:list-item;
  }
  li{    
    justify-item:center;
    color:white;
    border-radius:20px;
    margin:.5rem;
  
    padding:.5rem 1rem .5rem 1rem;
    align-item:center;
    justify-conten:center
  }
  li:hover{
    margin: 0.5rem 1rem 0.5rem -2.6rem;
    background: white;
    
    

  }
`;

const MenuIcon = styled.div`
  ${tw`
    p-2 text-4xl cursor-pointer transition delay-75 ease-in-out 
  `}
  font-size:2.5rem;
  position:absolute;
  right:0;  
  text-align:right;
  z-index:2000;

`;

function NavItems() {
  const [menu, setMenu] = useState(false);

  const showMenu = () => setMenu(!menu);

  const isMobile = useMediaQuery({ maxWidth: SCREEN.sm });
  if (isMobile)
    return (
      <>
      <MenuIcon onClick={showMenu}>
        {menu? <IoIosClose className="text-red-500"/> : <IoMdMenu/> }
      </MenuIcon>
        {menu ? (
          <MenuStyled>
            <ListContainer>
              <NavItem>
                <a href="/">Home</a>
              </NavItem>
              <NavItem>
                <a href="/courses">Courses</a>
              </NavItem>
              <NavItem>
                <a href="/services">Services</a>
              </NavItem>
              <NavItem>
                <a href="/contact">Contact</a>
              </NavItem>
            </ListContainer>
          </MenuStyled>
        ) : null}
      </>
    );

  return (
    <>
      <ListContainer>
      
        <NavItem>
          <a href="/">Home</a>
        </NavItem>
        <NavItem>
          <a href="/courses">Courses</a>
        </NavItem>
        <NavItem>
          <a href="/services">Services</a>
        </NavItem>
        <NavItem>
          <a href="/contact">Contact</a>
        </NavItem>
      </ListContainer>
    </>
  );
}

export default NavItems;
