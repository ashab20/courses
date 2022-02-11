import React from 'react';
import styed from "styled-components"
import tw from "twin.macro"
import { Navbar } from '../../Components/navber';
import CourseTime from '../../Components/CourseTime';
import TopSection from './TopSection';
import Courses from './Courses';
import Services from './Services';
import AboutUs from './AboutUs';
import ShortList from './ShortList';
import Footer from '../../Components/Footer';

const PageContainer = styed.div`

${tw`
    flex
    flex-col
    w-full
    h-full
    items-center
    
`}

`

function HomePage() {
    return (
        <PageContainer>
        
            <Navbar/>
            <TopSection/>
            <CourseTime/>
            <ShortList/>
            <Services/>
            <AboutUs/>
            <Courses/>
            <Footer/>
        </PageContainer>
    )
}

export default HomePage
