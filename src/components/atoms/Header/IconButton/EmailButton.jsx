import "@/App.css";
import Email from "@assets/Header/Email.svg";

const EmailButton = () => {
  return (
    <button>
      <a href="mailto:tnleopoldo.dev@gmail.com?subject=Contato%20via%20portfólio&body=Olá%20Tiago,%20gostaria%20de%20conversar%20sobre%20seu%20trabalho.">
        <img
          src={Email}
          alt="Email Tiago icon"
          className="w-[4rem] h-[4rem] transition duration-300 hover:opacity-100 opacity-70"
        />
      </a>
    </button>
  );
};

export default EmailButton;
