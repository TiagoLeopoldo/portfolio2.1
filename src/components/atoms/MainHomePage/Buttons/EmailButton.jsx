const EmailButton = ({ onClick }) => (
  <button
    onClick={onClick}
    className="hidden lg:flex items-center justify-center h-[2.3125rem] border border-[#1B98E0] rounded-md shadow-md text-[0.9375rem] font-bold px-[1rem] opacity-70 transition hover:shadow-lg active:scale-[0.95] gap-x-[0.5rem] whitespace-nowrap"
  >
    Mande uma mensagem
  </button>
);

export default EmailButton;
