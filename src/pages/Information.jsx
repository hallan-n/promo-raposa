import { ShieldCheckIcon, ComputerDesktopIcon, UsersIcon, PercentBadgeIcon, ReceiptPercentIcon, ShoppingBagIcon, BoltIcon, Squares2X2Icon } from "@heroicons/react/24/outline"
import FadeIn from "../components/FadeIn"
import amazon from "../assets/lojas/amazon.png"
import americanas from "../assets/lojas/americanas.png"
import casas_bahia from "../assets/lojas/casas_bahia.png"
import extra from "../assets/lojas/extra.png"
import kabum from "../assets/lojas/kabum.png"
import nuuvem from "../assets/lojas/nuuvem.png"
import ponto from "../assets/lojas/ponto.png"
import submarino from "../assets/lojas/submarino.png"


export default function Information() {
    const stores = [
        amazon,
        americanas,
        casas_bahia,
        extra,
        kabum,
        nuuvem,
        ponto,
        submarino
    ]

    return (
        <div id="information" className="bg-secondary py-20">
            <div className="container mx-auto p-4">
                <p className="text-center text-white">Por que nos escolher?</p>
                <p className="text-center uppercase text-2xl font-bold text-primary mt-2 mb-6">Vantagens do Grupo</p>

                <div className="flex flex-col gap-4">
                    <div className="flex mx-auto flex-col sm:flex-row gap-4 justify-center">

                        <FadeIn>


                            <div className="flex gap-7 flex-col border border-gray-700 rounded-2xl p-8 bg-[#1B1B26] h-full max-w-[555px] hover:shadow-[0_0_20px_rgba(167,139,250,0.35)] transition-all duration-300">

                                <ShieldCheckIcon className="bg-primary p-4 rounded-lg w-18 h-18 text-white" />

                                <div>
                                    <p className="text-primary font-bold text-lg">Ofertas Verificadas</p>
                                    <p className="text-white mt-2">
                                        Nossa equipe trabalha para analisar e buscar as melhores ofertas somente com lojas parceiras confiáveis.
                                    </p>
                                </div>

                            </div>

                        </FadeIn>
                        <FadeIn delay={100}>

                            <div className="flex gap-7 flex-col border border-gray-700 rounded-2xl p-8 bg-[#1B1B26] h-full max-w-[555px] hover:shadow-[0_0_20px_rgba(167,139,250,0.35)] transition-all duration-300">
                                <ComputerDesktopIcon className="bg-primary p-4 rounded-lg w-18 h-18 text-white" />
                                <div>
                                    <p className="text-primary font-bold text-lg">Multiplataforma</p>
                                    <p className="text-white mt-2">As promoções estão presentes em todas as plataformas: WhatsApp, Telegram, Twitter, Facebook, Instagram e Website.</p>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                    <div className="flex mx-auto flex-col sm:flex-row gap-4 justify-center">

                        <FadeIn delay={200}>

                            <div className="flex gap-7 flex-col border border-gray-700 rounded-2xl p-8 bg-[#1B1B26] h-full max-w-[555px] hover:shadow-[0_0_20px_rgba(167,139,250,0.35)] transition-all duration-300">
                                <UsersIcon className="bg-primary p-4 rounded-lg w-18 h-18 text-white" />
                                <div>
                                    <p className="text-primary font-bold text-lg">Moderadores Dedicados</p>
                                    <p className="text-white mt-2">Contamos com uma equipe de moderadores dedicados para publicar ofertas selecionadas e responder dúvidas.</p>
                                </div>
                            </div>

                        </FadeIn>
                        <FadeIn delay={300}>

                            <div className="flex gap-7 flex-col border border-gray-700 rounded-2xl p-8 bg-[#1B1B26] h-full max-w-[555px] hover:shadow-[0_0_20px_rgba(167,139,250,0.35)] transition-all duration-300">
                                <PercentBadgeIcon className="bg-primary p-4 rounded-lg w-18 h-18 text-white" />
                                <div>
                                    <p className="text-primary font-bold text-lg">Cupons Exclusivos</p>
                                    <p className="text-white mt-2">Obtenha os melhores cupons disponíveis e economize ainda mais nas suas compras.</p>
                                </div>
                            </div>
                        </FadeIn>
                    </div>


                </div>

                <p className="text-center text-white pt-20">Por que nos escolher?</p>
                <p className="text-center uppercase text-2xl font-bold text-primary mt-2 mb-6">Vantagens do Grupo</p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-[1120px] mx-auto">
                    <FadeIn>
                        <div className="justify-center border border-gray-700 rounded-2xl p-8 bg-[#1B1B26] h-full hover:shadow-[0_0_20px_rgba(167,139,250,0.35)] transition-all duration-300">
                            <UsersIcon className="mx-auto bg-primary p-4 rounded-full w-18 h-18 text-white" />
                            <div className="mt-5">
                                <p className="text-center text-white font-bold text-2xl">5.000+</p>
                                <p className="text-center text-white">Participantes</p>
                            </div>
                        </div>
                    </FadeIn>
                    <FadeIn delay={100}>
                        <div className="justify-center border border-gray-700 rounded-2xl p-8 bg-[#1B1B26] h-full hover:shadow-[0_0_20px_rgba(167,139,250,0.35)] transition-all duration-300">
                            <BoltIcon className="mx-auto bg-primary p-4 rounded-full w-18 h-18 text-white" />
                            <div className="mt-5">
                                <p className="text-center text-white font-bold text-2xl">100+</p>
                                <p className="text-center text-white">Ofertas Diárias</p>
                            </div>
                        </div>
                    </FadeIn>
                    <FadeIn delay={200}>
                        <div className="justify-center border border-gray-700 rounded-2xl p-8 bg-[#1B1B26] h-full hover:shadow-[0_0_20px_rgba(167,139,250,0.35)] transition-all duration-300">
                            <ShoppingBagIcon className="mx-auto bg-primary p-4 rounded-full w-18 h-18 text-white" />
                            <div className="mt-5">
                                <p className="text-center text-white font-bold text-2xl">150+</p>
                                <p className="text-center text-white">Lojas Parceiras</p>
                            </div>
                        </div>
                    </FadeIn>
                    <FadeIn delay={300}>
                        <div className="justify-center border border-gray-700 rounded-2xl p-8 bg-[#1B1B26] h-full hover:shadow-[0_0_20px_rgba(167,139,250,0.35)] transition-all duration-300">
                            <Squares2X2Icon className="mx-auto bg-primary p-4 rounded-full w-18 h-18 text-white" />
                            <div className="mt-5">
                                <p className="text-center text-white font-bold text-2xl">30+</p>
                                <p className="text-center text-white">Categorias</p>
                            </div>
                        </div>
                    </FadeIn>
                </div>

                <p className="text-center text-white pt-20">Parceiros</p>
                <p className="text-center uppercase text-2xl font-bold text-primary mt-2 mb-6">Lojas parceiras</p>

                <div className="w-full mx-auto max-w-[1120px] overflow-hidden">
                    <div
                        className="flex w-max animate-[scroll_25s_linear_infinite] hover:[animation-play-state:paused]"
                    >
                        {[...stores, ...stores].map((store, index) => (
                            <img
                                key={index}
                                src={store}
                                className="h-14 mx-10 object-contain opacity-80 hover:opacity-100 transition duration-300 hover:scale-110"
                            />
                        ))}
                    </div>

                    <style>
                        {`
                            @keyframes scroll {
                                from { transform: translateX(0); }
                                to { transform: translateX(-50%); }
                            }
                        `}
                    </style>
                </div>

            </div>
        </div>
    )
}