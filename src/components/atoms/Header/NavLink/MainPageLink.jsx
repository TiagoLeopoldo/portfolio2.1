import "@/App.jsx";
import { Link } from "react-router-dom";

const MainPageLink = () => {
  return (
    <li className="px-4 hover:font-bold">
      <span className="text-[#1B98E0] text-[1.4rem] lg:text-[1rem]">#</span>
      <Link to="/" className="text-[#ABB2BF] text-[1.4rem] lg:text-[1rem]">
        inicio
      </Link>
    </li>
  );
};

export default MainPageLink;