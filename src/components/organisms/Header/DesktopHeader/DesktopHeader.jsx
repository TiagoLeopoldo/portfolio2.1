import "@/App.css";
import Logo from "@/components/atoms/Header/Logo/Logo.jsx";
import DesktopMenu from "@/components/molecules/Header/DesktopMenu/DesktopMenu.jsx";

const DesktopHeader = () => {
  return (
    <div
      className="hidden lg:flex max-w-full items-center justify-between p-[1rem] pt-[1rem] pb-[0.5rem] lg:mx-[10.6875rem]"
      aria-label="Global"
    >
      <Logo />
      <nav>
        <DesktopMenu />
      </nav>
    </div>
  );
};

export default DesktopHeader;
