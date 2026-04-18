import { Link } from "react-router-dom"
import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"
import { Header } from "./Header"
import CardHome from "./CardHomeF"
import { CardHomeS } from "./CardHomeS"
import { QuemSomosComp } from "./QuemSomosComp"

import ciclo from "../assets/homeAssets/ciclo.svg"
import cifrao from "../assets/homeAssets/cifrao.svg"
import diamante from "../assets/homeAssets/diamante.svg"
import emoji from "../assets/homeAssets/emoji1.svg"
import interrogacao from "../assets/homeAssets/interrogacao.svg"
import like from "../assets/homeAssets/like.svg"
import fotoMenocci from "../assets/fotoMenocci.jpeg"
import fotoBrandassi from "../assets/fotoBrandassi.jpeg"
import modelo from "../assets/Ellipse 7.jpg"
import fotoJogo from "../assets/jogoFoto.png"
import robo from "../assets/robo.png"

import circuloDark from "../assets/homeAssets/circuloDark.png"
import interrogacaoDark from "../assets/homeAssets/interrogacaoDark.png"
import smileDark from "../assets/homeAssets/smileDark.png"
import cifraoDark from "../assets/homeAssets/cifraoDark.png"
import diamanteDark from "../assets/homeAssets/diamanteDark.png"
import likeDark from "../assets/homeAssets/likeDark.png"

const introCards = [
  {
    img: interrogacao,
    imgDark: interrogacaoDark,
    title: "Entenda o processo",
    text: "Captação, evaporação, condensação e entrega explicados de forma objetiva.",
  },
  {
    img: emoji,
    imgDark: smileDark,
    title: "Supera desafios locais",
    text: "Pensado para áreas com salinidade elevada e infraestrutura limitada.",
  },
  {
    img: ciclo,
    imgDark: circuloDark,
    title: "Operação contínua",
    text: "Monitoramento inteligente e recarga solar para funcionamento estável.",
  },
]

const benefits = [
  {
    img: like,
    imgDark: likeDark,
    title: "Fácil de usar",
    text: "Interface clara e automação para reduzir erros operacionais.",
  },
  {
    img: diamante,
    imgDark: diamanteDark,
    title: "Tecnologia valiosa",
    text: "Estrutura robusta, pensada para apresentação e uso em campo.",
  },
  {
    img: cifrao,
    imgDark: cifraoDark,
    title: "Economia real",
    text: "Menos dependência de transporte e menor custo operacional.",
  },
]

