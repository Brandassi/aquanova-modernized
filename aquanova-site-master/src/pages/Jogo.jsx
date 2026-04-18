import { Header } from "../components/Header.jsx"
import { ArrowRight, Gamepad2, ShieldCheck } from "lucide-react"
import fotoJogo from "../assets/jogoFoto.png"

export function Jogo() {
  return (
    <div className="min-h-screen bg-[#f4f7fb] text-[#0A1A2F] transition-colors duration-300 dark:bg-[#050816] dark:text-white">
      <Header />

      <main className="mx-auto max-w-7xl px-4 pb-20 pt-28 sm:px-6 lg:px-8">
        <section className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-6">
            <div className="inline-flex items-center rounded-full border border-[#0A2A83]/10 bg-white px-4 py-2 text-sm font-medium text-[#0A2A83] shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-white">
              <Gamepad2 size={16} className="mr-2" />
              Narrativa interativa
            </div>

            <h1 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
              Conheça nosso jogo
            </h1>

            <p className="max-w-2xl text-base leading-relaxed text-[#0A1A2F]/70 dark:text-white/70 sm:text-lg">
              Em um futuro próximo, o mundo enfrenta uma crise hídrica sem precedentes. O Dr. Elias cria uma máquina capaz de dessalinizar água usando energia solar, mas precisa defendê-la de sabotagens e espionagem.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.5rem] border border-[#d7e0f5] bg-white p-4 shadow-sm dark:border-white/10 dark:bg-white/5">
                <div className="inline-flex items-center gap-2 text-sm font-semibold text-[#0A2A83] dark:text-white">
                  <ShieldCheck size={16} />
                  História + tecnologia
                </div>
                <p className="mt-2 text-sm leading-relaxed text-[#0A1A2F]/70 dark:text-white/70">
                  A narrativa ajuda a explicar o tema de forma mais envolvente.
                </p>
              </div>

              <div className="rounded-[1.5rem] border border-[#d7e0f5] bg-white p-4 shadow-sm dark:border-white/10 dark:bg-white/5">
                <div className="inline-flex items-center gap-2 text-sm font-semibold text-[#0A2A83] dark:text-white">
                  <ArrowRight size={16} />
                  Demonstração externa
                </div>
                <p className="mt-2 text-sm leading-relaxed text-[#0A1A2F]/70 dark:text-white/70">
                  Ideal para apresentar o projeto fora do ambiente do site.
                </p>
              </div>
            </div>

            <a
              href="https://gd.games/games/ef233415-3088-4397-a7ca-da6c2bfca86b"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-[#0A2A83] px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl dark:bg-white dark:text-[#071028]"
            >
              Jogar agora
            </a>
          </div>

          <div className="relative">
            <div className="absolute -left-8 -top-8 h-28 w-28 rounded-full bg-[#0A2A83]/15 blur-2xl dark:bg-white/10" />
            <div className="absolute -bottom-4 right-0 h-32 w-32 rounded-full bg-cyan-400/15 blur-2xl dark:bg-cyan-400/10" />

            <div className="relative overflow-hidden rounded-[2.25rem] border border-[#d7e0f5] bg-white p-5 shadow-[0_24px_90px_rgba(10,26,47,0.12)] dark:border-white/10 dark:bg-[#0E1539]">
              <img
                src={fotoJogo}
                alt="Imagem do jogo"
                className="aspect-[16/10] w-full rounded-[1.75rem] object-cover"
              />

              <div className="mt-5 rounded-[1.5rem] bg-[#f7f9fd] p-5 dark:bg-white/5">
                <h2 className="text-xl font-bold">O que o jogo comunica</h2>
                <p className="mt-2 text-sm leading-relaxed text-[#0A1A2F]/70 dark:text-white/70">
                  Defesa da tecnologia, importância da água e noções reais sobre dessalinização e energia solar.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
