// import {lazy} from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Layouts from "./Components/Layouts";
import AdminLayouts from "./Components/Layouts/AdminLayout";
import useAuth from "./Hooks/useAuth";
import Login from "./Pages/Authentication/Login";
import Logout from "./Pages/Authentication/Logout";
import Registration from "./Pages/Authentication/Registration";
import CoursePage from "./Pages/Courses";
import SingleCourse from "./Pages/Courses/SingleCourse";
import Dashboard from "./Pages/Dashboard";
import Enrolls from "./Pages/Enrolls";
import Notfound from "./Pages/Extra/Notfound";
import HomePage from "./Pages/HomePage";
import Applications from "./Pages/Students/Applications";
import AdminCourseList from "./Pages/Courses/AdminCourseList";
import AdminStudentList from "./Pages/Students/AdminStudentList";
import UpdateStudent from "./Pages/Students/Update";

// import { Header } from "./Components/Layouts/Header";

// const Footer = lazy(() => import("./Components/Footer"));
// const Login = lazy(() => import("./Pages/Authentication/Login"));
// const Registration = lazy(() => import("./Pages/Authentication/Registration"));
// const Enrolls = lazy(() => import("./Pages/Enrolls"));
// const CoursePage = lazy(() => import("./Pages/Courses"));
// const Applications = lazy(() => import("./Pages/Students/Applications"));
// const SingleCourse = lazy(() => import("./Pages/Courses/SingleCourse"));
// const HomePage = lazy(() => import("./Pages/HomePage"));

function App() {
  const authenticated = useAuth();
  return (
   
      <Routes>
        {authenticated ? (
          <>
            {/* <Header /> */}
            {/* Guest */}

            <Route
              path="/admin/dashboard"
              element={
                <AdminLayouts>
                  <Dashboard />
                </AdminLayouts>
              }
            />
            <Route
              path="/admin/courses"
              element={
                <AdminLayouts>
                  <AdminCourseList />
                </AdminLayouts>
              }
            />
            <Route
              path="/admin/students"
              element={
                <AdminLayouts>
                  <AdminStudentList />
                </AdminLayouts>
              }
            />
            <Route
          path="/admin/students/:studentId"
          element={
            <Layouts>
              <UpdateStudent />
            </Layouts>
          }
          errorElement={<Notfound />}
        />
            <Route path="logout" element={<Logout />} />
          </>
        ) : (
          <>
            {/* Guest */}
            <Route path="/login" element={<Login />} />
            <Route path="/registration" element={<Registration />} />
          </>
        )}
        <Route
          path="/"
          element={
            <Layouts>
              <HomePage />
            </Layouts>
          }
          errorElement={<Notfound />}
        />
        <Route
          path="/courses"
          element={
            <Layouts>
              <CoursePage />
            </Layouts>
          }
        />
        <Route
          path="/courses/:courseId"
          element={
            <Layouts>
              <SingleCourse />
            </Layouts>
          }
          errorElement={<Notfound />}
        />
        <Route
          path="/apply/:courseId"
          element={
            <Layouts>
              <Applications />
            </Layouts>
          }
          errorElement={<Notfound />}
        />
        <Route
          path="/enroll/:enrollId"
          element={ <Layouts><Enrolls /></Layouts>}
          errorElement={<Notfound />}
        />
        <Route path="*" element={<Notfound />} />
      </Routes>

  );
}

export default App;
