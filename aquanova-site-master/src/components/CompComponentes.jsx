import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"
import sublinhado from "../assets/sublinhado.svg"
import sublinhadoDark from "../assets/homeAssets/sublinhadoDark.png"
import smile from "../assets/smile.svg"
import emojiSmileDark from "../assets/emojiSmileDark.png"

export function CompComponentes() {
  const { theme } = useContext(ThemeContext)

  return (
    <section
      id="componentes"
      className="mx-auto w-full max-w-7xl rounded-[2.5rem] border border-[#d7e0f5] bg-white px-6 py-16 shadow-[0_20px_80px_rgba(10,26,47,0.06)] dark:border-white/10 dark:bg-white/5 lg:px-10"
    >
      <header className="mx-auto max-w-3xl text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-[#0A2A83]/8 px-4 py-2 text-sm font-medium text-[#0A2A83] dark:bg-white/10 dark:text-white">
          <img src={theme === "dark" ? smile : emojiSmileDark} className="h-5 w-5" alt="" />
          Componentes e investimentos
        </div>

        <h2 className="mt-5 text-3xl font-bold tracking-tight text-[#0A1A2F] dark:text-white lg:text-4xl">
          Saiba onde comprar e quanto será seu investimento
        </h2>

        <img src={theme === "dark" ? sublinhado : sublinhadoDark} alt="" className="mx-auto mt-5 w-44 opacity-80" />
      </header>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        <div className="rounded-[1.75rem] bg-[#f7f9fd] p-6 dark:bg-white/5">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#0A2A83]/70 dark:text-white/60">
            Lista de itens
          </p>
          <ul className="mt-4 space-y-3 text-sm leading-relaxed text-[#0A1A2F]/80 dark:text-white/80">
            <li>Sensor de condutividade/TDS</li>
            <li>Sensor de nível ultrassônico</li>
            <li>Sensor de pressão de água</li>
            <li>Sensor de fluxo de água</li>
            <li>Válvulas solenoides 12V</li>
            <li>Relés de estado sólido</li>
            <li>Módulo Bluetooth</li>
            <li>MOSFET IRF520</li>
            <li>Display LCD</li>
          </ul>
        </div>

        <div className="rounded-[1.75rem] bg-[#f7f9fd] p-6 dark:bg-white/5">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#0A2A83]/70 dark:text-white/60">
            Energia e estrutura
          </p>
          <ul className="mt-4 space-y-3 text-sm leading-relaxed text-[#0A1A2F]/80 dark:text-white/80">
            <li>4 LDRs</li>
            <li>Ponte H</li>
            <li>Bateria de lítio</li>
            <li>Mini painel solar</li>
            <li>Módulo step-down</li>
            <li>Controlador de carga</li>
            <li>2 servomotores MG995</li>
            <li>Carcaça para membrana 50 GPD</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
