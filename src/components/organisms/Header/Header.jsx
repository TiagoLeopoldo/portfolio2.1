import "@/App.css";
import MobileHeader from "./MobileHeader/MobileHeader.jsx";
import DesktopHeader from "./DesktopHeader/DesktopHeader.jsx";
import SocialLinks from "./DesktopHeader/SocialLinks.jsx";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-[50] bg-[#282C33]">
      <MobileHeader />
      <DesktopHeader />
      <SocialLinks />
    </header>
  );
};

export default Header;
