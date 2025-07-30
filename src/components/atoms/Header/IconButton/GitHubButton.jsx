import "@/App.css";
import GitHub from "@assets/Header/Github.svg";

const GitHubButton = () => {
  return (
    <button>
      <a
        href="https://github.com/TiagoLeopoldo"
        target="_blank"
        rel="noopener noreferrer"
        alt="GitHub Tiago"
      >
        <img src={GitHub} alt="GitHub Tiago icon" className="w-[4rem] h-[4rem] transition duration-300 hover:opacity-100 opacity-70"/>
      </a>
    </button>
  );
};

export default GitHubButton;

