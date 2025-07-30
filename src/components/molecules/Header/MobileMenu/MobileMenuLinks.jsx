import "@/App.css";
import AboutMobilePageLink from "@/components/atoms/Header/NavLink/AboutMobilePageLink.jsx";
import ExperiencePageLink from "@/components/atoms/Header/NavLink/ExperiencePageLink.jsx";
import MainPageLink from "@/components/atoms/Header/NavLink/MainPageLink.jsx";

const MobileMenuLinks = () => {
  return (
  <ul className="flex flex-col items-start w-[18.75rem] max-h-[21.125rem] overflow-hidden">
    <MainPageLink />
    <ExperiencePageLink />
    <AboutMobilePageLink />
  </ul>
  );
};

export default MobileMenuLinks;
