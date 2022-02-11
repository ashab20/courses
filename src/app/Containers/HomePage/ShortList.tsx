import React, {useState} from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import { Ilist } from '../../../typescript/sortList';
import Carousel, {Dots, slidesToShowPlugin} from "@brainhubeu/react-carousel";
import '@brainhubeu/react-carousel/lib/style.css';
import SortComponent from '../../Components/ShortList/SortComponent';
import { useMediaQuery } from 'react-responsive';
import { SCREEN } from '../../../responsive';

const ShortContainer  =styled.div`
    ${tw`
        w-full md:w-10/12 lg:pl-6 lg:pr-6 lg:mt-20 mt-10 items-center justify-center
    ` }
    
`;

const SortTitle = styled.h2`
    ${tw`font-Courgette text-2xl text-black pb-5 pl-3 font-extrabold` }
    text-align:left;
`;

const SortCourse = styled.div`
    ${tw`
        text-center
    `}
`;

const ShortList = () => {
    const [current, SetCurrent] = useState(0);
    const isMobile = useMediaQuery({maxWidth: SCREEN.md});
    
const textList1:Ilist = {   Id:1,
        Name:"Paython Diango",
        Description:"Paython HTML, CSS, XMLS",
        PriceOfDis:50,
        Price:70,
        Thumbnile:require("../../../assets/images/CourseThumbnils/django-course-thumbnail.jpg")
    };
const textList2:Ilist = {
        Id:2,
        Name:"MERN Stock",
        Description:"React,Node, Express, MongoDB, Mongoos",
        PriceOfDis:120,
        Price:400,
        Thumbnile:require("../../../assets/images/CourseThumbnils/MERN-Stack.jpg")
    };
    const textList3:Ilist = {
        Id:3,
        Name:"PHP Laravel",
        Description:"HTML, CSS, JavaScript,Jquery, PHP, Sqli, Wordpress",
        PriceOfDis:30,
        Price:50,
        Thumbnile:require("../../../assets/images/CourseThumbnils/laravel-php-framework.jpg")
    };
    const textList4:Ilist = {
        Id:4,
        Name:"React Js",
        Description:"JSX, React js , React Hooks,Rest API,GraphQl",
        PriceOfDis:100,
        Price:150,
        Thumbnile:require("../../../assets/images/CourseThumbnils/react-js.png")
    };
    const textList5:Ilist = {
        Id:5,
        Name:"Graphic Design",
        Description:"Adobe PhotoShop, Adobe Illustrator, Gimp, Inkscape",
        PriceOfDis:80,
        Price:180,
        Thumbnile:require("../../../assets/images/CourseThumbnils/graphic-design-trends-for-2021.jpg")
    };


const list = [      <SortComponent {...textList1} />,
                    <SortComponent {...textList2} />,
                    <SortComponent {...textList3} />,
                    <SortComponent {...textList4} />,
                    <SortComponent {...textList5} />
                ]

    return (
        <ShortContainer>
            <SortTitle>
                Popular Courses
            </SortTitle>
            
            <SortCourse>

                <Carousel 
                value={current} 
                slides={list}
                onChange={SetCurrent} 

                plugins={[
                    "CLickToChange",{
                    resolve: slidesToShowPlugin,
                    options:{
                        numberOfSlides:5,
                    },
                }
                ]}
                breakpoints={{
                    640:{
                        plugins:[
                    "CLickToChange",{
                    resolve: slidesToShowPlugin,
                    options:{
                        numberOfSlides:1,
                    }
                },
                ]},
                    900:{
                        plugins:[
                    "CLickToChange",{
                    resolve: slidesToShowPlugin,
                    options:{
                        numberOfSlides:2,
                    }
                },
                ]},
                    1500:{
                        plugins:[
                    "CLickToChange",{
                    resolve: slidesToShowPlugin,
                    options:{
                        numberOfSlides:3,
                    }
                },
                ]},
                    1820:{
                        plugins:[
                    "CLickToChange",{
                    resolve: slidesToShowPlugin,
                    options:{
                        numberOfSlides:4,
                    }
                },
                ]},
                }}/>
                
                    <Dots value={current} onChange={SetCurrent} 
                    number={ isMobile ? list.length : Math.ceil(list.length / 3)}/> 
            </SortCourse>
        </ShortContainer>
    )
}

export default ShortList
