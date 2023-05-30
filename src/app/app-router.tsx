import {createBrowserRouter} from "react-router-dom";
import {BaseLayout} from "./layouts/base-layout";

import {Main} from "../pages/main";
import {Order} from "../pages/order";

export const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <BaseLayout />,
        children: [
            {
                index: true,
                element: <Main />
            },
            {
                path: 'order',
                element: <Order />
            }
        ]
    }
]);
