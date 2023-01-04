import { useState } from "react";
import { IoIosClose, IoMdMenu } from "react-icons/io";
import { useMediaQuery } from "react-responsive";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import tw from "twin.macro";
import useAuth from "../../../Hooks/useAuth";
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
  ul {
    display: list-item;
  }
  li {
    justify-item: center;
    color: white;
    border-radius: 20px;
    margin: 0.5rem;

    padding: 0.5rem 1rem 0.5rem 1rem;
    align-item: center;
    justify-conten: center;
  }
  li:hover {
    margin: 0.5rem 1rem 0.5rem -2.6rem;
    background: white;
  }
`;

const MenuIcon = styled.div`
  ${tw`
    p-2 text-4xl cursor-pointer transition delay-75 ease-in-out 
  `}
  font-size:2.5rem;
  position: absolute;
  right: 0;
  text-align: right;
  z-index: 2000;
`;

function Navber() {
  const authenticated = useAuth();
  const [menu, setMenu] = useState(false);

  const showMenu = () => setMenu(!menu);

  const isMobile = useMediaQuery({ maxWidth: SCREEN.sm });
  if (isMobile)
    return (
      <>
        <MenuIcon onClick={showMenu}>
          {menu ? <IoIosClose className="text-red-500" /> : <IoMdMenu />}
        </MenuIcon>
        {menu ? (
          <MenuStyled>
            <ListContainer>
              <li className="text-xl md:text-base text-gray-700 font-medium mr-2 md:mr-5 font-Roboto ursor-pointer transition duration-300 ease-in-out lg:text-xl hover:text-gray-500">
                <Link to={"/"}>Home</Link>
              </li>
              <NavItem>
                <Link to={"courses"}>Courses</Link>
              </NavItem>
              <NavItem>
                <NavLink to="/services">Services</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/contact">Contact</NavLink>
              </NavItem>
            </ListContainer>
          </MenuStyled>
        ) : null}
      </>
    );

  return (
    <div className="justify-around flex float-right m-2 items-center">
      <ListContainer>
        <NavItem>
          <Link to="/">Home</Link>
        </NavItem>
        <NavItem>
          <Link to="/courses">Courses</Link>
        </NavItem>
        <NavItem>
          <Link to="/services">Services</Link>
        </NavItem>
        <NavItem>
          <Link to="/contact">Contact</Link>
        </NavItem>
      </ListContainer>
      {authenticated ? (
        <ListContainer>
          <NavItem className="  ">
            <Link className="m-2" to="/admin/dashboard">
              Dashboard
            </Link>
            <Link className="text-white p-2  m-1 rounded-sm bg-pink-400" to="/logout">
              Logout
            </Link>
            
          </NavItem>
          
        </ListContainer>
      ) : (
        <ListContainer>
          <NavItem className="p-2 px-4 m-1 rounded-sm bg-emerald-500">
            <Link className="text-white" to="/login">
              Login
            </Link>
          </NavItem>
          <NavItem className="p-2 px-4 m-1  rounded-sm bg-cyan-500">
            <Link className="text-white" to="/registration">
              Registration
            </Link>
          </NavItem>
        </ListContainer>
      )}
    </div>
  );
}

export default Navber;
