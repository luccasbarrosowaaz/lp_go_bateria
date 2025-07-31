import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useRef, useState } from "react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { BsArrowDownCircleFill, BsTools, BsHeadset } from "react-icons/bs";
import {
  BiSolidUserCheck,
  BiSolidBuilding,
  BiSolidTruck,
} from "react-icons/bi";
import {
  AiFillCreditCard,
  AiFillWechat,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { LiaMoneyBillWaveAltSolid } from "react-icons/lia";
import { FaStar } from "react-icons/fa6";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { MdAdfScanner } from "react-icons/md";
import { FaCarBattery } from "react-icons/fa";

import carro from "../assets/carro.png";
import moto from "../assets/moto.png";
import barco from "../assets/barco.png";
import caminhao from "../assets/caminhao.png";
import fork from "../assets/fork.png";
import gerador from "../assets/gerador.png";

function About() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const paginationRef = useRef(null);
  const [swiperReady, setSwiperReady] = useState(false);

  useEffect(() => {
    setSwiperReady(true);
  }, []);

  return (
    <section className="container mx-auto px-6 mt-16 lg:mt-32">
      <div className="flex items-center justify-center flex-col">
        <BsArrowDownCircleFill className="text-[#b99921] text-5xl mb-6 rounded-full animate-bounce lg:shadow-[ -2px_-1px_20px_10px_rgba(7,82,194,0.4),0px_23px_133px_rgba(72,146,255,0.4)]" />
        <h2 className="text-xl lg:text-2xl w-full max-w-[400px] text-center">
          Mais do que baterias, um atendimento{" "}
          <span className="text-[#b99921] font-bold">explicativo</span> e{" "}
          <span className="text-[#b99921] font-bold">técnico</span>.
        </h2>
      </div>

      <div className="grid lg:grid-cols-2 gap-28 mt-10 lg:mt-20">
        <div className="flex flex-col items-center justify-center lg:items-start lg:justify-start">
          <p className="mb-8 text-center lg:text-start">
            Atuamos com as principais marcas do mercado, como Moura, Heliar,
            Zetta, Freedom, Unipower e muito mais, garantindo qualidade e
            durabilidade.{" "}
            <span className="text-[#b99921] font-semibold">
              Com mais de 25 anos de know-how
            </span>
            , nossa equipe especializada atende todos os tipos de veículos — de
            carros e motos até caminhões, veículos híbridos, elétricos,
            estacionários, no-breaks e aplicações industriais. Seja qual for a
            sua necessidade, temos a bateria certa para você, com instalação
            rápida e segura no local.
          </p>
          <div className="space-y-5 mb-10">
            <p className="flex items-center gap-3">
              <BsTools className="text-2xl text-[#b99921]" />
              <span>Instalação e testes 100% GRÁTIS</span>
            </p>
            <p className="flex items-center gap-3">
              <AiFillCreditCard className="text-2xl text-[#b99921]" />
              <span>Em até 10x sem juros</span>
            </p>
            <p className="flex items-center gap-3">
              <BsHeadset className="text-2xl text-[#b99921]" />
              <span>Pós-venda gratuito</span>
            </p>
            <p className="flex items-center gap-3">
              <BiSolidUserCheck className="text-2xl text-[#b99921]" />
              <span>Técnicos especializados</span>
            </p>
            <p className="flex items-center gap-3">
              <AiFillWechat className="text-2xl text-[#b99921]" />
              <span>Atendimento técnico e explicativo</span>
            </p>
            <p className="flex items-center gap-3">
              <BiSolidBuilding className="text-2xl text-[#b99921]" />
              <span>Atendimento exclusivo para empresas.</span>
            </p>
            <p className="flex items-center gap-3">
              <LiaMoneyBillWaveAltSolid className="text-2xl text-[#b99921]" />
              <span>Só pague depois da instalação</span>
            </p>
            <p className="flex items-center gap-3">
              <MdAdfScanner className="text-2xl text-[#b99921]" />
              <span>Temos Scanner Leitor de Códigos</span>
            </p>
            <p className="flex items-center gap-3">
              <FaCarBattery className="text-2xl text-[#b99921]" />
              <span>Baterias de 45ah, 60ah, 70ah e muito mais...</span>
            </p>
          </div>
          <a
            id="whatsapp_button"
            href="https://api.whatsapp.com/send/?phone=5511968301193&text=Gostaria+de+informa%C3%A7%C3%B5es+sobre+bateria.+Voc%C3%AAs+podem+me+ajudar%3F&type=phone_number&app_absent=0"
            target="_blank"
            style={{
              boxShadow:
                "-9px -1px 20px 10px rgba(185, 153, 33, 0.4), 0px 23px 133px rgba(185, 153, 33, 0.4)",
            }}
            className="relative overflow-hidden flex items-center md:w-max gap-2 bg-[#b99921] rounded-full px-12 md:px-16 py-3 transition duration-300 transform hover:bg-[#8a6f19] hover:scale-105 text-white font-semibold"
          >
            <span className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent animate-slide"></span>

            <AiOutlineWhatsApp className="text-xl z-10" />
            <span className="z-10">Peça sua bateria agora</span>
          </a>
        </div>

        <div className="flex flex-col items-center justify-center lg:items-start lg:justify-start">
          <div>
            <h3 className="text-lg text-center lg:text-start font-semibold mb-3">
              Temos bateria para tudo:
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                { src: carro, title: "Carro" },
                { src: moto, title: "Moto" },
                { src: barco, title: "Caminhão" },
                { src: caminhao, title: "Barcos" },
                { src: fork, title: "Geradores" },
                { src: gerador, title: "Geradores" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="p-2.5 rounded-lg bg-[#b99921] tique-right"
                  style={{ animationDelay: `${index * 2}s` }}
                  title={item.title}
                >
                  <img
                    src={item.src}
                    alt={`Imagem de ${item.title.toLowerCase()}`}
                    className="w-full h-[120px] object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 w-full max-w-[300px] md:max-w-[500px] lg:max-w-full">
            <h3 className="text-lg font-semibold mb-3">Depoimentos:</h3>

            <div className="relative">
              {swiperReady && (
                <Swiper
                  modules={[Navigation, Pagination]}
                  spaceBetween={30}
                  slidesPerView={1}
                  navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                  }}
                  pagination={{
                    el: paginationRef.current,
                    clickable: true,
                  }}
                  onBeforeInit={(swiper) => {
                    swiper.params.navigation.prevEl = prevRef.current;
                    swiper.params.navigation.nextEl = nextRef.current;
                    swiper.params.pagination.el = paginationRef.current;
                  }}
                  className="bg-[#25230f] w-full rounded-xl border border-[#b99921]"
                >
                  <SwiperSlide>
                    <div className="p-6">
                      <div className="flex gap-1 mb-2 text-[#E0A325]">
                        {Array(5)
                          .fill()
                          .map((_, i) => (
                            <FaStar key={i} className="text-lg" />
                          ))}
                      </div>
                      <h4 className="font-semibold mb-2">Fabio Morari</h4>
                      <p className="text-white text-sm md:text-base leading-relaxed">
                        “Agradeço a GoBat Baterias ao atendimento explicando bem
                        sobre a amperagem da bateria entrega rápida e os testes
                        no veículo antes de instalar valeu.”
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="p-6">
                      <div className="flex gap-1 mb-2 text-[#E0A325]">
                        {Array(5)
                          .fill()
                          .map((_, i) => (
                            <FaStar key={i} className="text-lg" />
                          ))}
                      </div>
                      <h4 className="font-semibold mb-2">Rose Morgenstern</h4>
                      <p className="text-white text-sm md:text-base leading-relaxed">
                        “Atendimento de primeira! Super rápido, educados e
                        atenciosos! Super indico!!!”
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="p-6">
                      <div className="flex gap-1 mb-2 text-[#E0A325]">
                        {Array(5)
                          .fill()
                          .map((_, i) => (
                            <FaStar key={i} className="text-lg" />
                          ))}
                      </div>
                      <h4 className="font-semibold mb-2">Jorge tedim simoes</h4>
                      <p className="text-white text-sm md:text-base leading-relaxed">
                        “Super atenciosa!!! O técnico q veio em minha casa super
                        educado e deixou tudo muito explicadinho!!! Coisa q
                        normalmente não acontece!!!! 10 !!!”
                      </p>
                    </div>
                  </SwiperSlide>
                </Swiper>
              )}
              <div
                ref={paginationRef}
                className="flex justify-center mt-4"
              ></div>
              <button
                ref={prevRef}
                className="absolute top-[105px] -left-6 transform -translate-y-1/2 text-white bg-[#b99921] p-2 cursor-pointer rounded-full shadow-md hover:bg-[#8a6f19] transition z-10 hidden md:flex"
              >
                <BsChevronLeft size={20} />
              </button>
              <button
                ref={nextRef}
                className="absolute top-[105px] -right-6 transform -translate-y-1/2 text-white bg-[#b99921] p-2 rounded-full cursor-pointer shadow-md hover:bg-[#8a6f19] transition z-10 hidden md:flex"
              >
                <BsChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
