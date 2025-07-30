import "@/App.css";

const AboutModalLinks = ({modal}) => {
  return (
    <li className="px-4 hover:font-bold">
      <span className="text-[#1B98E0] text-[1.5rem] lg:text-[1rem]">#</span>
      <button
        onClick={modal}
        className="text-[#ABB2BF] text-[1rem] cursor-pointer bg-transparent border-none p-0"
      >
        sobre-mim
      </button>
    </li>
  );
};

export default AboutModalLinks;
