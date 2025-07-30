import { useEffect, useState, useRef } from "react";

const Description = () => {
  const textoCompleto =
    "Transformando códigos em experiências acessíveis,\n buscando novos desafios para escalar soluções inovadoras.";
  const [texto, setTexto] = useState("");
  const indexRef = useRef(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const digitar = () => {
      if (indexRef.current < textoCompleto.length) {
        setTexto((prev) => prev + textoCompleto.charAt(indexRef.current));
        indexRef.current++;
        timeoutRef.current = setTimeout(digitar, 40);
      }
    };

    digitar();
    return () => clearTimeout(timeoutRef.current);
  }, []);

  return (
    <p className="text-[#ABB2BF] text-[1rem] w-full text-justify lg:text-left whitespace-pre-line font-mono relative leading-relaxed">
      <span className="invisible">{textoCompleto}</span>
      <span className="absolute left-0 top-0">{texto}</span>
    </p>
  );
};

export default Description;
