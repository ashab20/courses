import { useMutation, useQuery, useQueryClient } from "react-query";
import { Link } from "react-router-dom";
import Loading from "../../Components/Loading";
import {
  deleteStudent,
  getAllStudent,
} from "../../features/students/studentsApi";
import StudentsProps from "../../typescript/StudentsPorps";

const AdminStudentList = () => {
  const queryClient = useQueryClient();
  const {
    isLoading,
    isError,
    error,
    data: students,
  } = useQuery("Students", getAllStudent);

  const deleteStudentMutation = useMutation(deleteStudent, {
    onSuccess: ({ data }) => {
      queryClient.invalidateQueries("Students");
    },
    onError: ({ message }) => {
      // console.log(message);
    },
  });
  // content
  let studentContent: {};
  if (isError) studentContent = <p className="text-red-500">{error}</p>;
  if (isLoading) studentContent = <Loading />;
  if (!isLoading && !isError && students.data.data.length === 0) {
    studentContent = (
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <th
          colSpan={6}
          scope="row"
          className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          No data Found!
        </th>
      </tr>
    );
  }
  if (!isLoading && !isError && students.data.data.length > 0)
    studentContent = students.data.data.map((student: StudentsProps) => {
      return (
        <tr
          key={student.id}
          className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
        >
          <th
            scope="row"
            className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            {student.name}
          </th>
          <td className="py-4 px-6">
            {student.phone} <br />
            {student.email}
          </td>
          <td className="py-4 px-6">{student.father_name}</td>
          <td className="py-4 px-6">{student.mother_name}</td>
          <td className="py-4 px-6">{student.date_of_birth}</td>
          <td className="py-4 px-6">{student.gender}</td>
          <td className="py-4 px-6">{student.address}</td>
          <td className="py-4 px-6">{student.created_at}</td>
          <td className="py-4 px-6 text-right">
            <Link
              to={`/admin/students/${student.id}`}
              className="font-medium text-white m-1 rounded-sm px-4 py-2 bg-blue-600 dark:text-blue-500 hover:underline"
            >
              Edit
            </Link>
            <button
              onClick={() => deleteStudentMutation.mutate(student.id)}
              className="font-medium px-4 py-2 rounded m-1 text-white bg-red-500 dark:text-blue-500 hover:underline"
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });
  return (
    <div className="my-4">
      <div className=" flex justify-between items-center">
        <h4 className="title mb-4">Student List</h4>
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
                  Student Name
                </th>
                <th scope="col" className="py-3 px-6">
                  <div className="flex items-center">Contact</div>
                </th>
                <th scope="col" className="py-3 px-6">
                  <div className="flex items-center">Father Name</div>
                </th>
                <th scope="col" className="py-3 px-6">
                  <div className="flex items-center">Mother Name</div>
                </th>
                <th scope="col" className="py-3 px-6">
                  <div className="flex items-center">Date Of Birth</div>
                </th>
                <th scope="col" className="py-3 px-6">
                  <div className="flex items-center">Gender</div>
                </th>
                <th scope="col" className="py-3 px-6">
                  <div className="flex items-center">Address</div>
                </th>
                <th scope="col" className="py-3 px-6">
                  <div className="flex items-center">Registration Date</div>
                </th>
                <th scope="col" className="py-3 px-6">
                  <span className="sr-only">Action</span>
                  Action
                </th>
              </tr>
            </thead>
            <tbody>{studentContent}</tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AdminStudentList;
