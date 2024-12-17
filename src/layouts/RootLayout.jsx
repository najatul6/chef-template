import { Outlet } from "react-router-dom";
import Header from "../components/Shared/Header/Header";

const RootLayout = () => {
  return (
    <div>
      <Header/>
      <main className="overflow-x-clip">
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default RootLayout;