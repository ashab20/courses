import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Ilist } from '../../typescript/sortList';
import CourseProps from '../../typescript/CoursesProps';




const CourseDetails = styled.div`
    ${tw`
        bg-green-500 w-72  h-36 max-h-36 opacity-90 rounded-b-md transition-all p-2 justify-items-start text-left
    `}
`;

const ThumbnillTitle = styled.h4`
    ${tw`text-base font-semibold p-2 items-start text-gray-800`}
`;

const ThumbnilDescribe = styled.p`
    ${tw`text-sm text-white pl-2`}
`;

const ThumbnilPrice = styled.span`
    ${tw`text-red-500 font-semibold text-sm ml-2 p-1 mt-2 bg-yellow-400 text-center flex w-2/12`}

    p{
        ${tw`text-gray-600  ml-2 pl-2`}
    }
`;

const CourseThumbnil = styled.div`
    ${tw`
        p-2 float-left 
        // absolute
    `}
     

    img{
        ${tw`h-52 w-72 rounded-t-md cursor-pointer`}

    }
`;




const SortComponent = (props:CourseProps) => {
    const { course_name,description,duration,end_date,price,start_date,id,thumbnile} = props;

    
    return (<CourseThumbnil key={id}>
                <img  src={thumbnile} alt={course_name} />
                <CourseDetails>
                    <ThumbnillTitle>{course_name}</ThumbnillTitle>
                    <ThumbnilDescribe>{description}</ThumbnilDescribe>
                    <ThumbnilPrice>
                        {price}$
                        <p>{price}$ </p>
                    </ThumbnilPrice> 
                </CourseDetails>
                        
            </CourseThumbnil>
        )
    }

export default SortComponent;
