// import logo from "./logo.svg";
import {
  createBrowserRouter,
  RouterProvider,
  useParams,
} from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Main from "./layout/Main";
import Courses from "../src/components/Courses";
import Faq from "../src/components/Faq";
import Blog from "../src/components/Blog";
import Home from "./components/Home";
import CourseDetails from "./components/CourseDetails";
import CheckOut from "./components/CheckOut";
import PrivateRoute from "./routes/PrivateRoute";

// const param = useParams();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/sign-up",
        element: <SignUp></SignUp>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/courses",
        element: <Courses></Courses>,
      },
      {
        path: "/courses/:id",
        element: <CourseDetails></CourseDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/courses/${params.id}`),
      },
      {
        path: "/faq",
        element: <Faq></Faq>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/check-out",
        element: (
          <PrivateRoute>
            <CheckOut></CheckOut>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      {/* <Main></Main> */}
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
