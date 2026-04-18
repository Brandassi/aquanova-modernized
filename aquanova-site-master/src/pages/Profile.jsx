import { Header } from "../components/Header.jsx"
import { Camera, CircleUserRound, MapPin, Phone, Save } from "lucide-react"

import LogoSite from "../assets/LogoAquaNova.png"
import FotodePerfil from "../assets/FotodePerfil.jpg"
import Edit from "../assets/Edit.jpg"

const states = [
  "Acre", "Alagoas", "Amapá", "Amazonas", "Bahia", "Ceará", "Distrito Federal", "Espírito Santo",
  "Goiás", "Maranhão", "Mato Grosso", "Mato Grosso do Sul", "Minas Gerais", "Pará", "Paraíba",
  "Paraná", "Pernambuco", "Piauí", "Rio de Janeiro", "Rio Grande do Norte", "Rio Grande do Sul",
  "Rondônia", "Roraima", "Santa Catarina", "São Paulo", "Sergipe", "Tocantins",
]

export function Profile() {
  return (
    <div className="min-h-screen bg-[#f4f7fb] text-[#0A1A2F] transition-colors duration-300 dark:bg-[#050816] dark:text-white">
      <Header />

      <main className="mx-auto grid max-w-7xl gap-8 px-4 pb-20 pt-28 sm:px-6 lg:grid-cols-[300px_1fr] lg:px-8">
        <aside className="hidden rounded-[2.25rem] border border-[#d7e0f5] bg-[#0A2A83] p-8 text-white shadow-[0_20px_70px_rgba(10,42,131,0.2)] lg:block dark:border-white/10 dark:bg-[#101a3f]">
          <img src={LogoSite} alt="AquaNova" className="mx-auto h-40 w-40 object-contain" />
          <p className="mt-6 text-center text-sm leading-relaxed text-white/75">
            Área do perfil para edição dos dados cadastrados.
          </p>
          <div className="mt-8 rounded-[1.5rem] bg-white/10 p-4">
            <p className="text-xs uppercase tracking-[0.3em] text-white/60">Perfil ativo</p>
            <p className="mt-2 text-lg font-semibold">Usuário AquaNova</p>
          </div>
        </aside>

        <section className="rounded-[2.25rem] border border-[#d7e0f5] bg-white p-6 shadow-[0_20px_70px_rgba(10,26,47,0.08)] dark:border-white/10 dark:bg-[#0E1539] lg:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-3">
              <img src={Edit} alt="" className="h-9 w-9 object-contain" />
              <div>
                <h1 className="text-3xl font-black tracking-tight">Editar perfil</h1>
                <p className="text-sm text-[#0A1A2F]/70 dark:text-white/70">
                  Atualize seus dados e preferências.
                </p>
              </div>
            </div>

            <div className="relative mx-auto h-28 w-28 lg:mx-0">
              <img
                src={FotodePerfil}
                alt="Foto de perfil"
                className="h-28 w-28 rounded-full object-cover ring-4 ring-[#dbe5fb] dark:ring-white/10"
              />
              <button
                type="button"
                className="absolute bottom-0 right-0 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#0A2A83] text-white shadow-lg dark:bg-white dark:text-[#071028]"
                aria-label="Alterar foto"
              >
                <Camera size={16} />
              </button>
            </div>
          </div>

          <form className="mt-8 grid gap-5">
            <div className="grid gap-5 lg:grid-cols-2">
              <Field label="Nome" placeholder="Mehrab" icon={<CircleUserRound size={16} />} />
              <Field label="Email" placeholder="morgi.business@gmail.com" icon={<CircleUserRound size={16} />} />
              <Field label="Endereço" placeholder="33062 Zboncak isle" icon={<MapPin size={16} />} />
              <Field label="Número para contato" placeholder="Ex: 9999999999" icon={<Phone size={16} />} />
            </div>

            <div className="grid gap-5 lg:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-[#0A1A2F] dark:text-white">Cidade</span>
                <input
                  type="text"
                  placeholder="Ex: Embu das Artes"
                  className="h-12 w-full rounded-2xl border border-[#d7e0f5] bg-[#f3f6fb] px-4 outline-none transition placeholder:text-[#6b7280] focus:border-[#0A2A83] dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-white/35"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-[#0A1A2F] dark:text-white">Estado</span>
                <select className="h-12 w-full rounded-2xl border border-[#d7e0f5] bg-[#f3f6fb] px-4 outline-none transition focus:border-[#0A2A83] dark:border-white/10 dark:bg-white/5 dark:text-white">
                  <option value="">Selecione</option>
                  {states.map((state) => (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <Field label="Senha" type="password" placeholder="Ex: 123456" icon={<Save size={16} />} />

            <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:justify-end">
              <button
                type="button"
                className="inline-flex h-11 items-center justify-center rounded-full border border-[#0A2A83] px-6 text-sm font-semibold text-[#0A2A83] transition hover:-translate-y-0.5 hover:bg-[#0A2A83] hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-[#071028]"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="inline-flex h-11 items-center justify-center rounded-full bg-[#0A2A83] px-6 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-lg dark:bg-white dark:text-[#071028]"
              >
                Confirmar
              </button>
            </div>
          </form>
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
