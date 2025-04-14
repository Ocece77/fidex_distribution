import { Outlet } from "react-router-dom";
import NavbarComponent from "../components/NavbarComponent";
import FooterComponent from "../components/FooterComponent";

const MainLayout = () => {
  return (
    <>
      <NavbarComponent />
      <main >
        <Outlet /> {/* Les pages s’affichent ici */}
      </main>
      <FooterComponent />
    </>
  );
}

export default MainLayout;
