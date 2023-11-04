import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../Component/About/About";
import ErrorPage from "../Component/ErrorElement/ErrorPage";
import LogIn from "../Component/SigninRegister/LogIn";
import Register from "../Component/SigninRegister/Register";


const route = createBrowserRouter([
    {
        path:"/",
        element: <App/>,
        errorElement:<ErrorPage/>,
        children:[
        {
            path:'/about',
            element:<About/>
        },
        ]
        
    },
   {
    path:'/logIn',
    element:<LogIn/>
   },
   {
    path:'/register',
    element: <Register/>
   }

]);
export default route;