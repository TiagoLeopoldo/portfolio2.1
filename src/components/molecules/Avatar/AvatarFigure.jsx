import AvatarImage from "@/components/atoms/MainHomePage/Avatar/AvatarImage.jsx";
import LogoOverlay from "@/components/atoms/MainHomePage/Avatar/LogoOverlay.jsx";
import LayerShape from "@/components/atoms/MainHomePage/Avatar/LayerShape.jsx";

const AvatarFigure = () => {
  return (
    <div className="relative lg:w-[35.5rem] lg:h-[40rem]">
      <LogoOverlay />
      <AvatarImage />
      <LayerShape className="w-[5rem] h-[5rem] right-0 bottom-[4.2rem] lg:w-[10rem] lg:h-[10rem] lg:bottom-[5rem]" />
      <LayerShape className="w-[5rem] h-[5rem] left-[5.7rem] bottom-[13.8rem] lg:w-[11rem] lg:h-[11rem] lg:left-[14rem] lg:bottom-[25rem]" />
      <LayerShape className="w-[5rem] h-[5rem] left-[5.25rem] bottom-[1.3rem] lg:w-[11rem] lg:h-[11rem] lg:left-[0.1rem] lg:bottom-[7rem]" />
    </div>
  );
};
export default AvatarFigure;
