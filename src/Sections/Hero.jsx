import logo from "../assets/logo.png";
import moura from "../assets/moura.png";
import heliar from "../assets/heliar.png";
// import yuasa from "../assets/yuasa.png";
// import delco from "../assets/delco.png";
import imgBg from "../assets/imgBg.png";
import imgMan from "../assets/imgMan.png";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { FaStar } from "react-icons/fa6";

function Hero() {
  return (
    <section
      style={{
        backgroundImage: `url(${imgBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="lg:pt-20 overflow-hidden lg:h-[800px]"
    >
      <div className="container relative mx-auto px-6 flex flex-col lg:flex-row items-center gap-12 justify-between">
        <div className="w-full max-w-[630px] mt-14">
          <div className="flex items-center justify-center md:justify-start gap-6 mb-11">
            <img src={logo} alt="Logo Cais baterias" className="w-24" />
            <div className="h-12 md:h-14 bg-white w-[1px]"></div>
            <div>
              <p className="text-sm text-end md:text-start">Serviço Oficial</p>
              <div className="flex items-center gap-4">
                <img src={moura} alt="Logo Moura" className="w-24 md:w-auto" />
                <img
                  src={heliar}
                  alt="Logo Heliar"
                  className="w-20 md:w-auto"
                />
              </div>
            </div>
          </div>
          <h1 className="text-white font-semibold text-center md:text-start text-xl md:text-3xl mb-4">
            A Bateria Falhou? Chegamos Rápido em até{" "}
            <span className="text-[#b99921] font-bold">45 Min</span>!
          </h1>
          <p className="text-center md:text-start text-base font-semibold md:text-xl mb-8 md:mb-12">
            <span className="text-[#b99921] font-semibold">
              Entrega e testes totalmente GRÁTIS
            </span>
            , com instalação rápida, e segura feita por técnicos especializados
            onde você estiver — tudo com suporte{" "}
            <span className="text-[#b99921] font-semibold">Gratuito</span>,
            pagamento facilitado em até{" "}
            <span className="text-[#b99921] font-semibold">10x sem juros</span>.
          </p>

          <a
            id="whatsapp_button"
            href="https://wa.me/5513996636009?text=Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20bateria.%20Voc%C3%AAs%20podem%20me%20ajudar%3F"
            target="_blank"
            style={{
              boxShadow:
                "-9px -1px 20px 10px rgba(185, 153, 33, 0.4), 0px 23px 133px rgba(185, 153, 33, 0.4)",
            }}
            className="relative overflow-hidden md:w-max gap-2 bg-[#b99921] rounded-full px-6 md:px-16 py-3 transition duration-300 transform hover:bg-[#8a6f19] hover:scale-105 text-white font-semibold flex items-center justify-center"
          >
            <span className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent animate-slide"></span>

            <AiOutlineWhatsApp className="text-xl z-10" />
            <span className="z-10">Falar com um técnico agora</span>
          </a>

          <div className="mt-12">
            <div className="flex justify-center md:justify-start items-center gap-1">
              <FaStar className="text-xl text-[#E0A325]" />
              <FaStar className="text-xl text-[#E0A325]" />
              <FaStar className="text-xl text-[#E0A325]" />
              <FaStar className="text-xl text-[#E0A325]" />
              <FaStar className="text-xl text-[#E0A325]" />
            </div>

            <p className="text-center md:text-start text-lg mt-1">
              <span>A loja mais bem avaliada no </span>
              <span className="text-[#4285F4]">G</span>
              <span className="text-[#EA4335]">o</span>
              <span className="text-[#FBBC05]">o</span>
              <span className="text-[#4285F4]">g</span>
              <span className="text-[#34A853]">l</span>
              <span className="text-[#EA4335]">e</span>
              <span>!</span>
            </p>
          </div>
        </div>
        <div className="mt-[-2.5rem] lg:mt-0 lg:absolute lg:top-44 lg:-right-40 xl:top-20 xl:right-0 max-w-[900px]">
          <img
            src={imgMan}
            alt="Imagem de homem segurando bateria com a logo da Moura"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
