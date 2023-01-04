import { useQuery } from "react-query";
import { Link, useParams } from "react-router-dom";
import Loading from "../../Components/Loading";
import { getSingleEnroll } from "../../features/enrolls/enrollsApi";

function Enrolls() {
  // const navigate = useNavigate();
  const { enrollId } = useParams();
  const {
    isError,
    error,
    isLoading,
    data: enroll,
  } = useQuery(["enroll", enrollId], () => getSingleEnroll(enrollId));

  console.log(enrollId);

  let content;
  if (isError) content = <p>{error.message}</p>;
  if (!isError && isLoading) content = <Loading />;
  if (!isError && !isLoading && enroll)
    content = (
      <div
        key={enroll.id}
        className="w-full justify-center text-center justify-self-center Items-center max-w-sm p-4 bg-white border rounded-lg shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700"
      >
        <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">
          Enroll Id : {enrollId}
        </h5>
        <div className="items-baseline text-gray-900 dark:text-white text-center">
          <span className="text-3xl font-semibold">{enroll.course_name}</span>
          <span className="ml-1 justify-center text-base font-normal text-gray-500 dark:text-gray-400 flex text-center">
            {enroll.start_date} to {enroll.end_date} ({enroll.duration})
          </span>
        </div>
        <ul role="list" className="space-y-5 my-7">
          <li className="flex space-x-3">
            <label htmlFor="">Name :</label>
            <span className="mt-1 text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
              {enroll.name}
            </span>
          </li>
        
          <li className="flex space-x-3">
            <label htmlFor="">Father Name :</label>
            <span className="mt-1 text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
              {enroll.father_name}
            </span>
          </li>
          <li className="flex space-x-3">
            <label htmlFor="">Mother Name :</label>
            <span className="mt-1 text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
              {enroll.mother_name}
            </span>
          </li>
          <li className="flex space-x-3">
            <label htmlFor="">Date oF Birth :</label>
            <span className="mt-1 text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
              {enroll.date_of_birth}
            </span>
          </li>
          <li className="flex space-x-3">
            <label htmlFor="">Gender :</label>
            <span className="mt-1 text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
              {enroll.gender}
            </span>
          </li>
          <li className="flex space-x-3">
            {enroll.price === enroll.payment ? (
              <>
                <label htmlFor="">Payment Status:</label>
                <span className="flex mt-1 text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                  Paid
                  <svg
                    aria-hidden="true"
                    className="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Check icon</title>
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </span>
              </>
            ) : (
              <>
                <label htmlFor="">Payment Status:</label>
                <span className="mt-1 text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                  Due
                </span>
              </>
            )}
          </li>
        </ul>
        <Link
          type="button"
          to={"/"}
          className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
        >
          back to home
        </Link>
      </div>
    );

  return (
    <div className="w-full px-6 my-10 justify-center grid grid-cols-1">
      <div className="p-2">
        {/* <h2 className="title">
            Enroll
        </h2> */}
      </div>
      {content}
    </div>
  );
}

export default Enrolls;
