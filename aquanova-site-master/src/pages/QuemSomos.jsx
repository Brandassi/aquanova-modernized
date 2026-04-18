import { Header } from "../components/Header.jsx"
import { QuemSomosComp } from "../components/QuemSomosComp.jsx"

import fotoMenocci from "../assets/fotoMenocci.jpeg"
import fotoBrandassi from "../assets/fotoBrandassi.jpeg"
import modelo from "../assets/Ellipse 7.jpg"

export function QuemSomos() {
  return (
    <div className="min-h-screen bg-[#f4f7fb] text-[#0A1A2F] transition-colors duration-300 dark:bg-[#050816] dark:text-white">
      <Header />

      <main className="mx-auto max-w-7xl px-4 pb-20 pt-28 sm:px-6 lg:px-8">
        <section className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-[#0A2A83]/10 bg-white px-4 py-2 text-sm font-medium text-[#0A2A83] shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-white">
            Equipe do projeto
          </span>
          <h1 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl">
            Quem somos
          </h1>
          <p className="mt-4 text-base leading-relaxed text-[#0A1A2F]/70 dark:text-white/70">
            A equipe reunida para idealizar, construir e apresentar o AquaNova.
          </p>
        </section>

        <section className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          <QuemSomosComp img={fotoMenocci} tittle="Arthur Menocci" />
          <QuemSomosComp img={modelo} tittle="Eduardo Mariano" />
          <QuemSomosComp img={modelo} tittle="Guilherme Milbeyer" />
          <QuemSomosComp img={fotoBrandassi} tittle="Gustavo Brandassi" />
        </section>
      </main>
    </div>
  )
}
