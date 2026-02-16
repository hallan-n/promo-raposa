import { CheckCircleIcon } from "@heroicons/react/24/outline"
import logo_wpp from "../assets/whatsapp.svg"
import logo_telegram from "../assets/telegram.svg"



export default function Home() {
    return (
        <div id="home" className="flex justify-center p-6 relative h-screen pt-40 overflow-hidden bg-[radial-gradient(circle_at_15%_20%,rgba(139,92,246,0.25),transparent_40%),radial-gradient(circle_at_85%_30%,rgba(37,99,235,0.35),transparent_50%),linear-gradient(135deg,#020617_0%,#0f172a_50%,#020617_100%)]">
            <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(139,92,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.1)_1px,transparent_1px)] [background-size:50px_50px]" />
            <div className="flex flex-col justify-center gap-10">
                <div className="flex justify-center">
                    <div className="relative inline-block">
                        <span className="absolute inset-0 rounded-full bg-primary/10 animate-ping [animation-duration:1.5s]"></span>
                        <p className="text-primary inline-block p-4 px-6 rounded-full bg-secondary/50 border">🔥 +2431 membros ativos</p>
                    </div>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-white text-center">As <b className="text-primary">melhores promoções</b><br /> em um só lugar</h1>
                <p className="text-center text-white max-w-[550px] mx-auto">Receba ofertas verificadas de Tecnologia, casa, beleza, kids e muito mais direto no seu celular. 100% gratuito!</p>

                <div className="flex flex-col md:flex-row gap-4">
                    <button className="hover:scale-105 flex items-center gap-4 cursor-pointer mx-auto rounded-full px-10 p-4 bg-gradient-to-r from-[#17AC4E] to-[#0D5728] shadow-[0_0_8px_rgba(34,197,94,0.35)] hover:shadow-[0_0_12px_rgba(34,197,94,0.45)] transition-all duration-300">
                        <img src={logo_wpp} alt="" />
                        <p className="font-bold text-white">Entrar no WhatsApp - Grátis</p>
                    </button>


                    <button className="hover:scale-105 flex items-center gap-4 cursor-pointer mx-auto rounded-full px-10 p-4 bg-gradient-to-r from-[#0084C6] to-[#02547D] shadow-[0_0_8px_rgba(34,158,217,0.35)] hover:shadow-[0_0_12px_rgba(34,158,217,0.45)] transition-all duration-300">
                        <img src={logo_telegram} alt="" />
                        <p className="font-bold text-white">Entrar no Telegram - Grátis</p>
                    </button>

                </div>
                <div className="flex gap-4 justify-center flex-col md:flex-row">
                    <div className="flex gap-2 items-center">
                        <CheckCircleIcon className="w-6 h-6 text-[#17AC4E]" />
                        <p className="text-white">100% gratuito</p>
                    </div>

                    <div className="flex gap-2 items-center">
                        <CheckCircleIcon className="w-6 h-6 text-[#17AC4E]" />
                        <p className="text-white">Saia quando quiser</p>
                    </div>
                    <div className="flex gap-2 items-center">
                        <CheckCircleIcon className="w-6 h-6 text-[#17AC4E]" />
                        <p className="text-white">Ofertas verificadas</p>
                    </div>
                </div>
                <div className="mx-auto">
                    <div className="justify-center items-center gap-4 text-[#17AC4E] inline-flex p-4 px-6 rounded-full bg-[#17AC4E]/10 border">
                        <div className="relative">
                            <div className="absolute w-4 h-4 rounded-full bg-[#17AC4E] animate-ping [animation-duration:1.5s]"></div>
                            <div className="absolut w-4 h-4 rounded-full bg-[#17AC4E]"></div>
                        </div>
                        <p className="text-white"><b className="text-[#17AC4E]">55</b> pessoas online agora</p>

                    </div>
                </div>
            </div>
        </div>
    )
}
