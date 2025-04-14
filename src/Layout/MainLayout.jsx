import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <main style={{ padding: "20px" }}>
        <Outlet /> {/* Les pages s’affichent ici */}
      </main>
      <Footer />
    </>
  );
}

export default MainLayout;
