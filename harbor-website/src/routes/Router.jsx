import { createBrowserRouter } from "react-router-dom";
import HomePage from '../pages/home/Home'

export const Router = createBrowserRouter([
    {
        path: '/',
        element:(
            <HomePage/>
        )
    },
])
