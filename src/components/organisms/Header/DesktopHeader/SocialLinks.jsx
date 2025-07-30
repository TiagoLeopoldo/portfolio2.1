import "@/App.css";
import EmailButton from "@/components/atoms/Header/IconButton/EmailButton.jsx";
import GitHubButton from "@/components/atoms/Header/IconButton/GitHubButton.jsx";
import LinkedInButton from "@/components/atoms/Header/IconButton/LinkedInButton.jsx";
import Line from "@assets/Header/verticalline.svg";

const SocialLinks = () => {
  return (
    <div className="hidden lg:flex flex-col items-center justify-between gap-0 w-[2rem] h-[19,4375rem] p-0 fixed top-0 left-[1rem] z-[9999] border-t">
      <img src={Line} alt="Linha" />
      <GitHubButton />
      <LinkedInButton />
      <EmailButton />
    </div>
  );
};

export default SocialLinks;