import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {partsLoader} from "./config";
import TitleScreen from "./pages/TitleScreen";
import ErrorPage from "./pages/ErrorPage";
import LeaderWait from "./pages/LeaderWait";
import Credits from "./pages/Credits";
import LeaderPlay from "./pages/LeaderPlay";
import PlayerPlay from "./pages/PlayerPlay";

const router = createBrowserRouter([
  {
    path: "/",
    element: <TitleScreen/>,
    errorElement: <ErrorPage/>,
  },
  {
    path: "/credits",
    element: <Credits/>,
    errorElement: <ErrorPage/>,
  },
  {
    path: "/leader-wait",
    element: <LeaderWait/>,
    errorElement: <ErrorPage/>,
  },
  {
    path: "/leader-play/:speed",
    loader: partsLoader,
    element: <LeaderPlay/>,
    errorElement: <ErrorPage/>,
  },
  {
    path: "play",
    element: <PlayerPlay/>,
    errorElement: <ErrorPage/>,
  }
]);
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
