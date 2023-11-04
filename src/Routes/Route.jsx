import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../Component/About/About";
import SignIn from "../Component/SigninRegister/SignIn";
import ErrorPage from "../Component/ErrorElement/ErrorPage";


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
    path:'/signIn',
    element:<SignIn/>
   }

]);
export default route;