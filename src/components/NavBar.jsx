import { Link } from "react-router-dom";

/* 
 Vi kan ej använda a-taggar för att navigera oss, 
 om det är så att vi vill behålla värden från 
 tidigare sidors/komponentens state
*/

const routes = [
    {
        route: "/",
        page: "Home",
    },
    {
        route: "/create",
        page: "Create",
    },
];

export const NavBar = () => {
    return (
        <nav>
            <ul className="flex gap-5 justify-end w-full  px-5 py-3 bg-teal-600 text-white">
                {routes.map(({ route, page }, index) => {
                    return (
                        <li key={route + index}>
                            <Link
                                className="font-bold hover:text-emerald-500"
                                to={route}
                            >
                                {page}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};
