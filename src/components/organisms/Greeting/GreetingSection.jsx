import { useState, useEffect } from "react";
import fetchData from "@/services/fetchPortfolioData.js";
import ModalForm from "@/components/modals/ModalForm.jsx";
import ProfileInfo from "@/components/molecules/Greeting/ProfileInfo.jsx";
import ActionButtons from "@/components/molecules/Greeting/ActionButtons.jsx";

const GreetingSection = () => {
  const [portfolio, setPortfolio] = useState(null);
  const [isOpenForm, setIsOpenForm] = useState(false);

  useEffect(() => {
    fetchData().then(setPortfolio);
  }, []);

  return (
    <div className="w-full max-w-[58.75rem] m-h-screen ml-[2.5rem] flex flex-col items-center justify-center text-[#ABB2BF] text-[2rem] px-[1rem] pb-[1.5rem] gap-[0.5rem] lg:items-start">
      {portfolio && (
        <>
          <ProfileInfo name={portfolio.name} job={portfolio.job} />
          <ActionButtons openModal={() => setIsOpenForm(true)} />
        </>
      )}
      <ModalForm isOpenForm={isOpenForm} setIsOpenForm={setIsOpenForm} />
    </div>
  );
};

export default GreetingSection;
