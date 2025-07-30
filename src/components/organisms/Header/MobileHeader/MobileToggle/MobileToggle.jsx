import "@/App.css";
import MobileMenuButtons from "@/components/molecules/Header/MobileMenu/MobileMenuButtons.jsx";
import MobileMenuLinks from "@/components/molecules/Header/MobileMenu/MobileMenuLinks.jsx";
import MenuToggleButton from "@/components/atoms/Header/MenuToggleButton/MenuToggleButton.jsx";
import { useState } from "react";

const MobileToggle = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <MenuToggleButton type="button" isOpen={isOpen} toggle={() => setIsOpen(!isOpen)} />

      <nav
        className={`absolute right-0 top-[2.8125rem] w-[18.75rem] max-h-[37rem] bg-[#282C33] rounded p-4 transition-all duration-500 ease-in-out ${
          isOpen
            ? "block opacity-100 translate-x-0"
            : "hidden opacity-0 translate-x-[100%]"
        }`}
      >
        <MobileMenuLinks />
        <MobileMenuButtons />
      </nav>
    </div>
  );
};

export default MobileToggle;
