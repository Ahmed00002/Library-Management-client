import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <main className="bg-gray-50">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Homepage;
