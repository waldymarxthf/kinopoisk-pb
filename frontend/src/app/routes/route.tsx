import { createBrowserRouter } from "react-router-dom";
import App from "~app/App";
import FilmDetails from "~pages/details";
import Main from "~pages/main";
import { getFilmById } from "~shared/api/films/films";
import Login from "~pages/login";
import Registration from "~pages/registration";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "film/:filmId",
        element: <FilmDetails />,
        loader: async ({ params }) => {
          const film = await getFilmById(params.filmId);
          return { film };
        },
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "registration",
        element: <Registration />,
      },
    ],
  },
]);
