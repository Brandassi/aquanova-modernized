import { Link } from "react-router-dom"
import { BadgePlus, Mail, UserRound, Waves } from "lucide-react"

import LogoSite from "../assets/logo tcc-black 1.jpg"
import background from "../assets/login.png"

export function Cadastro() {
  return (
    <div className="min-h-screen bg-[#f4f7fb] text-[#0A1A2F] transition-colors duration-300 dark:bg-[#050816] dark:text-white">
      <main className="grid min-h-screen lg:grid-cols-[0.85fr_1.15fr]">
        <section className="relative hidden overflow-hidden lg:block">
          <img src={background} alt="" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(10,26,47,0.22),rgba(10,26,47,0.78))]" />
          <div className="relative z-10 flex h-full flex-col justify-between p-12 text-white">
            <div className="flex items-center gap-3">
              <Waves />
              <span className="text-sm font-medium uppercase tracking-[0.3em]">AquaNova</span>
            </div>

            <div className="max-w-lg space-y-5">
              <h1 className="text-5xl font-black leading-tight">
                Crie sua conta com um cadastro mais organizado.
              </h1>
              <p className="max-w-xl text-base leading-relaxed text-white/75">
                Um fluxo de cadastro visualmente consistente com o restante do projeto.
              </p>
            </div>
          </div>
        </section>

        <section className="flex items-center justify-center px-4 py-10 sm:px-6 lg:px-8">
          <div className="w-full max-w-md rounded-[2.25rem] border border-[#d7e0f5] bg-white p-6 shadow-[0_20px_70px_rgba(10,26,47,0.08)] dark:border-white/10 dark:bg-[#0E1539] sm:p-8">
            <img src={LogoSite} alt="Logo do AquaNova" className="mx-auto h-24 w-24 object-contain" />

            <div className="mt-6 text-center">
              <h2 className="text-3xl font-black tracking-tight">Cadastro</h2>
              <p className="mt-2 text-sm text-[#0A1A2F]/70 dark:text-white/70">
                Crie sua conta para personalizar sua experiência.
              </p>
            </div>

            <form className="mt-8 space-y-5">
              <Field label="Nome" placeholder="Nome e sobrenome" icon={<UserRound size={16} />} />
              <Field label="Email" type="email" placeholder="Ex: joao@gmail.com" icon={<Mail size={16} />} />
              <Field label="Senha" type="password" placeholder="Crie uma senha" icon={<BadgePlus size={16} />} />

              <button
                type="button"
                className="inline-flex h-12 w-full items-center justify-center rounded-full bg-[#0A2A83] text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl dark:bg-white dark:text-[#071028]"
              >
                Cadastrar
              </button>

              <p className="text-center text-sm text-[#0A1A2F]/70 dark:text-white/70">
                Já tem cadastro?{" "}
                <Link to="/login" className="font-semibold text-[#0A2A83] hover:underline dark:text-white">
                  Faça login
                </Link>
              </p>
            </form>
          </div>
        </section>
      </main>
    </div>
  )
}

function Field({ label, type = "text", placeholder, icon }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-semibold text-[#0A1A2F] dark:text-white">{label}</span>
      <span className="flex h-12 items-center gap-3 rounded-2xl border border-[#d7e0f5] bg-[#f3f6fb] px-4 transition focus-within:border-[#0A2A83] dark:border-white/10 dark:bg-white/5">
        <span className="text-[#0A2A83] dark:text-white">{icon}</span>
        <input
          type={type}
          placeholder={placeholder}
          className="w-full bg-transparent outline-none placeholder:text-[#6b7280] dark:text-white dark:placeholder:text-white/35"
        />
      </span>
    </label>
  )
}
