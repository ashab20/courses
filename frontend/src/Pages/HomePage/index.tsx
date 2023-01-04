import styed from "styled-components";
import tw from "twin.macro";
import CourseTime from "../../Components/CourseTime";
import AboutUs from "./AboutUs";
import Courses from "./Courses";
import Services from "./Services";
import ShortList from "./ShortList";
import TopSection from "./TopSection";


function HomePage() {
  return (
    <div className="flex flex-col w-full h-auto items-center">
      <TopSection />
      <CourseTime />
      {/* <ShortList /> */}
      <Services />
      <AboutUs />
      <Courses />
    </div>
  );
}

export default HomePage;
