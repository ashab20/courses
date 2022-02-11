import { faDesktop,faCode , faFillDrip,faTape} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React from 'react';
import styled, { css } from "styled-components";
import tw from 'twin.macro';
// import data from "../../../Data/data.json";



const Container = styled.div`
    ${tw`
        w-full grid items-center pt-3 mt-6 lg:mt-20 pb-3
        lg:pt-6 lg:pb-6 lg:w-10/12
    `}

    
`;


const Title = styled.h2`
    ${tw`
        text-xl text-black font-extrabold mt-10
        lg:text-4xl 

    `}
`;


const StepContainer = styled.div`
    // border: 2px solid palegreen;

    &:nth-child(1){
        transform: skewY(-5deg);
        
    }
    &:nth-child(2){
        transform: skewY(5deg);

        @media (max-width:640px){
            margin-top:2rem;
        }
    }
    &:nth-child(3){
        transform: skewY(5deg);

        @media (max-width:960px){
            margin-top:2rem;
        }
        
    }
    &:nth-child(4){
        transform: skewY(-5deg);
        @media (max-width:960px){
            margin-top:2rem;
        }
    }



    ${tw`
    
        w-full items-center transition-all  p-4 text-center rounded-xl pb-6 pt-6 
        hover:border-blue-300  hover:text-green-500
    `}

    // &:hover{
    //     
    // }
`;


const MiniContainer = styled.div`
    ${tw`
        grid gap-1 grid-cols-1 justify-evenly mt-7 p-3
        md:gap-3  md:grid-cols-2 sm:grid-cols-2   
        xl:grid-cols-2 
        lg:gap-1 lg:mt-16 lg:pr-10 lg:pl-10
    `}
    // &:hover (${StepContainer}){
    //     transform: skewY(0deg);
    // }
`;

const Step = styled.div`
box-shadow: 0 1.3px 12px -3px rgba(0, 0, 0, 0.4);

    ${tw`
        rounded-lg items-center justify-center p-6 w-24 inline-table 
    `}
`;

const StepTitle = styled.h4`
    ${tw`
        text-sm text-black sm:text-lg font-semibold pt-4 font-Poppins
    `}
`;

// const StepDescription = styled.p`
//     ${tw`
//         text-sm md:text-sm  items-center justify-items-start pl-5 pr-5 lg:pl-16 lg:pr-16 text-gray-600 
//     `}
// `;

const StepIcon =  styled.span`
    ${tw`text-red-500 text-3xl rotate-45 `}

    ${({green}:any) => green && css`
    ${tw` text-green-500`}
    `as any}

    ${({pink}:any) => pink && css`
    ${tw` text-pink-500 `}
    `as any}

    ${({yellow}:any) => yellow && css`
    ${tw` text-yellow-500 `}
    `as any}
`as any;

// const RightTik = () => {
//     return(
//         <span className='text-xl text-green-500'>
//             &#9745;
//         </span>
//     );
// }

// const CrossTik  = () => {
//     return(
//         <span className='text-xl text-red-500'>
//             &#9746;
//         </span>
//     );
// }



const BrifCourses = () => {
    return (
        <Container>
            <Title>
                Courses
            </Title>
            <MiniContainer>
                <StepContainer>
                    <Step>
                        <StepIcon yellow>
                            <FontAwesomeIcon icon={faDesktop}/>
                        </StepIcon>
                    </Step>
                    <StepTitle>
                        Computer Fundamental
                    </StepTitle>
                    {/* <StepDescription>
                    <ul>
                        <li>	<RightTik/> Basic Computer</li>
                        <li> 	<RightTik/> MS Word</li>    
                        <li>	<RightTik/> MS Excel</li>
                        <li>	<RightTik/> MS Access</li>  
                        <li>	<RightTik/> MS Power Point</li>
                    </ul>
                    </StepDescription>   */}
                </StepContainer>
                <StepContainer>
                    <Step>
                        <StepIcon green>
                            <FontAwesomeIcon icon={faCode}/>
                        </StepIcon>
                    </Step>
                    <StepTitle>
                        Web Devlopment
                    </StepTitle>
                    {/* <StepDescription>
                    <ul>
                        <li>	<RightTik/> HTML | CSS | JAVAsCRIPT</li>
                        <li> 	<RightTik/> ES6 | ES7 MODERN JS</li>    
                        <li>	<RightTik/> REACT NEST JS</li>
                        <li>	<RightTik/> NODE JS | EXPRESS </li>  
                        <li>	<RightTik/> moogoDB | REST API</li>
                    </ul>
                    </StepDescription>   */}
                </StepContainer>
                <StepContainer>
                    <Step>
                        <StepIcon pink>
                            <FontAwesomeIcon icon={faFillDrip}/>
                        </StepIcon>
                    </Step>
                    <StepTitle>
                        Graphic Design
                    </StepTitle>
                    {/* <StepDescription>
                    <ul>
                        <li>	<RightTik/> Adobe Photshop</li>
                        <li> 	<RightTik/> Adobe Illustrator</li>    
                        <li>	<RightTik/> GIMP</li>
                        <li>	<RightTik/> Inkscape</li>  
                        <li>	<RightTik/> 2D Graphic</li>
                    </ul>
                    </StepDescription>   */}
                </StepContainer>
                <StepContainer>
                    <Step>
                        <StepIcon >
                            <FontAwesomeIcon icon={faTape}/>
                        </StepIcon>
                    </Step>
                    <StepTitle>
                        Video Editing
                    </StepTitle>
                    {/* <StepDescription>
                    <ul>
                        <li>	<RightTik/> Adobe Premire Pro</li>
                        <li> 	<RightTik/> Adobe Afther Effect</li>    
                        <li>	<RightTik/> Audacity</li>
                        <li>	<RightTik/> Reslove</li>  
                        <li>	<RightTik/> 3D animation</li>
                    </ul>
                    </StepDescription>   */}
                </StepContainer>
            </MiniContainer>

        </Container>
    )
}

export default BrifCourses;
