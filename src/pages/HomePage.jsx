import MainLayout from "@/components/templates/MainLayout.jsx";
import GreetingSection from "@/components/organisms/Greeting/GreetingSection.jsx";
import AvatarSection from "@/components/organisms/Avatar/AvatarSection.jsx";

const HomePage = () => {
  return (
    <MainLayout>
      <div
        className="flex flex-col lg:flex-row items-center lg:items-center justify-center
 px-6 lg:px-12 py-10 min-h-screen bg-[#282C33] text-white lg:gap-[10rem] lg:mb-[5rem]"
      >
        <GreetingSection />
        <AvatarSection />
      </div>
    </MainLayout>
  );
};

export default HomePage;