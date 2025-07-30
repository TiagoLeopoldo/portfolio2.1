const Title = ({ name }) => {
  return (
    <h1 className="text-[#ABB2BF] text-[2rem] font-semibold">
      Olá,
      <br className="lg:hidden" /> eu sou o {name}! <br />
    </h1>
  );
};

export default Title;
