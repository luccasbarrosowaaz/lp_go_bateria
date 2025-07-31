import { AiOutlineWhatsApp, AiOutlinePhone } from "react-icons/ai";

function ButtonsFixed() {
  return (
    <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 flex flex-col gap-3 z-50">
      <a
        id="whatsapp_button"
        href="https://api.whatsapp.com/send/?phone=5511968301193&text=Gostaria+de+informa%C3%A7%C3%B5es+sobre+bateria.+Voc%C3%AAs+podem+me+ajudar%3F&type=phone_number&app_absent=0"
        target="_blank"
        rel="noopener noreferrer"
        className="relative overflow-hidden flex items-center w-full gap-2 bg-[#b99921] rounded-full px-8 md:px-16 py-3 transition duration-300 transform hover:bg-[#8a6f19] hover:scale-105 text-white font-semibold"
        style={{
          boxShadow:
            "-9px -1px 20px 10px rgba(185, 153, 33, 0.4), 0px 23px 133px rgba(185, 153, 33, 0.4)",
        }}
      >
        <span className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent animate-slide"></span>
        <AiOutlineWhatsApp className="text-xl" />
        <span className="text-sm md:text-base font-medium">WhatsApp</span>
      </a>

      <a
        id="trackfone_button"
        href="tel:+551146733100"
        className="relative overflow-hidden flex items-center w-full gap-2 bg-[#b99921] rounded-full px-8 md:px-16 py-3 transition duration-300 transform hover:bg-[#8a6f19] hover:scale-105 text-white font-semibold"
        style={{
          boxShadow:
            "-9px -1px 20px 10px rgba(185, 153, 33, 0.4), 0px 23px 133px rgba(185, 153, 33, 0.4)",
        }}
      >
        <span className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent animate-slide"></span>
        <AiOutlinePhone className="text-xl" />
        <span className="text-sm md:text-base  font-medium">Ligue Agora</span>
      </a>
    </div>
  );
}

export default ButtonsFixed;
