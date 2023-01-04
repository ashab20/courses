import styled from "styled-components";
import tw from "twin.macro";
// import LearnImage from "../../../assets/images/learn_Land_1.svg";
import { Link } from "react-router-dom";
import bg_image from "../../assets/images/back_svg.svg";
import TopSectionImg from "../../assets/images/top_section.jpg";
import Button from "../../Components/Button";
import { SCREEN } from "../../responsive";

const TopSecContainer = styled.div`
  min-height: 400px;
  width: 100%;

  ${tw`
        w-full xl:w-10/12 grid overflow-x-hidden xl:overflow-visible
        max-w-screen-2xl grid-cols-2
        pr-4 pl-4 justify-between 
        // md:pl-10 md:pr-10 lg:pr-12 lg:pl-12
    `}
`;

const LeftContainer = styled.div`
  ${tw`
        w-full lg:mt-20 mt-10
    `}
`;
const Slogo = styled.h1`
  ${tw`
    font-bold text-2xl text-justify xl:text-6xl sm:text-3xl md:text-5xl lg:font-black lg:text-justify lg:mt-10 text-black mb-4 sm:leading-snug lg:leading-normal xl:leading-relaxed md:font-extrabold
`}
`;

const Description = styled.p`
  ${tw` 
        text-xs text-justify p-1 lg:text-xl lg:text-justify  xl:text-lg sm:max-h-full overflow-hidden max-h-full text-gray-800
    `}
`;

const RightContainer = styled.div`
  ${tw`
    w-full relative overflow-hidden lg:overflow-visible
`}
  // // background:url(${bg_image});
    // z-index:-1;
    // max-height:600px;
    @media (max-width: ${SCREEN.md}) {
    overflow: hidden;
  }
`;

const ImageContainer = styled.div`
  // width:15rem;
  // height:10rem;
  position: absolute;
  right: -1.3rem;
  // top:2rem;
  z-index: -1;

  img {
    width: 100%;
    height: auto;
    // max-height:max-content;
  }
  // @media (min-width: ${SCREEN.sm}){
  //     width:40rem;
  //     max-height: 10rem;
  //     right:-3rem;
  //     top:-14rem;

  // }

  // @media (min-width: ${SCREEN.lg}){
  //     width:50rem;
  //     max-height: 40rem;
  //     right:-2rem;
  //     top:-10rem;
  // }
  // @media (min-width: ${SCREEN.xl}){
  //     width:50rem;
  //     max-height: 40rem;
  //     right:-6rem;
  //     top:-10rem;

  // }
`;

const SpanContainer = styled.span`
  ${tw`text-green-500`}
`;

const ButtonContainer = styled.div`
  ${tw`
        mt-3 text-left 
    `}
`;

const TopSection = () => {
  return (
    <TopSecContainer>
      <LeftContainer>
        <Slogo>
          Build <SpanContainer> your skill</SpanContainer> to the next{" "}
          <SpanContainer> level. </SpanContainer>
        </Slogo>
        <Description>
          Expend your free time to build a prfessional career with our
          instractor. Choice your time to spend and engaige with your favorite
          course.
        </Description>
        <ButtonContainer>
          {/* <Button text="Buy Now" /> */}
          <Link
            className="bg-green-500 hover:bg-transparent hover:text-green-500 hover:border-pink-400 pl-5 pr-5 pt-3 pb-3 outline-none rounded-md text-white text-xs font-semibold border-transparent border-2 border-solid focus:outline-none transition-all duration-200 ease-in-out m-1"
            to={"courses"}
          >
            Courses
          </Link>
        </ButtonContainer>
      </LeftContainer>
      <RightContainer>
        <ImageContainer>
          <img src={TopSectionImg} alt="Build Career" />
        </ImageContainer>
      </RightContainer>
    </TopSecContainer>
  );
};

export default TopSection;
