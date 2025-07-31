import logos from "../assets/logos.png";
import logosMobile from "../assets/logosMobile.png";
import grupo from "../assets/grupo.png";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { FaPhone } from "react-icons/fa6";
import { FaLocationPin } from "react-icons/fa6";

function Contact() {
  return (
    <section className="container mx-auto px-6 mt-16 lg:mt-32">
      <div className="flex items-center justify-center flex-col">
        <h2 className="text-xl w-full max-w-[450px] lg:text-2xl text-center mb-3.5">
          Precisando de ajuda com sua bateria? A{" "}
          <span className="text-[#b99921] font-bold">solução</span> está a{" "}
          <span className="text-[#b99921] font-bold">um clique</span>.
        </h2>
        <p className="text-center w-full max-w-[500px]">
          Está com o carro parado? Moto não liga? Não se preocupe. Nossa equipe
          vai até você com <strong>entrega rápida</strong>,{" "}
          <strong>teste completo</strong> e <strong>instalação gratuita</strong>
          .
        </p>

        <img
          src={logos}
          alt="Imagens das logo marcas de montadoras"
          className="mt-8 mb-16 w-full max-w-[1200px] hidden lg:flex"
        />
        <img
          src={logosMobile}
          alt="Imagens das logo marcas de montadoras"
          className="mt-8 mb-16 w-full max-w-[800px] flex lg:hidden"
        />

        <div>
          <h3 className="text-lg text-center mb-6 font-semibold">
            Fale direto com nossos técnicos:
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#25230f] p-6 rounded-lg border border-[#b99921]">
              <h3 className="text-lg font-semibold mb-4">WhatsApp</h3>
              <a
                id="whatsapp_button"
                href="https://api.whatsapp.com/send/?phone=5511968301193&text=Gostaria+de+informa%C3%A7%C3%B5es+sobre+bateria.+Voc%C3%AAs+podem+me+ajudar%3F&type=phone_number&app_absent=0"
                target="_blank"
                style={{
                  boxShadow:
                    "-9px -1px 20px 10px rgba(185, 153, 33, 0.4), 0px 23px 133px rgba(185, 153, 33, 0.4)",
                }}
                className="relative overflow-hidden flex items-center justify-center gap-2 bg-[#b99921] rounded-full px-6 sm:px-10 py-3 transition duration-300 transform hover:bg-[#8a6f19] hover:scale-105 text-white font-semibold w-full box-border"
              >
                <span className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent animate-slide"></span>

                <AiOutlineWhatsApp className="text-xl z-10" />
                <span className="z-10">Chamar no WhatsApp</span>
              </a>
            </div>
            <div className="bg-[#25230f] p-6 rounded-lg border border-[#b99921]">
              <h3 className="text-lg font-semibold mb-4">Telefone</h3>
              <a
                id="trackfone_button"
                href="tel:+551146733100"
                style={{
                  boxShadow:
                    "-9px -1px 20px 10px rgba(185, 153, 33, 0.4), 0px 23px 133px rgba(185, 153, 33, 0.4)",
                }}
                className="relative overflow-hidden flex items-center justify-center gap-2 bg-[#b99921] rounded-full px-6 sm:px-10 py-3 transition duration-300 transform hover:bg-[#8a6f19] hover:scale-105 text-white font-semibold w-full box-border"
              >
                <span className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent animate-slide"></span>

                <FaPhone className="text-xl z-10" />
                <span className="z-10">Ligue agora</span>
              </a>
            </div>
          </div>

          <div className="flex items-center flex-col justify-center mt-12 mb-[9rem]">
            <a
              href="https://www.google.com/maps?q=sao+paulo,+SP"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 flex-col md:flex-row text-center"
            >
              <FaLocationPin />
              <span>São Paulo - SP CNPJ 60.730.292/0001-40 </span>
            </a>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
