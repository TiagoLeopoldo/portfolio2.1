import bioImg from "@assets/HomePage/avatar.webp";

const AvatarImage = () => {
  return (
    <img
      src={bioImg}
      alt="Tiago"
      className="relative z-10 object-contain lg:h-[44rem] lg:w-[45rem]"
    />
  );
};
export default AvatarImage;
