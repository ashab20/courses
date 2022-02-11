import React  from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import CoursesList from '../../Components/Courses';

// import { useMediaQuery } from 'react-responsive';
// import { SCREEN } from '../../../responsive';

const Container  =styled.div`
    ${tw`
        w-full 
        md:pl-3 md:pr-3 
        lg:pl-6 lg:pr-6 lg:mt-20 
        xl:w-10/12
        mt-10 items-center justify-center text-align[center]
    ` }
    
`;

const Title = styled.h2`
    ${tw`font-Courgette text-2xl text-black pb-5 pl-3 font-extrabold` }
    text-align:left;
`;

const Course = styled.div`
    ${tw`
    grid grid-cols-1 text-center justify-center grid-auto-flow[dense] 
    md:grid-cols-2 md:gap-1
    lg:grid-cols-3 xl:grid-cols-4 mx:grid-cols-5    
    
    `}
`;

const ShortList = () => {
    // const [current, SetCurrent] = useState(0);
    // const isMobile = useMediaQuery({maxWidth: SCREEN.md});
    
const textList1 = {   Id:1,
        Thumbnile:require("../../../assets/images/CourseThumbnils/django-course-thumbnail.jpg"),
        Name:"Paython Diango",
        PriceOfDis:50,
        Price:70,
        Description:"Paython HTML, CSS, XMLS",
        Include: [
            "-Server Side rendering ",
            "-Backend ",
            "-SEO ",
            "-Responsive Design ",
        ],
        Project: 8,
        Certificate:3,
    };
const textList2 = {
        Id:2,
        Thumbnile:require("../../../assets/images/CourseThumbnils/MERN-Stack.jpg"),
        Name:"MERN Stock",
        PriceOfDis:120,
        Price:400,
        Description:"React,Node, Express, MongoDB, Mongoos",
        Include: [
            "-Font-end web development ",
            "-Back-end web development ",
            "-HTML,CSS ,Bootrstrap ",
            "-Tailwind CSS ",
            "-Saas/ SCSS ",
            "-Leanding page design ",
            "-Mobile responsive design ",
            "-Radis Catch server ",
            "-CLient side rendering ",
        ],
        Project: 15,
        Certificate:3,
    };
    const textList3 = {
        Id:3,
        Thumbnile:require("../../../assets/images/CourseThumbnils/laravel-php-framework.jpg"),
        Name:"PHP Laravel",
        PriceOfDis:30,
        Price:50,
        Description:"HTML, CSS, JavaScript,Jquery, PHP, Sqli, Wordpress",
        Include: [
            "-HTML,CSS,Bootstrap ",
            "-Visual Effect",
            "-Background and object Remove ",
            "-2D/3D Effect ",
            "-Logo design ",
            "-Banner Design ",
            "T-shirt Design ",
        ],
        Project: 10,
        Certificate:2,
    };
    const textList4 = {
        Id:4,
        Thumbnile:require("../../../assets/images/CourseThumbnils/react-js.png"),
        Name:"React Js",
        PriceOfDis:100,
        Price:150,
        Description:"JSX, React js , React Hooks,Rest API,GraphQl",
        Include: [
            "*JSX Element", <br />,
            "*Font-end Development",<br />,
            "*Background & object Remove",<br />,
            "*2D/3D Effect",<br />,
            "*Logo design",<br />,
            "*Banner Design",<br />,
            "*T-shirt Design",
        ],
        Project: 10,
        Certificate:2,
    };
    const textList5 = {
        Id:5,
        Thumbnile:require("../../../assets/images/CourseThumbnils/graphic-design-trends-for-2021.jpg"),
        Name:"Graphic Design",
        PriceOfDis:80,
        Price:180,
        Description:"Adobe PhotoShop, Adobe Illustrator, Gimp, Inkscape",
        Include: [
            "-Couraization",<br />,
            "-Visual Effect",
            "-Background and object Remove",
            "-2D/3D Effect",
            "-Logo design",
            "-Banner Design",
            "T-shirt Design",
        ],
        Project: 10,
        Certificate:2,
    };


const CoursesComponent = () => {

    return (
        <>
    <CoursesList {...textList1} />
    <CoursesList {...textList3} />
    <CoursesList {...textList2} />
    <CoursesList {...textList4} />
    <CoursesList {...textList5} /> 
    <CoursesList {...textList1} />
    <CoursesList {...textList3} />
        </>
    )
}

    return (
        <Container>
            <Title>
                Future Courses
            </Title>            
            <Course>
                <CoursesComponent/>
            </Course>
        </Container>
    )
}

export default ShortList;