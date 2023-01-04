/* eslint-disable eqeqeq */
import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../../Components/Loading";
import { getSingleCourse } from "../../features/courses/couresApi";
import {
  getAllCountry,
  getDistricts,
  getDivion,
} from "../../features/location/locationApi";
import { addStudent } from "../../features/students/studentsApi";

const Applications = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const {
    isError,
    isLoading,
    data: course,
  } = useQuery(["course", courseId], () => getSingleCourse(courseId), {
    enabled: courseId !== undefined,
  });

  const [student, setStudent] = useState({
    name: "",
    phone: "",
    email: "",
    father_name: "",
    mother_name: "",
    date_of_birth: "",
    gender: "",
    address: "",
    country_id: "",
    division_id: "",
    district_id: false,
    courseId,
    payment: "",
  });

  const queryClient = useQueryClient();
  const { isLoading: countryLoading, data: countries } = useQuery(
    "country",
    getAllCountry
  );

  const {
    isError: diviError,
    isLoading: diviLoad,
    data: divions,
  } = useQuery(
    ["country", student.country_id],
    () => getDivion(student.country_id),
    {
      enabled: student.country_id !== "",
    }
  );

  const {
    isError: distError,
    isLoading: distLoad,
    data: districts,
  } = useQuery(
    ["Division", student.division_id],
    () => getDistricts(student.division_id),
    {
      enabled: student.division_id !== "",
    }
  );

  const onCountryChanged = (e) => {
    setStudent({ ...student, country_id: e.target.value });
  };

  const addStudentsMutation = useMutation(addStudent, {
    onSuccess: ({ data }) => {
      setStudent({});
      navigate(`/enroll/${data}`);
      queryClient.invalidateQueries("Students");
    },
  });

  let content;
  if (!isError && isLoading)
    content = <Loading />;
  if (!isLoading && course) {
    content = (
      <div
        key={course.id}
        className="my-6 m-auto block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      >
        <h5 className="mb-2 text-2xl uppercase font-bold tracking-tight text-gray-900 dark:text-white">
          {course.course_name}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {course.description}
        </p>
        <p className="font-normal  dark:text-gray-400">
          Duration: {course.duration} <br /> (
          <span className="text-yellow-500">
            {course.start_date} to {course.end_date}
          </span>
          )
        </p>
        <p className="font-normal text-red-500 dark:text-gray-400">
          {course.price}BDT
        </p>
      </div>
    );
  }

  let divisonContent;
  if (!diviError && diviLoad) {
    divisonContent = <option>Loading...</option>;
  } else if (
    !diviError &&
    !diviLoad &&
    student.country_id !== "" &&
    divions.length > 0
  ) {
    divisonContent = divions.map((divi) => (
      <option key={divi.id} value={divi.id}>
        {divi.divison}
      </option>
    ));
  } else {
    divisonContent = <option>No data Founds!</option>;
  }

  const onDistrictsChange = (e) => {
    setStudent({ ...student, division_id: e.target.value });
  };
  let districtsContent;
  if (!distError && distLoad) {
    districtsContent = <option>Loading...</option>;
  } else if (
    !distError &&
    !distLoad &&
    student.division_id !== "" &&
    districts.length > 0
  ) {
    districtsContent = districts.map((dist) => (
      <option key={dist.id} value={dist.id}>
        {dist.district}
      </option>
    ));
  } else {
    districtsContent = <option>No data Founds!</option>;
  }

  let InputError;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      student.name != "" &&
      student.phone != "" &&
      student.gender != "" &&
      student.father_name != "" &&
      student.mother_name != "" &&
      student.payment != null
    ) {
      addStudentsMutation.mutate(student);
    } else {
      InputError = "Please Input data on the filed";
    }
  };

  return (
    <div className="w-full mt-10 px-6 justify-center items-center my-10">
      <div className="text-center justify-center">
        <h4 className="title mb-2"> Application For</h4>
      </div>

      {content}
      <div className="justify-center px-6 mt-6">
        <p className="text-red-500">{InputError}</p>
        {addStudentsMutation.isLoading ? (
          <Loading />
        ) : (
          <form
            className="grid justify-center"
            method="post"
            onFocus={() => setStudent({ ...student, payment: course?.price })}
          >
            {!isLoading && !isError && course && (
              <div className="relative z-0 mb-6 w-1/2 group">
                <input
                  type="number"
                  name="payment"
                  id="payment"
                  value={course.price}
                  onBlur={(e) =>
                    setStudent({ ...student, payment: e.target.value })
                  }
                  disabled
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="payment"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Payment
                </label>
              </div>
            )}
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 mb-6  group">
                <input
                  type="text"
                  name="fullName"
                  id="fullName"
                  value={student.name}
                  onChange={(e) =>
                    setStudent({ ...student, name: e.target.value })
                  }
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="fullName"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Full Name
                </label>
              </div>
              <div className="relative z-0 mb-6  group">
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={student.email}
                  onChange={(e) =>
                    setStudent({ ...student, email: e.target.value })
                  }
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=""
                  required
                />
                <label
                  htmlFor="email"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Email
                </label>
              </div>
            </div>
            <div className="grid md:grid-cols-2 md:gap-4">
              <div className="relative z-0 mb-6 group">
                <input
                  type="tel"
                  name="phoneNumber"
                  id="phoneNumber"
                  value={student.phone}
                  onChange={(e) =>
                    setStudent({ ...student, phone: e.target.value })
                  }
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=""
                  required
                />
                <label
                  htmlFor="phoneNumber"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Phone Number
                </label>
              </div>
              <div className="relative z-0 mb-6 group">
                <input
                  type="date"
                  name="dob"
                  id="dob"
                  value={student.date_of_birth}
                  onChange={(e) =>
                    setStudent({ ...student, date_of_birth: e.target.value })
                  }
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="dob"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Date Of Birth
                </label>
              </div>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 mb-6 group">
                <input
                  type="text"
                  name="fatherName"
                  id="fatherName"
                  value={student.father_name}
                  onChange={(e) =>
                    setStudent({ ...student, father_name: e.target.value })
                  }
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="fatherName"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Father's Name
                </label>
              </div>
              <div className="relative z-0 mb-6 group">
                <input
                  type="text"
                  name="motherName"
                  id="motherName"
                  value={student.mother_name}
                  onChange={(e) =>
                    setStudent({ ...student, mother_name: e.target.value })
                  }
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="motherName"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Mother's Name
                </label>
              </div>
            </div>

            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 mb-6 group">
                <label
                  htmlFor="countries"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Select Gender
                </label>
                <select
                  id="gender"
                  value={student.gender}
                  onChange={(e) =>
                    setStudent({ ...student, gender: e.target.value })
                  }
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option>Gender</option>
                  <option value={"male"}>Male</option>
                  <option value={"female"}>Female</option>
                  <option value={"other"}>Other</option>
                </select>
              </div>
              <div className="relative z-0 mb-6 group">
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Address
                </label>
                <textarea
                  id="address"
                  rows="4"
                  value={student.address}
                  onChange={(e) =>
                    setStudent({ ...student, address: e.target.value })
                  }
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Leave a comment..."
                ></textarea>
              </div>
            </div>
            <div className="grid md:grid-cols-3 md:gap-6">
              <div className="relative z-0 mb-6 group">
                <label
                  htmlFor="countries"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Select Country
                </label>
                <select
                  id="coutry"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={student.country_id}
                  onChange={(e) => onCountryChanged(e)}
                >
                  <option>Country</option>
                  {!countryLoading &&
                    countries.length > 0 &&
                    countries.map((country) => (
                      <option key={country.id} value={country.id}>
                        {country.country}
                      </option>
                    ))}
                </select>
              </div>
              <div className="relative z-0 mb-6 group">
                <label
                  htmlFor="countries"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Select Division
                </label>
                <select
                  id="division"
                  value={student.division_id}
                  onChange={(e) => onDistrictsChange(e)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option>Divison</option>
                  {divisonContent}
                </select>
              </div>
              <div className="relative z-0 mb-6 group">
                <label
                  htmlFor="countries"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Select Districts
                </label>
                <select
                  id="district"
                  value={student.district_id}
                  onChange={(e) =>
                    setStudent({ ...student, district_id: e.target.value })
                  }
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option>Districts</option>
                  {districtsContent}
                </select>
              </div>
            </div>
            <div className="grid md:grid-cols-6 md:gap-6 justify-center items-center text-center">
              <button
                type="button"
                onClick={(e) => handleSubmit(e)}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Submit
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Applications;