export function Home() {
  const { theme } = useContext(ThemeContext)

  return (
    <div className="min-h-screen bg-[#f4f7fb] text-[#0A1A2F] transition-colors duration-300 dark:bg-[#050816] dark:text-white">
      <Header />

      <main className="relative overflow-hidden pt-24">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(10,42,131,0.14),_transparent_28%),radial-gradient(circle_at_top_right,_rgba(56,189,248,0.12),_transparent_24%),linear-gradient(to_bottom,_rgba(255,255,255,0.72),_rgba(244,247,251,1)_18%,_rgba(244,247,251,1))] dark:bg-[radial-gradient(circle_at_top_left,_rgba(74,144,226,0.18),_transparent_28%),radial-gradient(circle_at_top_right,_rgba(29,78,216,0.15),_transparent_24%),linear-gradient(to_bottom,_rgba(5,8,22,0.92),_rgba(5,8,22,1)_18%,_rgba(5,8,22,1))]" />

        <section className="mx-auto grid max-w-7xl gap-10 px-4 pb-16 pt-10 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:pt-16">
          <div className="space-y-8">
            <div className="inline-flex items-center rounded-full border border-[#0A2A83]/10 bg-white/80 px-4 py-2 text-sm font-medium text-[#0A2A83] shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-white">
              Projeto de dessalinização solar
            </div>

            <div className="space-y-5">
              <h1 className="max-w-3xl text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Água limpa com autonomia energética.
              </h1>
              <p className="max-w-2xl text-base leading-relaxed text-[#0A1A2F]/75 dark:text-white/72 sm:text-lg">
                O AquaNova reúne energia solar, monitoramento e design modular para transformar
                a dessalinização em uma solução mais acessível, didática e apresentável.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-[1.5rem] border border-[#d7e0f5] bg-white p-4 shadow-sm dark:border-white/10 dark:bg-white/5">
                <p className="text-sm font-semibold text-[#0A2A83] dark:text-white">Monitoramento</p>
                <p className="mt-1 text-sm text-[#0A1A2F]/70 dark:text-white/70">Leitura em tempo real</p>
              </div>
              <div className="rounded-[1.5rem] border border-[#d7e0f5] bg-white p-4 shadow-sm dark:border-white/10 dark:bg-white/5">
                <p className="text-sm font-semibold text-[#0A2A83] dark:text-white">Energia solar</p>
                <p className="mt-1 text-sm text-[#0A1A2F]/70 dark:text-white/70">Autonomia off-grid</p>
              </div>
              <div className="rounded-[1.5rem] border border-[#d7e0f5] bg-white p-4 shadow-sm dark:border-white/10 dark:bg-white/5">
                <p className="text-sm font-semibold text-[#0A2A83] dark:text-white">Baixa manutenção</p>
                <p className="mt-1 text-sm text-[#0A1A2F]/70 dark:text-white/70">Projeto simplificado</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/instrucoes"
                className="inline-flex items-center justify-center rounded-full bg-[#0A2A83] px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl dark:bg-white dark:text-[#071028]"
              >
                Ver instruções
              </Link>
              <Link
                to="/componentes"
                className="inline-flex items-center justify-center rounded-full border border-[#0A2A83]/15 bg-white px-6 py-3 text-sm font-semibold text-[#0A2A83] shadow-sm transition hover:-translate-y-0.5 hover:border-[#0A2A83] hover:shadow-md dark:border-white/10 dark:bg-white/5 dark:text-white"
              >
                Ver componentes
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-8 -top-8 h-28 w-28 rounded-full bg-[#0A2A83]/15 blur-2xl dark:bg-white/10" />
            <div className="absolute -bottom-6 right-0 h-32 w-32 rounded-full bg-cyan-400/15 blur-2xl dark:bg-cyan-400/10" />

            <div className="relative overflow-hidden rounded-[2.25rem] border border-[#d7e0f5] bg-white p-5 shadow-[0_24px_90px_rgba(10,26,47,0.12)] dark:border-white/10 dark:bg-white/5">
              <img src={robo} alt="Protótipo AquaNova" className="h-[28rem] w-full rounded-[1.75rem] object-cover" />

              <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
                <span className="rounded-full bg-[#f3f7ff] px-4 py-2 text-center text-xs font-semibold text-[#0A2A83] dark:bg-white/10 dark:text-white">Solar</span>
                <span className="rounded-full bg-[#f3f7ff] px-4 py-2 text-center text-xs font-semibold text-[#0A2A83] dark:bg-white/10 dark:text-white">IoT</span>
                <span className="rounded-full bg-[#f3f7ff] px-4 py-2 text-center text-xs font-semibold text-[#0A2A83] dark:bg-white/10 dark:text-white">Didático</span>
                <span className="rounded-full bg-[#f3f7ff] px-4 py-2 text-center text-xs font-semibold text-[#0A2A83] dark:bg-white/10 dark:text-white">Escalável</span>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {introCards.map((card) => (
              <CardHome
                key={card.title}
                img={theme === "dark" ? card.imgDark : card.img}
                title={card.title}
                text={card.text}
              />
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-col gap-3 text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#0A2A83]/70 dark:text-white/55">
              Benefícios
            </span>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              O que o AquaNova entrega na prática
            </h2>
            <p className="mx-auto max-w-2xl text-sm leading-relaxed text-[#0A1A2F]/70 dark:text-white/70 sm:text-base">
              A proposta combina usabilidade, valor de apresentação e redução de custo operacional,
              sem perder clareza visual.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {benefits.map((card) => (
              <CardHomeS
                key={card.title}
                img={theme === "dark" ? card.imgDark : card.img}
                tittle={card.title}
                text={card.text}
              />
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid items-center gap-8 rounded-[2.25rem] border border-[#d7e0f5] bg-white p-6 shadow-[0_20px_70px_rgba(10,26,47,0.08)] dark:border-white/10 dark:bg-[#0E1539] lg:grid-cols-[0.9fr_1.1fr] lg:p-10">
            <div className="space-y-4">
              <span className="inline-flex items-center rounded-full bg-[#0A2A83]/8 px-4 py-2 text-sm font-medium text-[#0A2A83] dark:bg-white/10 dark:text-white">
                Equipe
              </span>
              <h2 className="text-3xl font-bold tracking-tight">Quem está por trás do projeto</h2>
              <p className="max-w-xl text-sm leading-relaxed text-[#0A1A2F]/70 dark:text-white/70">
                O projeto reúne desenvolvimento, prototipação e comunicação visual em um único
                conjunto coerente para apresentação.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <QuemSomosComp img={fotoMenocci} tittle="Arthur Menocci" />
              <QuemSomosComp img={modelo} tittle="Eduardo Mariano" />
              <QuemSomosComp img={modelo} tittle="Guilherme Milbeyer" />
              <QuemSomosComp img={fotoBrandassi} tittle="Gustavo Brandassi" />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid items-center gap-8 rounded-[2.25rem] border border-[#d7e0f5] bg-white p-6 shadow-[0_20px_70px_rgba(10,26,47,0.08)] dark:border-white/10 dark:bg-[#0E1539] lg:grid-cols-[1fr_0.95fr] lg:p-10">
            <div className="space-y-5">
              <span className="inline-flex items-center rounded-full bg-[#0A2A83]/8 px-4 py-2 text-sm font-medium text-[#0A2A83] dark:bg-white/10 dark:text-white">
                Jogo
              </span>
              <h2 className="text-3xl font-bold tracking-tight">Uma narrativa para apresentar o sistema</h2>
              <p className="max-w-2xl text-sm leading-relaxed text-[#0A1A2F]/70 dark:text-white/70">
                A história do Dr. Elias ajuda a contextualizar o tema e torna a proposta mais
                interessante para demonstração.
              </p>
              <Link
                to="/jogo"
                className="inline-flex items-center justify-center rounded-full bg-[#0A2A83] px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-lg dark:bg-white dark:text-[#071028]"
              >
                Abrir jogo
              </Link>
            </div>

            <img
              src={fotoJogo}
              alt="Imagem do jogo"
              className="h-full min-h-[18rem] w-full rounded-[1.75rem] object-cover shadow-xl"
            />
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-20 pt-8 sm:px-6 lg:px-8">
          <div className="rounded-[2.25rem] border border-[#d7e0f5] bg-[#0A2A83] p-8 text-white shadow-[0_20px_70px_rgba(10,42,131,0.22)] dark:border-white/10 dark:bg-[#101a3f]">
            <div className="flex flex-col items-start gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-white/70">Referências</p>
                <h3 className="mt-2 text-2xl font-bold">Base teórica e fontes do AquaNova</h3>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/75">
                  As referências sustentam as escolhas técnicas do projeto e reforçam a
                  credibilidade da apresentação.
                </p>
              </div>

              <Link
                to="/referencias"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#0A2A83] transition hover:-translate-y-0.5 hover:shadow-lg"
              >
                Ver referências
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
