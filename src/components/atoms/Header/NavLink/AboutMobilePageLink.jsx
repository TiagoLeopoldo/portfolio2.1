import "@/App.css";
import { Link } from "react-router-dom";

const AboutMobilePageLink = () => {
  return (
  <li className="px-4 hover:font-medium">
    <span className="text-[#1B98E0] text-[1.4rem] lg:text-[1rem]">#</span>
    <Link to="/aboutme" className="text-[#ABB2BF] text-[1.4rem] lg:text-[1rem]">
      sobre-mim
    </Link>
  </li>
  );
};

export default AboutMobilePageLink;