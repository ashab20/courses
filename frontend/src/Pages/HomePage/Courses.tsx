// import { useMediaQuery } from 'react-responsive';
// import { SCREEN } from '../../../responsive';

import { useQuery } from "react-query";
import Courses from "../../Components/Courses";
import Loading from "../../Components/Loading";
import { getAllCourse } from "../../features/courses/couresApi";

const ShortList = () => {
  // const querClients = new useQueryClient();
  const {
    isLoading,
    isError,
    error,
    data: courses,
  } = useQuery("courses", getAllCourse, {
    select: ({data}) => data.data.sort((a: any, b: any) => b.id - a.id),
  });

  let content;
  if (isError && error) content = <p className="text-red-500">{error}</p>;
  if (isLoading) content = <Loading />;
  if (!isLoading && !isError && courses.length === 0)
    content = <p>Data not found!</p>;

  if (!isLoading && !isError && courses.length > 0)
    content = courses.map((course: any) => (
      <Courses course={course} key={course.id} />
    ));

  return (
    <div
      className=" w-full 
        md:pl-3 md:pr-3 
        lg:pl-6 lg:pr-6 lg:mt-20 
        xl:w-10/12
        mt-10 items-center justify-center text-align[center]"
    >
      <h3 className="title text-3xl my-5">Future Courses</h3>
      <div className="grid grid-cols-1 text-center justify-center grid-auto-flow[dense]  md:grid-cols-2 md:gap-3 lg:grid-cols-3 xl:grid-cols-4 mx:grid-cols-5">
        {content}
      </div>
    </div>
  );
};

export default ShortList;
