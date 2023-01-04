import Styled from "styled-components";
import tw from "twin.macro";
import Logo from "../logo";
import Navber from "./Navber";

const NavContainer = Styled.div`
  z-index: 1000;
  margin:auto;
${tw`
    flex 
    flex-row
    w-full
    max-w-screen-2xl
    
    items-center 
    justify-between
    // lg:w-10/12
    lg:pl-6 
    lg:pr-6 
`}
`;
export const Header = () => {
  return (
    <NavContainer>
      <Logo />
      <Navber />
    </NavContainer>
  );
};
