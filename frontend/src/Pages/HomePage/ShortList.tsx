import Carousel, { Dots, slidesToShowPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { useState } from "react";
import { useQuery } from "react-query";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import tw from "twin.macro";
import SortComponent from "../../Components/ShortList/SortComponent";
import { getAllCourse } from "../../features/courses/couresApi";
import { SCREEN } from "../../responsive";
import CourseProps from "../../typescript/CoursesProps";
import { Ilist } from "../../typescript/sortList";

const ShortContainer = styled.div`
  ${tw`
        w-full md:w-10/12 lg:pl-6 lg:pr-6 lg:mt-20 mt-10 items-center justify-center
    `}
`;

const SortTitle = styled.h2`
  ${tw`font-Courgette text-2xl text-black pb-5 pl-3 font-extrabold`}
  text-align:left;
`;

const SortCourse = styled.div`
  ${tw`
        text-center
    `}
`;

const ShortList = () => {
  const {
    isLoading,
    isError,
    error,
    data: course,
  } = useQuery(["Courses"], getAllCourse);
  const [current, SetCurrent] = useState(0);
  const isMobile = useMediaQuery({ maxWidth: SCREEN.md });

  const textList1: Ilist = {
    Id: 1,
    Name: "Paython Diango",
    Description: "Paython HTML, CSS, XMLS",
    PriceOfDis: 50,
    Price: 70,
    Thumbnile: require("../../assets/images/CourseThumbnils/django-course-thumbnail.jpg"),
  };

  let content: {};

  // if (!isLoading && !isError && course.data.data.length > 0)
  //   content = course.data.data.map((c: CourseProps) => ( c.id > 10 &&
  //     <SortComponent {...c} />
  //   ));
  // if(isLoading) content = [<Loading/>]
  // if(isError) content = [<p>{error}</p>]

  const list = [content];
  return (
    <ShortContainer>
      <SortTitle>Popular Courses</SortTitle>

      <SortCourse>
        <Carousel
          value={current}
          onChange={SetCurrent}
          plugins={[
            "CLickToChange",
            {
              resolve: slidesToShowPlugin,
              options: {
                numberOfSlides: 5,
              },
            },
          ]}
          breakpoints={{
            640: {
              plugins: [
                "CLickToChange",
                {
                  resolve: slidesToShowPlugin,
                  options: {
                    numberOfSlides: 1,
                  },
                },
              ],
            },
            900: {
              plugins: [
                "CLickToChange",
                {
                  resolve: slidesToShowPlugin,
                  options: {
                    numberOfSlides: 2,
                  },
                },
              ],
            },
            1500: {
              plugins: [
                "CLickToChange",
                {
                  resolve: slidesToShowPlugin,
                  options: {
                    numberOfSlides: 3,
                  },
                },
              ],
            },
            1820: {
              plugins: [
                "CLickToChange",
                {
                  resolve: slidesToShowPlugin,
                  options: {
                    numberOfSlides: 4,
                  },
                },
              ],
            },
          }}
        >
          {/* {content} */}
        </Carousel>

        <Dots
          value={current}
          onChange={SetCurrent}
          number={isMobile ? list.length : Math.ceil(list.length / 3)}
        />
      </SortCourse>
    </ShortContainer>
  );
};

export default ShortList;
