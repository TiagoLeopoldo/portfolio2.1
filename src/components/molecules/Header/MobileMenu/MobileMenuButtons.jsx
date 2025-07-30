import "@/App.css";
import EmailButton from "@/components/atoms/Header/IconButton/EmailButton.jsx";
import GitHubButton from "@/components/atoms/Header/IconButton/GitHubButton.jsx";
import LinkedInButton from "@/components/atoms/Header/IconButton/LinkedInButton.jsx";

const MobileMenuButtons = () => {
  return (
    <div className="flex justify-center items-center w-auto max-h-[338px] mt-[107px] mb-[36px] overflow-hidden">
      <GitHubButton />
      <LinkedInButton />
      <EmailButton />
    </div>
  );
};

export default MobileMenuButtons;
