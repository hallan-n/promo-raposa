export default function Footer() {
    return (
        <footer className="bg-[#1B1B26] border-t border-gray-800 pt-20">

            <div className="container mx-auto px-6 py-14">

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-gray-300">
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-4">
                            Sobre
                        </h3>

                        <p className="text-sm leading-relaxed">
                            Procurando produtos com um preço bacana?
                            A Promo Raposa encontra as melhores ofertas pra você.
                        </p>
                    </div>


                    <div>
                        <h3 className="text-white font-semibold text-lg mb-4">
                            Páginas
                        </h3>

                        <ul className="space-y-2 text-sm">
                            <li className="hover:text-primary cursor-pointer transition-colors">
                                <a href="#home">Home</a>
                            </li>

                            <li className="hover:text-primary cursor-pointer transition-colors">
                                <a href="#information">Informações</a>
                            </li>

                            <li className="hover:text-primary cursor-pointer transition-colors">
                                <a href="#groups">Grupos</a>
                            </li>

                            <li className="hover:text-primary cursor-pointer transition-colors">
                                <a href="#questions">Dúvidas</a>
                            </li>
                        </ul>
                    </div>


                    <div>
                        <h3 className="text-white font-semibold text-lg mb-4">
                            Promo Raposa
                        </h3>

                        <p className="text-sm mb-4">
                            Achadinhos diários das melhores lojas com descontos reais.
                        </p>

                        <div className="flex gap-3">
                            <div className="w-9 h-9 bg-primary/20 rounded-lg flex items-center justify-center hover:bg-primary/30 transition-colors cursor-pointer">
                                🦊
                            </div>
                        </div>
                    </div>

                </div>


                {/* DIVISOR */}
                <div className="border-t border-gray-800 mt-12 pt-6 text-center text-sm text-gray-500">
                    Copyright © 2026 Promo Raposa. Todos os direitos reservados.
                </div>

            </div>

        </footer>
    );
}
