import "@/App.css";
import Logo from "@assets/Header/logo.webp";

const logo = () => {
  return (
    <img
      src={Logo}
      alt="Tiago de Noronha Leopoldo logo"
      className="w-[6.75rem] h-[2rem]"
    />
  );
};

export default logo;
