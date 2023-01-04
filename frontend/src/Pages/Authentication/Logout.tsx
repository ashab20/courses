import { useQuery } from "react-query";
// import { useNavigate } from "react-router-dom";
import { logout } from "../../features/users/authenticationSlice";
import { removeToken } from "../../utils/actionToken";

const Logout = () => {
//   const navigate = useNavigate();
  const { isSuccess } = useQuery("", logout);
  if (isSuccess) {
    removeToken();
    const timer = setInterval(() => {
      clearInterval(timer);
    //   navigate("/");
    window.location.replace('/');
    }, 2000);
  }
  return (
    isSuccess && (
      <div className="grid justify-center mx-10  w-full h-full items-center text-center">
        <h2 className="text-green-500 text-4xl justify-center items-center">Logout Successfull</h2>
        <p className="p-4 text-base text-center">Redirect to Home page</p>
      </div>
    )
  );
};

export default Logout;
