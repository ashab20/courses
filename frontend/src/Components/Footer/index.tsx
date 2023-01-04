import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import Logo from "../../assets/images/logo.png";

const FooterContainer = styled.div`
    min-height:30rem;
    background:#040e08;
    margin:0px auto;
    ${tw`
        w-full mt-10 text-center grid justify-items-center
    `}
`;

const Container = styled.div`
    ${tw`
    text-left grid gap-1 grid-cols-1 md:grid-cols-3 w-10/12 xl:grid-cols-5 justify-items-start sm:justify-items-center  sm:grid-cols-2 
    `}
`;

const ContinerItems = styled.div`
    ${tw`
    p-5 items-start text-left
    `}
`;

const LogoImage = styled.div`
    ${tw`
        w-32 pt-5 pb-3
    `}  

    img{

        }
`;

const Description = styled.p`
        ${tw`
            text-sm text-gray-100 p-1
        `}
`;

const SortTitle =  styled.h4`
    ${tw`
        font-Poppins text-xl text-white p-2 font-extrabold items-start text-left justify-items-start
    `}
`;
const Ul = styled.ul`
    ${tw`
        items-start 
    `}
`;
const Link = styled.li`
    ${tw`
        list-none p-2 text-gray-100
    `}

    a{
        ${tw`
            
        `}
    }
`;

const Service = styled.span`
    ${tw`
    flex 
    `}
`
const Icons = styled.span`

    ${tw`
        bg-green-500 rounded-full font-thin pl-1 pr-1 pt-0.5 pb-0.5
    `}
`;

const ContactItems = styled.h6`
    ${tw`
        text-base text-gray-100 ml-2 pl-2
    `}
`
const DevText = styled.div`
    ${tw`
        text-sm font-thin text-gray-200
    `}
`;

const Footer = () => {
  return (
  <FooterContainer>
      <Container>
      <ContinerItems>

        <LogoImage>
            <img src={Logo} alt="Logo" />
        </LogoImage>
        <Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis molestiae autem illum fugiat,
        </Description>

      </ContinerItems>
{/* Short link */}

<ContinerItems>
    <SortTitle>
        Quick Links
    </SortTitle>
    <Ul>
        <Link>
            <a href='/' > Home</a>
        </Link>
        <Link>
            <a href='/about' > About</a>
        </Link>
        <Link>
            <a href='/services' > Services</a>
        </Link>
        <Link>
            <a href='/contact' > Contact</a>
        </Link>
        <Link>
            <a href='/courses' > Courses</a>
        </Link>
    </Ul>
</ContinerItems>
{/* FAQ */}
<ContinerItems>
    <SortTitle>
        Other Links
    </SortTitle>
    <Ul>
        <Link>
            <a href='/Faq' > FAQ</a>
        </Link>
        <Link>
            <a href='/' > Support</a>
        </Link>
        <Link>
            <a href='/' >Contact Us</a>
        </Link>
        <Link>
            <a href='/' > Privacy Policy</a>
        </Link>
        <Link>
            <a href='/' > Term & Condition</a>
        </Link>
    </Ul>
</ContinerItems>

    <ContinerItems>
        <SortTitle>
            Call Now
        </SortTitle>
        <Service>
            <Icons>
                <FontAwesomeIcon  icon={faPhone}/>
            </Icons>
            <ContactItems>
                (031) 088121
            </ContactItems>
        </Service>
    </ContinerItems>

    <ContinerItems>
        <SortTitle>
            Mail
        </SortTitle>
        <Service>
            <Icons>
                <FontAwesomeIcon  icon={faEnvelope}/>
            </Icons>
            <ContactItems>
                info@gmail.com
            </ContactItems>
        </Service>
    
</ContinerItems>
</Container>
<DevText>
    <p>
        Copyright &copy; {new Date().getFullYear() }. All Right Reserved&#9850;. Design BY &#8491;SHAB UDDIN &trade;
    </p>
</DevText>

  </FooterContainer>
  );
};

export default Footer;
