import { useState } from "react";
import {Link} from 'react-router-dom'
import { useMutation, useQuery, useQueryClient } from "react-query";
import {
  addCourse,
  deleteCourse,
  getAllCourse,
  updateCourse,
} from "../.../../../features/courses/couresApi";
import Loading from "../../Components/Loading";

import CourseProps from "../../typescript/CoursesProps";

const AdminCourseList = () => {
  const queryClient = useQueryClient();
  const [modal, setModal] = useState(false);
  const [courseData, setCourseData] = useState({
    id: undefined,
    course_name: "",
    thumbnile: "",
    description: "",
    duration: "",
    start_date: "",
    end_date: "",
    price: 0,
  });
  const {
    isLoading,
    isError,
    error,
    data: courses,
  } = useQuery(["Courses"], getAllCourse);

  const addCourseMutation = useMutation(addCourse, {
    onSuccess: ({ data }) => {
      setCourseData({
        id: undefined,
        course_name: "",
        thumbnile: "",
        description: "",
        duration: "",
        start_date: "",
        end_date: "",
        price: 0,
      });
      setModal(!modal);
      queryClient.invalidateQueries("Courses");
    },
    onError: ({ message }) => {
      // console.log(message);
    },
  });
  const deleteCourseMutation = useMutation(deleteCourse, {
    onSuccess: ({ data }) => {
      queryClient.invalidateQueries("Courses");
    },
    onError: ({ message }) => {
      // console.log(message);
    },
  });
  const updateCourseMutation = useMutation(updateCourse, {
    onSuccess: ({ data }) => {
      setCourseData({
        id: undefined,
        course_name: "",
        thumbnile: "",
        description: "",
        duration: "",
        start_date: "",
        end_date: "",
        price: 0,
      });
      setModal(!modal);
      queryClient.invalidateQueries("Courses");
    },
    onError: ({ message }) => {
      // console.log(message);
    },
  });

  //   course content
  let CourseRow: {};
  if (isError) CourseRow = <h4 className="text-red-500 text-2xl">{error}</h4>;
  if (!isError && !isLoading && courses.data.data.length > 0)
    CourseRow = courses.data.data.map((course: CourseProps) => {
      return (
        <tr
          key={course.id}
          className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
        >
          <th
            scope="row"
            className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            {course.course_name}
          </th>
          <td className="py-4 px-6">{course.description}</td>
          <td className="py-4 px-6">
            {course.duration} ({course.start_date} to {course.end_date})
          </td>
          <td className="py-4 px-6">{course.price} BDT</td>
          <td className="py-4 px-6">
            <img src={course.thumbnile} alt="thumnile" width="100px" />
          </td>
          <td className="py-4 px-6 justify-between">
            <button
              type="button"
              onClick={() => updateModal(course)}
              className="font-medium bg-blue-600 m-2 text-white py-2 rounded-sm px-4 dark:text-blue-500 hover:underline"
            >
              Edit
            </button>
            <button
              type="button"
              onClick={() => deleteCourseHandler(course)}
              className="font-medium bg-red-500 p-2 rounded-sm text-white dark:text-blue-500 hover:underline"
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });

  // Handle submit function
  const handleSubmit = (e: any) => {
    e.preventDefault();
    // console.log(courseData);
    if (courseData.id === undefined) {
      addCourseMutation.mutate(courseData);
    } else {
      updateCourseMutation.mutate(courseData);
    }
  };

  const updateModal = (course: CourseProps) => {
    setModal(!modal);
    setCourseData({
      id: course.id,
      course_name: course.course_name,
      thumbnile: course.thumbnile,
      description: course.description,
      duration: course.duration,
      start_date: course.start_date,
      end_date: course.end_date,
      price: course.price,
    });
  };

  const deleteCourseHandler = (e: any) => {
    deleteCourseMutation.mutate(e);
  };

  return !modal ? (
    <div className="my-4">
      <div className=" flex justify-between items-center">
        <h4 className="title mb-4">Course List</h4>
        <button
          type="button"
          onClick={() => setModal(!modal)}
          className="mb-4 bg-green-500 px-4 py-2 text-white rounded-sm"
        >
          Add New Course
        </button>
      </div>
      <hr />

      {isLoading ? (
        <Loading />
      ) : (
        <div className="overflow-x-auto relative shadow-md sm:rounded-lg mt-4">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="py-3 px-6">
                  Course Name
                </th>
                <th scope="col" className="py-3 px-6">
                  Description
                </th>
                <th scope="col" className="py-3 px-6">
                  <div className="flex items-center">duration</div>
                </th>
                <th scope="col" className="py-3 px-6">
                  <div className="flex items-center">
                    Price{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="ml-1 w-3 h-3"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 320 512"
                    >
                      <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
                    </svg>
                  </div>
                </th>
                <th scope="col" className="py-3 px-6">
                  <div className="flex items-center">Thumbnile</div>
                </th>
                <th scope="col" className="py-3 px-6">
                  <span className="sr-only"></span>
                  Action
                </th>
              </tr>
            </thead>
            <tbody>{CourseRow}</tbody>
          </table>

          <nav aria-label="Page navigation example" className="w-full">
            <ul className="inline-flex items-center -space-x-px">
              <li>
                <Link to={`${courses.data.prev_page_url}`}
                  className="block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  <span className="sr-only">Previous</span>
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </Link>
              </li>
              <li>
                <Link to={`/admin/courses?page=`}
                  className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  1
                </Link>
              </li>
              <li>
                <Link to={`/admin/courses?page=`}
                  className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  2
                </Link>
              </li>
              <li>
                <Link to={`/admin/courses?page=`}
                  aria-current="page"
                  className="z-10 px-3 py-2 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                >
                  3
                </Link>
              </li>
              <li>
                <Link to={`/admin/courses?page=`}
                  className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  4
                </Link>
              </li>
              <li>
                <Link to={`/admin/courses?page=`}
                  className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  5
                </Link>
              </li>
              <li>
                <Link to={`${courses.data.next_page_url}`}
                  className={`block px-3 py-2 leading-tight text-gray-500 ${courses.data.next_page_url === null ? 'bg-gray-100' :'bg-white'} border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
                >
                  <span className="sr-only">Next</span>
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </div>
  ) : (
    <div className="my-10">
      <div className="text-center">
        <h3 className="title">Create New Course</h3>
      </div>

      {/* <!-- Main modal --> */}
      <div className="justify-center px-6 mt-6">
        {/* <p className="text-red-500">{InputError}</p> */}
        {"" ? (
          <Loading />
        ) : (
          <form className="grid justify-center my-10" method="post">
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 mb-6  group">
                <input
                  type="text"
                  name="course_name"
                  id="course_name"
                  value={courseData.course_name}
                  onChange={(e) =>
                    setCourseData({
                      ...courseData,
                      course_name: e.target.value,
                    })
                  }
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="course_name"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Course Name
                </label>
              </div>
              <div className="relative z-0 mb-6  group">
                <input
                  type="thumbnile"
                  name="thumbnile"
                  id="thumbnile"
                  value={courseData.thumbnile}
                  onChange={(e) =>
                    setCourseData({
                      ...courseData,
                      thumbnile: e.target.value,
                    })
                  }
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=""
                  required
                />
                <label
                  htmlFor="thumbnile"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Thumbnile Link
                </label>
              </div>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 mb-6  group">
                <input
                  type="duration"
                  name="duration"
                  id="duration"
                  value={courseData.duration}
                  onChange={(e) =>
                    setCourseData({
                      ...courseData,
                      duration: e.target.value,
                    })
                  }
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=""
                  required
                />
                <label
                  htmlFor="duration"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Duration
                </label>
              </div>
              <div className="relative z-0 mb-6 group">
                <input
                  type="number"
                  name="price"
                  id="price"
                  value={courseData.price}
                  onChange={(e) =>
                    setCourseData({
                      ...courseData,
                      price: e.target.valueAsNumber,
                    })
                  }
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=""
                  required
                />
                <label
                  htmlFor="price"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Price
                </label>
              </div>
            </div>
            <div className="grid md:grid-cols-2 md:gap-4">
              <div className="relative z-0 mb-6 group">
                <input
                  type="date"
                  name="start_date"
                  id="start_date"
                  value={courseData.start_date}
                  onChange={(e) =>
                    setCourseData({
                      ...courseData,
                      start_date: e.target.value,
                    })
                  }
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="start_date"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Start Date
                </label>
              </div>
              <div className="relative z-0 mb-6 group">
                <input
                  type="date"
                  name="end_date"
                  id="end_date"
                  value={courseData.end_date}
                  onChange={(e) =>
                    setCourseData({
                      ...courseData,
                      end_date: e.target.value,
                    })
                  }
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="end_date"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  End Date
                </label>
              </div>
            </div>
            <div className="grid md:gap-6">
              <div className="relative z-0 mb-6 group">
                <textarea
                  cols={10}
                  rows={5}
                  name="description"
                  id="description"
                  value={courseData.description}
                  onChange={(e) =>
                    setCourseData({
                      ...courseData,
                      description: e.target.value,
                    })
                  }
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                ></textarea>
                <label
                  htmlFor="description"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Description
                </label>
              </div>
            </div>
            <div className="grid md:grid-cols-6 md:gap-6 justify-center items-center text-center float-right">
              <button
                type="button"
                onClick={(e) => handleSubmit(e)}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Submit
              </button>
              <button
                type="button"
                onClick={() => setModal(!modal)}
                className="text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Close
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default AdminCourseList;
