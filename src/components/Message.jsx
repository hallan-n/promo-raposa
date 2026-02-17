import { useState, useEffect } from "react"
import wpp from "../assets/whatsapp_verde.svg"

const people = [
    { name: "João Carlos", city: "São Paulo", initials: "JC" },
    { name: "Maria Silva", city: "Rio de Janeiro", initials: "MS" },
    { name: "Pedro Santos", city: "Belo Horizonte", initials: "PS" },
    { name: "Ana Oliveira", city: "Curitiba", initials: "AO" },
    { name: "Lucas Ferreira", city: "Porto Alegre", initials: "LF" },
    { name: "Juliana Costa", city: "Salvador", initials: "JC" },
    { name: "Rafael Almeida", city: "Brasília", initials: "RA" },
    { name: "Camila Souza", city: "Fortaleza", initials: "CS" },
    { name: "Bruno Lima", city: "Recife", initials: "BL" },
    { name: "Fernanda Dias", city: "Manaus", initials: "FD" },
    { name: "Gustavo Rocha", city: "Goiânia", initials: "GR" },
    { name: "Larissa Mendes", city: "Campinas", initials: "LM" }
]

const times = ["agora mesmo", "há 1 minuto", "há 2 minutos", "há 3 minutos", "há 5 minutos"]

export default function Message() {
    const [visible, setVisible] = useState(false)
    const [person, setPerson] = useState(people[0])
    const [time, setTime] = useState(times[0])

    useEffect(() => {
        function showNotification() {
            const randomPerson = people[Math.floor(Math.random() * people.length)]
            const randomTime = times[Math.floor(Math.random() * times.length)]
            setPerson(randomPerson)
            setTime(randomTime)
            setVisible(true)

            setTimeout(() => setVisible(false), 4000) // 3000
        }

        // Primeira notificação após 8s
        const firstTimeout = setTimeout(() => {
            showNotification()

            // Depois notificação a cada 15s
            const interval = setInterval(() => {
                showNotification()
            }, 15000) // 15000

            // Limpa o intervalo quando o componente desmonta
            return () => clearInterval(interval)
        }, 8000) // 8000

        // Limpa timeout inicial quando desmontar
        return () => clearTimeout(firstTimeout)
    }, [])

    return (
        <div className="fixed bottom-4 left-4 z-50">
            <div
                className={`
          inline-flex items-center gap-4 md:gap-6 bg-[#1B1B26] p-4 px-6 rounded-2xl border border-gray-700 shadow-lg
          transition-all duration-500 ease-in-out
          transform
          ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"}
        `}
            >
                <div className="flex items-center gap-4 text-white">
                    <div className="w-10 h-10 md:w-16 md:h-16 flex items-center justify-center rounded-full text-white font-bold text-sm flex-shrink-0 bg-gradient-to-r from-blue-600 to-[#0D5728]">
                        {person.initials}
                    </div>

                    <div>
                        <p className="max-w-46 md:max-w-full text-sm md:text-inherit md:mb-3 truncate">
                            <b className="text-primary">{person.name}</b> de {person.city}
                        </p>
                        <p className="text-xs md:text-sm text-gray-400">{time}</p>
                    </div>
                </div>
                <img src={wpp} alt="" className="w-5 h-5 md:w-8 md:h-8" />
            </div>
        </div>
    )
}
