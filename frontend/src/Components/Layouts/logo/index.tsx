import React from "react";
import Styled from "styled-components";
import tw from "twin.macro";
import LogoImage from "../../../assets/images/logo.png";
import {Link} from 'react-router-dom'

const LogoContainer = Styled.div`
    ${tw`

    `}
    max-height:40px
`;

// const LogoText = Styled.div`
// ${tw`text-xl md:text-2xl font-bold text-black m-1`}
// `;

const Image = Styled.img`
    width:auto;
    height:40px;
    cursor:pointer;
    ${tw`
        pl-5
        pr-5
        
    `}
   
 `;
const Logo = () => {
  return (
    <LogoContainer>
      <Link to={'/'}>
      <Image src={LogoImage} alt="logo" />
      </Link>
    </LogoContainer>
  );
};

export default Logo;
