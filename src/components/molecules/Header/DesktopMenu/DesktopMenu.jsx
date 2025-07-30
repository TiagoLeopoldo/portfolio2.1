import "@/App.css";
import AboutModalLink from "@/components/atoms/Header/NavLink/AboutModalLink.jsx"
import ExperiencePageLink from "@/components/atoms/Header/NavLink/ExperiencePageLink.jsx"
import MainPageLink from "@/components/atoms/Header/NavLink/MainPageLink.jsx"

const DesktopMenu = () => {
  return(
    <ul className="flex flex-row w-full max-w-[80rem] h-[3.812rem] items-center justify-center pt-[2rem] pb-[0.5rem] px-[2rem] mx-auto gap-x-[2rem]">
      <MainPageLink />
      <ExperiencePageLink />
      <AboutModalLink />
    </ul>
  )
}

export default DesktopMenu;