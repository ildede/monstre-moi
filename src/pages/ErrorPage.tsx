import {useRouteError} from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.log(error);

  return (
    <div id="error-page">
      <h1>Oups&nbsp;! Kermit est mort&nbsp;! 😭</h1>
      <p>
        <img src='/kermit.png' alt="kermit mort"/>
      </p>
    </div>
  );
}
