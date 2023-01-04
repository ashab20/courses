import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import AboutImg from "../../assets/images/about.jpg"
import Button from "../../Components/Button";

const AboutContainer = styled.div`
  ${tw`
        w-full xl:w-10/12 mt-20 grid grid-cols-1 md:grid-cols-2 mb-10 pl-3 pr-3
    `}
`;

const AbountWraper = styled.div`
  ${tw`
        p-2 w-full  lg:rounded-tl-xl md:rounded-t-none md:rounded-tl-xl md:rounded-bl-xl lg:rounded-bl-xl justify-self-start items-start md:ml-1 
    `}
    background: linear-gradient(105deg, #149974,#0b050c);
    text-align:left;

    @media (max-width:767px){
          border-top-right-radius: .5rem;
          border-top-left-radius: .5rem; 
          background: linear-gradient(190deg, #149974,#0b050c);
    }
`;

const AboutTitle = styled.h2`
  ${tw` 
    text-white text-xl p-4 font-Roboto font-semibold justify-start
`}

    text-align: justify;
    justify-items: center;
    justify-content: center;
`;

const AboutDescription = styled.p`
  ${tw`
    text-sm text-white pl-4 pr-4 
`}
text-align:justify;
justify-content:right;
`;

// secend section of the about section

const ImageWrapper = styled.div`
  ${tw`
        w-full 
    `}

  img {
    width: 100%;
    height:420px;

    @media (max-width:767px){
          max-height:300px!important;
          border-bottom-right-radius: .5rem;
          border-bottom-left-radius: .5rem; 
    }
   

    ${tw` md:rounded-br-xl md:rounded-tr-xl lg:mr-5`}
  }
`;

const BUttonComponent = styled(Button)`
  ${tw`
    ml-4 mt-6 hover:text-white bg-yellow-700 hover:border-transparent hover:bg-green-500
  `}
`;

const AboutUs = () => {
  return (
    <AboutContainer>
      <AbountWraper>
        <AboutTitle>About Us</AboutTitle>
        <AboutDescription>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          eum laudantium eaque voluptas aut omnis tempora sint quas incidunt
          doloribus. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quis dolores omnis repellat repellendus obcaecati tempore! Culpa eaque
          quas deleniti aut expedita, eius vel animi dignissimos, qui debitis
          nulla sit quae mollitia repellat quisquam nisi praesentium maiores
          beatae aliquid voluptates ullam nam, dolor libero. Alias rerum totam
        </AboutDescription>
        <BUttonComponent text="Take a Tour"/>
      </AbountWraper>
      <ImageWrapper>
        <img src={AboutImg} height="400px" alt="about us" />
      </ImageWrapper>
    </AboutContainer>
  );
};

export default AboutUs;
