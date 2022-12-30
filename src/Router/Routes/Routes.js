import Main from "../../LayOut/Main";
import About from "../../Pages/About/About";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Media from "../../Pages/Media/Media";
import Message from "../../Pages/Message/Message";
import SignUp from "../../Pages/SignUp/SignUp";
import StatusFullDetail from "../../Pages/StatusFullDetail/StatusFullDetail";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");


const router =createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<PrivateRoute><Home></Home></PrivateRoute>
            },
                
            {
                path:'/media',
                element:<Media></Media>
            },
            {
                path:'/message',
                element:<Message></Message>
            },
            {
                path:'/about',
                element:<PrivateRoute><About></About></PrivateRoute>,
                
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/signup',
                element:<SignUp></SignUp>
            },
            {
                path:'/status/:id',
                element:<PrivateRoute><StatusFullDetail></StatusFullDetail></PrivateRoute>,
                loader:({params})=>fetch(`http://localhost:5000/allstatus/${params.id}`)
            },
            
        ]
    }
])

export default router;