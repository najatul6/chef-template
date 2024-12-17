import { useRouteError } from "react-router-dom";
import Header from "../../components/Shared/Header/Header";

const Error = () => {
    const error = useRouteError();
  console.log(error);
  return (
    <div>
    <Header></Header>
    <div className="flex min-h-screen items-center justify-center">Error</div>
  </div>
  )
}

export default Error