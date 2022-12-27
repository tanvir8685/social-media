import Main from "../../LayOut/Main";
import About from "../../Pages/About/About";
import Home from "../../Pages/Home/Home/Home";
import Media from "../../Pages/Media/Media";
import Message from "../../Pages/Message/Message";

const { createBrowserRouter } = require("react-router-dom");


const router =createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
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
                element:<About></About>
            },
        ]
    }
])

export default router;