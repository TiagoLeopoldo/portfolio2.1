import layer from "@assets/HomePage/camada.svg";

const LayerShape = ({ className }) => {
  return (
    <img
      src={layer}
      alt=""
      className={`filter invert absolute ${className}`}
    />
  );
};

export default LayerShape;
