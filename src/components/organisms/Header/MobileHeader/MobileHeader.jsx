import "@/App.css";
import Logo from "@/components/atoms/Header/Logo/Logo.jsx";
import MobileToggle from "./MobileToggle/MobileToggle.jsx";

const MobileHeader = () => {
  return (
    <div className="lg:hidden flex max-w-full items-center justify-between p-[16px] pt-[16px] pb-[8px]" aria-label="Global">
      <Logo />
      <MobileToggle />
    </div>
  )
}

export default MobileHeader;