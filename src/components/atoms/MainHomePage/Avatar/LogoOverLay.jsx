import logo from "@assets/HomePage/logoblue.webp";

const LogoOverlay = () => {
  return (
    <img
      src={logo}
      alt="Logo"
      className="absolute left-0 w-[7rem] z-8 lg:bottom-[18rem] lg:w-[13rem]"
    />
  );
};

export default LogoOverlay;
