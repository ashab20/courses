import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import Loading from "../../Components/Loading";
import useAuth from "../../Hooks/useAuth";
import { loginApi } from "../../features/users/authenticationSlice";
import { storeToken } from "../../utils/actionToken";

interface LoginProps {
  userEmail: string;
  userPassword: string;
  rememberMe: boolean;
}

const Login = () => {
  console.log(useAuth());
  // const navigate = useNavigate();
  const [login, setLogin] = useState<LoginProps>({
    userEmail: "",
    userPassword: "",
    rememberMe: false,
  });
  const queryClient = useQueryClient();
  const loginMutation = useMutation(loginApi, {
    onSuccess: (data) => {
      storeToken(data.token, data.user);
      queryClient.invalidateQueries("loggeduser");
      setLogin({ userEmail: "", userPassword: "", rememberMe: false });
      // navigate("/dashboad");
      window.location.replace("/admin/dashboard");
      // window.history.back()
    },
  });

  const handleLogin = (e: any) => {
    e.preventDefault();
    if ((login.userEmail && login.userPassword) !== "") {
      loginMutation.mutate(login);
    }
  };

  return loginMutation.isLoading ? (
    <Loading />
  ) : (
    <div className="w-full mt-10 px-6 justify-center items-center my-10">
      <div className="text-center justify-center">
        <h4 className="title mb-5"> Login</h4>
      </div>
      <p className="text-red-500 text-center">
        {loginMutation.isError && "Wrong Credantial! Please try again"}
      </p>
      <form className="grid justify-center my-5">
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            value={login.userEmail}
            onChange={(e) => setLogin({ ...login, userEmail: e.target.value })}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@flowbite.com"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your password
          </label>
          <input
            type="password"
            id="password"
            value={login.userPassword}
            onChange={(e) =>
              setLogin({ ...login, userPassword: e.target.value })
            }
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div className="flex items-start mb-6">
          <div className="flex items-center h-5">
            <input
              id="remember"
              type="checkbox"
              checked={login.rememberMe}
              onChange={() =>
                setLogin({ ...login, rememberMe: !login.rememberMe })
              }
              placeholder="Password"
              className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
            />
          </div>
          <label
            htmlFor="remember"
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Remember me
          </label>
        </div>
        <button
          type="button"
          onClick={(e) => handleLogin(e)}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
