import "@/App.css";
import { Link } from "react-router-dom";

const ExperiencePageLink = () => {
  return (
    <li className="px-4 hover:font-bold">
      <span className="text-[#1B98E0] text-[1.4rem] lg:text-[1rem]">#</span>
      <Link to="/projects&experiences" className="text-[#ABB2BF] text-[1.4rem] lg:text-[1rem]">
        projetos-&-experiências
      </Link>
    </li>
  );
};

export default ExperiencePageLink;
