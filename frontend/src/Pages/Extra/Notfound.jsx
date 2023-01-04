import { useNavigate } from "react-router-dom";

const Notfound = () => {
  const navigate = useNavigate();
  const timer = setInterval(() => {
    clearInterval(timer);
    navigate("/");
    // window.location.replace('/');
  }, 2000);
  return (
    <div className="grid justify-center items-center text-center">
      <h1 className="text-red-500 text-7xl">404 Not Found</h1>
      <p className="p-4 text-base text-center">Redirect to Home page</p>
    </div>
  );
};

export default Notfound;
