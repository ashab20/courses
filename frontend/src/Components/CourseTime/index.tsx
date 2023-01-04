/* eslint-disable react/style-prop-object */
import React ,{useState}from "react";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import styled, { css } from "styled-components";
import tw from "twin.macro";
import Button from "../Button";
import { SCREEN } from "./../../responsive";

const CardContainer = styled.div`
  box-shadow: 0 1.3px 12px -3px rgba(0, 0, 0, 0.4);
  ${tw`
        flex justify-center items-center rounded-md bg-white select-none pb-2 pl-4 pr-4 pt-2 mb-2 ml-6 mr-6 mt-6 md:mt-10 lg:mt-72
    `}
`;

const ItemContainer = styled.div`
  ${tw`
    cursor-pointer flex relative  p-1 
    `}
`;
const Icon = styled.span`
  ${tw`
        text-green-500 fill-current text-xs md:text-base mr-1 md:mr-2
    `}
    ${({redIcon}: any ) => redIcon && css`{
        ${tw`text-red-500`}
    }` as any }
`as any;

const Name = styled.span`
  ${tw`
        text-gray-600 text-xs md:text-sm  
    `}
    
`;

const LineSeperator = styled.span`
  width: 2px;
  height: 45%;
  z-index: 1;
  ${tw`bg-gray-300 mr-2 ml-2 md:mr-5 md:ml-5  text-transparent`}
`;

const DateCalendar:any = styled(Calendar)`
    max-width: none;
    position:absolute;
    font-family:"Poppins";
    border: 1px solid #ddd;
    top: 3.5rem;
    border-radius: 15px;
    left: -1rem;
    z-index:100;

    ${({offset}: any ) => offset && css`{
        left:-1.5rem;
       @media (max-width:${SCREEN.sm}){ left: -4.5rem;z-index:-1;}
    }` as any }


}
`as any;

const CourseTime = () => {
 const [startDate, setStartDate] = useState(false);
 const [endDate, setEndtDate] = useState(false);


 const startDateHandler = () => {
    setStartDate(!startDate);
    if(endDate)
    setEndtDate(!endDate);
    
 }

 const endDateHandler = () => {
    setEndtDate(!endDate);
    if(startDate){
        setStartDate(!startDate);
    }
 }

  return (
    <CardContainer>
        
      <ItemContainer 
      className={`${startDate ? 'border-b-2 border-b-green-500' : null}`}
      onClick={startDateHandler}>
        <Icon>
          <FontAwesomeIcon icon={faCalendarAlt} />
        </Icon>
        <Name>Course Start Date</Name>
        { startDate && <DateCalendar />}
      </ItemContainer>
    
      <LineSeperator> | </LineSeperator>
      
      <ItemContainer 
      className={`${endDate ? 'border-b-2 border-b-pink-500 z-10' : null}`}
      onClick={endDateHandler}>
        <Icon redIcon>
          <FontAwesomeIcon icon={faCalendarAlt} />
        </Icon>
        <Name>Course End Date</Name>
       {endDate && <DateCalendar offset />}
      </ItemContainer>
      <LineSeperator/>
      <Button text="Apply Date" />
    </CardContainer>
  );
};

export default CourseTime;
