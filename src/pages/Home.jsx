import { useEffect, useState } from "react"
import { CheckCircleIcon, UserGroupIcon } from "@heroicons/react/24/outline"
import logo_wpp from "../assets/whatsapp.svg"

export default function Home() {
    const SPEED = 1200
    const MIN = 35
    const MAX = 120

    const [online, setOnline] = useState(55)

    useEffect(() => {
        const interval = setInterval(() => {
            setOnline(prev => {
                const rand = Math.random()
                let next = prev

                if (rand < 0.7) next = prev + 1
                else if (rand < 0.9) next = prev - 1
                else next = prev

                if (next > MAX) next = MAX
                if (next < MIN) next = MIN

                return next
            })
        }, SPEED)

        return () => clearInterval(interval)
    }, [])

    return (
        <div id="home" className="flex justify-center p-6 relative min-h-screen pt-30 overflow-hidden bg-[radial-gradient(circle_at_15%_20%,rgba(139,92,246,0.25),transparent_40%),radial-gradient(circle_at_85%_30%,rgba(37,99,235,0.35),transparent_50%),linear-gradient(135deg,#020617_0%,#0f172a_50%,#020617_100%)]">
            <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(139,92,246,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.15)_1px,transparent_1px)] [background-size:50px_50px]" />

            <div className="hidden sm:block absolute w-full h-full overflow-hidden pointer-events-none z-1">

                <div className="absolute top-[20%] left-[30%] w-[6px] h-[6px] rounded-full bg-primary opacity-30 shadow-[0_0_10px_var(--color-primary),0_0_20px_var(--color-primary)] animate-[ledBlink_2s_ease-in-out_infinite]" />

                <div className="absolute top-[35%] right-[25%] w-[6px] h-[6px] rounded-full bg-primary opacity-30 shadow-[0_0_10px_var(--color-primary),0_0_20px_var(--color-primary)] animate-[ledBlink_2s_ease-in-out_infinite] [animation-delay:0.5s]" />

                <div className="absolute bottom-[25%] left-[20%] w-[6px] h-[6px] rounded-full bg-primary opacity-30 shadow-[0_0_10px_var(--color-primary),0_0_20px_var(--color-primary)] animate-[ledBlink_2s_ease-in-out_infinite] [animation-delay:1s]" />

                <div className="absolute bottom-[40%] right-[15%] w-[6px] h-[6px] rounded-full bg-primary opacity-30 shadow-[0_0_10px_var(--color-primary),0_0_20px_var(--color-primary)] animate-[ledBlink_2s_ease-in-out_infinite] [animation-delay:1.5s]" />

                <div className="absolute top-[50%] left-[5%] w-[6px] h-[6px] rounded-full bg-yellow-400 opacity-30 shadow-[0_0_10px_#fbbf24] animate-[ledBlink_2s_ease-in-out_infinite] [animation-delay:0.3s]" />

                <div className="absolute top-[70%] right-[30%] w-[6px] h-[6px] rounded-full bg-green-500 opacity-30 shadow-[0_0_10px_#22c55e] animate-[ledBlink_2s_ease-in-out_infinite] [animation-delay:0.8s]" />

            </div>


            <div className="flex flex-col justify-center gap-10">
                <div className="flex justify-center">
                    <div className="relative inline-block">
                        <span className="absolute inset-0 rounded-full bg-primary/10 animate-ping [animation-duration:1.5s]"></span>
                        <p className="text-primary inline-block p-4 px-6 rounded-full bg-secondary/50 border">🔥 +5.000 membros ativos</p>
                    </div>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-white text-center">As <b className="text-primary">melhores promoções</b><br /> em um só lugar</h1>
                <p className="text-center text-white max-w-[550px] mx-auto">Receba ofertas verificadas de Tecnologia, Casa, Beleza, Kids e muito mais direto no seu celular. 100% gratuito!</p>

                <div className="flex flex-col md:flex-row gap-4">
                    <a href="https://chat.whatsapp.com/ENCVj8nvoNwCOFR1sj3raK?fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGn-QZln_LB3cDHcYEcUudEHsTf0AUrN7xL7NZFSHlQEUerWooG2XNysgTbOig_aem_wPiGBdapCY3VaWg2H9cgQg" className="hover:scale-105 flex items-center gap-4 cursor-pointer mx-auto rounded-full px-10 p-4 bg-gradient-to-r from-[#17AC4E] to-[#0D5728] shadow-[0_0_8px_rgba(34,197,94,0.35)] hover:shadow-[0_0_12px_rgba(34,197,94,0.45)] transition-all duration-300">
                        <img src={logo_wpp} alt="" />
                        <p className="font-bold text-white">Entrar no WhatsApp | Grátis</p>
                    </a>

                    <a href="#groups" className="hover:scale-105 flex items-center gap-4 cursor-pointer mx-auto rounded-full px-13 p-4 bg-gradient-to-r from-[#0084C6] to-[#02547D] shadow-[0_0_8px_rgba(34,158,217,0.35)] hover:shadow-[0_0_12px_rgba(34,158,217,0.45)] transition-all duration-300">
                        <UserGroupIcon className="w-6 h-6 text-white" />
                        <p className="font-bold text-white">Todos os grupos | Grátis</p>
                    </a>
                </div>

                <div className="flex gap-2 md:gap-4 justify-center">
                    <div className="flex gap-1 md:gap-2 items-center">
                        <CheckCircleIcon className="w-6 h-6 text-[#17AC4E]" />
                        <p className="text-white text-xs md:text-md">100% gratuito</p>
                    </div>

                    <div className="flex gap-1 md:gap-2 items-center">
                        <CheckCircleIcon className="w-6 h-6 text-[#17AC4E]" />
                        <p className="text-white text-xs md:text-md">Saia quando quiser</p>
                    </div>

                    <div className="flex gap-1 md:gap-2 items-center">
                        <CheckCircleIcon className="w-6 h-6 text-[#17AC4E]" />
                        <p className="text-white text-xs md:text-md">Ofertas verificadas</p>
                    </div>
                </div>
                <div className="mx-auto">
                    <div className="justify-center items-center gap-4 text-[#17AC4E] inline-flex p-4 px-6 rounded-full bg-[#17AC4E]/10 border">
                        <div className="relative">
                            <div className="absolute w-4 h-4 rounded-full bg-[#17AC4E] animate-ping [animation-duration:1.5s]"></div>
                            <div className="absolut w-4 h-4 rounded-full bg-[#17AC4E]"></div>
                        </div>
                        <p className="text-white"><b className="text-[#17AC4E]">{online}</b> pessoas online agora</p>
                    </div>
                </div>

            </div>
        </div>
    )
}
