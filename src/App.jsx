import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";

import { Root } from "./pages/Root";
import { Home } from "./pages/Home";
import { Create } from "./pages/Create";

export const App = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<Root />}>
                <Route index element={<Home />} />
                <Route path="/create" element={<Create />} />
            </Route>
        )
    );
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
};
