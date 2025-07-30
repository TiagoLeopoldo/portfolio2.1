import ButtonLink from "@/components/atoms/MainHomePage/Buttons/ButtonLink.jsx";
import EmailButton from "@/components/atoms/MainHomePage/Buttons/EmailButton.jsx";
import Wtsp from "@assets/HomePage/wtsp.svg";

const ActionButtons = ({ openModal }) => {
  return (
    <div className="hidden lg:flex flex-wrap gap-[1rem] mt-[0.625rem]">
      <ButtonLink
        label="Currículo"
        href="https://docs.google.com/file/d/1n10SCEr97YrJvcRbNUjnuTMuipkxUftMj3uagX75EMs/view"
      />
      <ButtonLink
        label="WhatsApp"
        href="https://wa.me/5521974278358?text=Entre%20em%20contato%20com%20Tiago"
        icon={Wtsp}
      />
      <EmailButton onClick={openModal} />
    </div>
  );
};

export default ActionButtons;
