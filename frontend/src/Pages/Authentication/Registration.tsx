import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import Loading from "../../Components/Loading";
import {
  checkUserEmail,
  registrationApi as registration,
} from "../../features/users/authenticationSlice";

export interface RegProps {
  userName: string;
  userEmail: string;
  userPassword: string;
  userConfirmPassword: string;
  agred: boolean;
  status: boolean;
  role_id: number;
}

const Registration = () => {
  const [responseError,setResponseError] = useState('');
  //   const [action, setAction] = useState(false);
  const navigate = useNavigate();
  const [user, setUser] = useState<RegProps>({
    userName: "",
    userEmail: "",
    userPassword: "",
    userConfirmPassword: "",
    status: true,
    role_id: 1,
    agred: false,
  });
  const [formError, setFormError] = useState({
    userName: "",
    userEmail: "",
    userPassword: "",
    userConfirmPassword: "",
  });

  const {
    data,
    isLoading: chacking,
    refetch,
  } = useQuery(
    ["user", user.userEmail],
    () => checkUserEmail({ userEmail: user.userEmail }),
    {
      enabled: false,
    }
  );
  const queryClient = useQueryClient();
  const registrationMutation = useMutation(registration, {
    onSuccess: ({queryKey}) => {
      queryClient.invalidateQueries(["loggeduser",queryKey]);
      setUser({
        userName: "",
        userConfirmPassword: "",
        userEmail: "",
        userPassword: "",
        status: true,
        role_id: 1,
        agred: false,
      });
      navigate("/login");
    },
    onError:({response}) => {
      setResponseError(response.data.message);
    }
  });

  // !  debounch function Start
  function debounce(func, timeout = 500) {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, timeout);
    };
  }

  function saveInput() {
    refetch();

    if (!chacking && data) {
      setFormError({ ...formError, userEmail: data.data.message });
    }
  }

  const checkEmail = debounce(() => saveInput());

  // ?  debounch function End

  const handleRegistrationSubmit = (e: any) => {
    e.preventDefault();
    if (user.userPassword !== user.userConfirmPassword) {
      setFormError({
        ...formError,
        userConfirmPassword: "Password Doesn't Matched! ",
      });
    } else {
      if (
        user.userPassword === user.userConfirmPassword &&
        user.userName !== "" &&
        user.userEmail !== ""
      ) {
        registrationMutation.mutate(user);
      }
    }
  };
  return (
    <div className="w-full mt-10 px-6 justify-center items-center my-10">
      <div className="text-center justify-center">
        <h4 className="title mb-2"> Registration</h4>
      </div>
      <div className="justify-center px-6 mt-6">
        {responseError !== '' && <p className="text-red-500 text-center my-4">{responseError}</p>}
        {registrationMutation.isLoading ? (
          <Loading />
        ) : (
          <form className="grid justify-center" method="post">
            <div className="relative z-0 mb-6  group">
              <input
                type="text"
                name="fullName"
                id="fullName"
                value={user.userName}
                onChange={(e) => setUser({ ...user, userName: e.target.value })}
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
                value={user.userEmail}
                onKeyUp={(e) => checkEmail()}
                onChange={(e) =>
                  setUser({ ...user, userEmail: e.target.value })
                }
                className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 ${
                  formError.userEmail !== ""
                    ? "border-gray-300 "
                    : "border-red-500"
                }appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
                placeholder=""
                required
              />
              <label
                htmlFor="email"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Email
              </label>
              <p className="text-red-500">{formError.userEmail}</p>
            </div>
            <div className="relative z-0 mb-6 group">
              <input
                type="password"
                name="password"
                id="password"
                value={user.userPassword}
                onChange={(e) =>
                  setUser({ ...user, userPassword: e.target.value })
                }
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=""
                required
              />
              <label
                htmlFor="password"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Password
              </label>
              <p className="my-2 text-gray-500">Password must contain at least one uppercase and one lowercase letter.</p>
            </div>
            <div className="relative z-0 mb-6 group">
              <input
                type="password"
                name="confirm_password"
                id="confirm_password"
                value={user.userConfirmPassword}
                onChange={(e) => {
                  setUser({ ...user, userConfirmPassword: e.target.value });
                  setFormError({
                    ...formError,
                    userConfirmPassword: "",
                  });
                }}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="confirm_password"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Confirm Password
              </label>
              <p>{formError.userConfirmPassword}</p>
            </div>
            <div className="flex items-start mb-6">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  type="checkbox"
                  checked={user.agred}
                  onChange={() => setUser({ ...user, agred: !user.agred })}
                  placeholder="Password"
                  className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                  required
                />
              </div>
              <label
                htmlFor="remember"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Agree?
              </label>
            </div>

            <div className="grid md:grid-cols-6 md:gap-6 justify-center items-center text-center">
              <button
                type="button"
                disabled={user.agred===false}
                onClick={(e: any) => handleRegistrationSubmit(e)}
                className={`text-white ${user.agred===false ? 'bg-gray-400' : 'bg-blue-700 hover:bg-blue-800'}  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}
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

export default Registration;
