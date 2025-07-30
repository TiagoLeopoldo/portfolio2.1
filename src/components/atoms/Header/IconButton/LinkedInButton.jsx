import "@/App.css";
import LinkedIn from "@assets/Header/Linkedin.svg";

const LinkedInButton = () => {
  return (
    <button>
      <a
        href="https://www.linkedin.com/in/tiago-noronha-leopoldo"
        target="_blank"
        rel="noopener noreferrer"
        alt="LinkedIn Tiago"
      >
        <img
          src={LinkedIn}
          alt="LinkedIn Tiago icon"
          className="w-[4rem] h-[4rem] transition duration-300 hover:opacity-100 opacity-70"
        />
      </a>
    </button>
  );
};

export default LinkedInButton;
