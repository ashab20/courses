import React, { useState }from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Ilist } from '../../../typescript/sortList';
import Button from '../Button';
import {faChevronCircleDown, faChevronCircleUp} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface CoursesProps extends Ilist{
    Include: object;
    Project:number;
    Certificate:number;
}



const CourseDetails = styled.div`
    ${tw`
        rounded-b-md transition-all pt-2 justify-items-start text-left
    `}
`;

const ThumbnillTitle = styled.h4`
    ${tw`text-base font-semibold pl-2 items-start text-gray-800`}
`;

const ThumbnilDescribe = styled.p`
    ${tw`text-base font-thin p-2 text-gray-700 font-Poppins text-justify`}
`;

const ThumbnilPrice = styled.span`
    ${tw`text-red-500 font-semibold text-sm ml-2 pl-2 mt-1 bg-yellow-400 text-right flex w-3/12 items-center`}

    p{
        ${tw`text-gray-600  ml-2 pl-2`}
    }
`;

const CourseThumbnil = styled.div`
    ${tw`
        p-2 
        // float-left 
        // absolute
    `}
     

    img{
        ${tw`  rounded-t-md cursor-pointer vertical-align[middle]`}

    }
`;

const MoreDes = styled.div`
    ${tw`
        bg-indigo-50 p-1 rounded-b-md 
    `}
`;

const MoreSection = styled.div`
    ${tw`
        grid grid-cols-3 p-1 
    `}
`;

const MoreTitle = styled.h4`
    ${tw` 
        text-gray-900 text-xl pt-0.5  font-Courgette
    `}
`;
const Moretext = styled.p`
    ${tw`
        text-gray-600 pt-1 justify-start font-Roboto text-justify pr-2 col-span-2
    `}
`
const ButtonSection =styled.div`
    ${tw`
    justify-between grid grid-cols-2
    `}
`;

const Span = styled.span`
    ${tw`
        text-right  cursor-pointer text-xl p-3 items-center  justify-center 
    `}
`;


const Courses = (props:CoursesProps) => {
    const [ showDetails, setShowDetails] = useState(false);

    const showDetailsHandler = () => {
        setShowDetails(!showDetails);
    }

    const { Id, Name, Description ,Include, Project, PriceOfDis,Price, Thumbnile,Certificate} = props;

    
    return (<CourseThumbnil key={Id}>
                <img  src={Thumbnile} alt={Name} />
                <CourseDetails>
                    <ThumbnillTitle>{Name}</ThumbnillTitle>
                        <MoreSection>

                        <MoreTitle className='pl-1'>
                            Price:
                        </MoreTitle>
                        <ThumbnilPrice>
                        {PriceOfDis}$
                        <p>{Price}$ </p>
                        </ThumbnilPrice> 
                        </MoreSection>
                    {/* condition will set here */}
                    {!showDetails && 
                    <ThumbnilDescribe>
                        {Description}
                    </ThumbnilDescribe> }
                    <ButtonSection>

                    <Button text='Buy Now'/>
                    <Button text='Add to Card' theme='Filled'/>
                        <Span onClick={showDetailsHandler}>
                        { showDetails ? <FontAwesomeIcon icon={faChevronCircleUp}/>:  <FontAwesomeIcon icon={faChevronCircleDown}/>}    
                        </Span>
                    </ButtonSection>
                    { showDetails && 
                    <MoreDes>
                        <MoreSection>
                        <MoreTitle>
                            Include:
                        </MoreTitle>
                        <Moretext>
                            {Include}
                        </Moretext>
                        </MoreSection>
                        <MoreSection>
                        <MoreTitle>
                            Project:
                        </MoreTitle>
                        <Moretext>
                            {Project}
                        </Moretext>
                        </MoreSection>
                        <MoreSection>
                        <MoreTitle>
                            Certificate:
                        </MoreTitle>
                        <Moretext>
                            {Certificate}
                        </Moretext>
                        </MoreSection>
                    </MoreDes>
}
                </CourseDetails>
                        
            </CourseThumbnil>
        )
    }

export default Courses;