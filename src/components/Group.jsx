
import logo_wpp from "../assets/whatsapp.svg"
import logo_telegram from "../assets/telegram.svg"

export default function Group({ img, description, wpp_link, telegram_link }) {
    return (
        <div className="h-full flex flex-col justify-between gap-6 border border-gray-700 rounded-2xl p-6 md:p-8 bg-[#1B1B26] hover:shadow-[0_0_20px_rgba(167,139,250,0.35)] transition-all duration-300">

            <img src={img} className="rounded-lg w-full object-cover" alt="" />

            <div className="flex flex-col flex-grow justify-between">
                <p className="text-white my-4 text-base md:text-lg">{description}</p>

                <a href={wpp_link} className="mb-2 font-bold text-white cursor-pointer hover:scale-105 flex items-center justify-center gap-4 w-full rounded-lg px-4 py-3 md:py-4 bg-gradient-to-r from-[#17AC4E] to-[#0D5728] shadow-[0_0_8px_rgba(34,197,94,0.35)] hover:shadow-[0_0_12px_rgba(34,197,94,0.45)] transition-all duration-300">
                    <img src={logo_wpp} className="w-5 md:w-6" alt="" />
                    <span>Entrar no Grupo</span>
                </a>
                <a href={telegram_link} className="font-bold text-white cursor-pointer hover:scale-105 flex items-center justify-center gap-4 w-full rounded-lg px-4 py-3 md:py-4 bg-gradient-to-r from-[#0084C6] to-[#02547D] shadow-[0_0_8px_rgba(34,158,217,0.35)] hover:shadow-[0_0_12px_rgba(34,158,217,0.45)] transition-all duration-300">
                    <img src={logo_telegram} className="w-5 md:w-6" alt="" />
                    <span>Entrar no Grupo</span>
                </a>
            </div>

        </div>
    )
}