import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import NavbarComponent from "../components/NavbarComponent";

const MainLayout = () => {
  return (
    <>
      <NavbarComponent />
      <main >
        <Outlet /> {/* Les pages s’affichent ici */}
      </main>
      <Footer />
    </>
  );
}

export default MainLayout;
