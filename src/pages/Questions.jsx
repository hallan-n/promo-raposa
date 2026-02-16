import Header from "../components/Headers";
import Question from "../components/Question";

export default function Questions() {
    return (
        <div id="questions" className="bg-secondary py-20">
            <div className="container mx-auto p-4">
                <p className="text-center text-white">FAQ</p>
                <p className="text-center uppercase text-2xl font-bold text-primary mt-2 mb-6">Perguntas Frequentes</p>

                <div className="flex flex-col gap-4">

                    <Question index={1} title="É confiável comprar ofertas do grupo ?" content="Sim, todas as ofertas publicadas são de lojas parceiras em que já verificamos a confiabilidade." />
                    <Question index={2} title="Todos os grupos são gratuítos ?" content="Sim, basta clicar no link do convite e entrar de forma gratuíta. Também é permitido convidar outras pessoas para participar do grupo." />
                    <Question index={3} title="As promoções são apenas de games?" content="Não, as promoções são de produtos de diversas categorias além de games, como celulares, eletrônicos, eletrodomésticos, e muito mais." />
                    <Question index={4} title="É possível tirar dúvida sobre promoções ?" content="Sim, você pode tirar dúvidas sobre promoções com os nossos moderadores dos grupos." />
                    <Question index={5} title="Posso sair quando quiser ?" content="Sim, as ofertas são enviadas através de grupos comuns e você pode sair do grupo a qualquer momento." />
                </div>
            </div>
        </div>
    )
}