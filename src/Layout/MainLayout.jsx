import { Outlet } from "react-router-dom";
import NavbarComponent from "../components/NavbarComponent";
import FooterComponent from "../components/FooterComponent";
import ChatWidget from "../components/ChatWidget";

const MainLayout = () => {
  return (
    <>
      <NavbarComponent />
      <main >
        <Outlet /> {/* Les pages s’affichent ici */}
        <ChatWidget/>
      </main>
      
      <FooterComponent />
    </>
  );
}

export default MainLayout;
