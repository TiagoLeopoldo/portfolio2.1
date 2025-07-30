import Title from "@/components/atoms/MainHomePage/Texts/Title.jsx";
import JobTitle from "@/components/atoms/MainHomePage/Texts/JobTitle.jsx";
import Description from "@/components/atoms/MainHomePage/Texts/Description.jsx";

const ProfileInfo = ({ name, job }) => {
  return (
    <>
    <div className="flex flex-col justfy-center itemns-start">
      <Title name={name} />
      <JobTitle job={job} />
      <Description />
    </div>
    </>
  );
};

export default ProfileInfo;
