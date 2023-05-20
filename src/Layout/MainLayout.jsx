import { Outlet } from "react-router-dom";
import Header from "../Pages/Shared/Header/Header";
import Footer from "../Pages/Shared/Footer/Footer";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import Loading from "./Loading";

const MainLayout = () => {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <Loading></Loading>;
    
  }

  return (
    <>
      <Header></Header>
      <div className="md:min-h-[calc(100vh-341px)] max-w-7xl mx-auto">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </>
  );
};

export default MainLayout;
