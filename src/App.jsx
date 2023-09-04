import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";

import { Root } from "./pages/Root";
import { Home } from "./pages/Home";

export const App = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<Root />}>
                <Route index element={<Home />} />
            </Route>
        )
    );
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
};
