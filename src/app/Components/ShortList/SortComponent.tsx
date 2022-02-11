import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Ilist } from '../../../typescript/sortList';

interface IListProps extends Ilist{

}



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




const SortComponent = (props:IListProps) => {
    const { Id, Name,Description , PriceOfDis,Price, Thumbnile} = props;

    
    return (<CourseThumbnil key={Id}>
                <img  src={Thumbnile} alt={Name} />
                <CourseDetails>
                    <ThumbnillTitle>{Name}</ThumbnillTitle>
                    <ThumbnilDescribe>{Description}</ThumbnilDescribe>
                    <ThumbnilPrice>
                        {PriceOfDis}$
                        <p>{Price}$ </p>
                    </ThumbnilPrice> 
                </CourseDetails>
                        
            </CourseThumbnil>
        )
    }

export default SortComponent;
