import { ShieldCheckIcon, ComputerDesktopIcon, UsersIcon, PercentBadgeIcon, ReceiptPercentIcon, ShoppingBagIcon, BoltIcon, Squares2X2Icon } from "@heroicons/react/24/outline"
import FadeIn from "../components/FadeIn"
import beleza from "../assets/beleza.png"
import casa from "../assets/casa.png"
import kids from "../assets/kids.png"
import tech from "../assets/tech.png"

import logo_wpp from "../assets/whatsapp.svg"
import logo_telegram from "../assets/telegram.svg"
import Group from "../components/Group"

export default function Groups() {


    return (
        <div id="groups" className=" bg-secondary py-20 pb-30 bg-[radial-gradient(circle_at_15%_20%,rgba(139,92,246,0.25),transparent_40%),radial-gradient(circle_at_85%_30%,rgba(37,99,235,0.35),transparent_50%),linear-gradient(135deg,#020617_0%,#0f172a_50%,#020617_100%)]">
            <div className="container mx-auto p-4">
                <p className="text-center text-white">Participe agora</p>
                <p className="text-center uppercase text-2xl font-bold text-primary mt-2 mb-6">Acesse nossos grupos</p>

                <div className="flex flex-col gap-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1120px] mx-auto px-4">

                        <FadeIn>
                            <Group img={casa} description="Os melhores achadinhos para sua casa com descontos imperdíveis, tudo em um só lugar." group_link="https://chat.whatsapp.com/ENCVj8nvoNwCOFR1sj3raK?fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGn-QZln_LB3cDHcYEcUudEHsTf0AUrN7xL7NZFSHlQEUerWooG2XNysgTbOig_aem_wPiGBdapCY3VaWg2H9cgQg" />
                        </FadeIn>


                        <FadeIn delay={100}>
                            <Group img={kids} description="Os melhores achadinhos para o mundo infantil com descontos imperdíveis, tudo em um só lugar." group_link="https://chat.whatsapp.com/DNQVU1tmqDmEYfl9uz2tnI?fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnfBsFbIxYf1rpWsmqsg6Bzs4vVb6I1W0RozkXXpimArXReNCdVJAvz8Pmp7U_aem_66DAykvqpgfi0rq8KDAbyw" />
                        </FadeIn>


                        <FadeIn delay={200}>
                            <Group img={tech} description="Os melhores achadinhos de tecnologia com descontos imperdíveis, tudo em um só lugar." group_link="https://chat.whatsapp.com/GKoCh4z7HInLxTTnR84Jbi?mode=gi_t&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnXAxM1oK9MDs9dBXErgWxyJc2yI20PL8b3nvXZkjHWn4N79w7DhpSEMIFoq4_aem_bcdbt_XTW0xx0YKgjnedIA" />
                        </FadeIn>


                        <FadeIn delay={300}>
                            <Group img={beleza} description="Os melhores achadinhos de beleza com descontos imperdíveis, tudo em um só lugar." group_link="https://chat.whatsapp.com/Drn6ZY3dmkQK36pcwmHhxS?fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGn2lqevIihe4jDu3yWFENhpBSwr1za7FY3ksdjWlwsEIDahpcc61c5f5BL6bQ_aem_8U-tqafLoQHmOfsPEWic7g" />
                        </FadeIn>

                    </div>

                </div>
            </div>
        </div>
    )
}