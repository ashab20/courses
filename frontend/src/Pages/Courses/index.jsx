import { useQuery, useQueryClient } from "react-query";
import Courses from "../../Components/Courses";
import Loading from "../../Components/Loading";
import { getAllCourse } from "../../features/courses/couresApi";

const CoursePage = () => {
  // const [course,setCourses] = useState('');
  const querClients = new useQueryClient();
  const {
    isLoading,
    isError,
    error,
    data: courses,
  } = useQuery("courses", getAllCourse);

  let content;
  if (isError && error) content = <p className="text-red-500">{error}</p>;
  if (isLoading) content = <Loading />;

  if (!isLoading && !isError && courses.data.length === 0)
    content = <p>Data not found!</p>;
  if (!isLoading && !isError && courses.data.data.length > 0)
    content = courses.data.data.map((course) => (
      <Courses course={course} key={course.id} />
    ));

  return (
    <div className="container-fluid px-4">
      <div className="justify-center my-10 text-center">
        <h4 className="title">Courses</h4>
      </div>
      <div className="grid  xl:grid-cols-5 gap-4 mx-2">{content}</div>
    </div>
  );
};

export default CoursePage;
