import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/Home";

export const Router = createBrowserRouter([
    {
        path: '/',
        element:(
            <HomePage/>
        )
    },
])
