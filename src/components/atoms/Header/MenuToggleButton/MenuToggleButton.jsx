
import menuButton from "@assets/Header/menuButton.svg";
import closeButton from "@assets/Header/close.svg";

const menuToggleButton = ({ isOpen, toggle, type = "button"}) => {
  return (
    <button className="w-6 h-6 bg-transparente" onClick={toggle} type={type} >
      <img src={isOpen ? closeButton : menuButton} alt="Abrir e Fechar menu" />
    </button>
  );
};

export default menuToggleButton;