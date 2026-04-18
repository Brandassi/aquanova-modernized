import { useState } from "react"
import { Header } from "../components/Header.jsx"
import { Gauge, Power } from "lucide-react"

export function Sistema() {
  const [status, setStatus] = useState("Desligado")

  const isOn = status === "Ligado"

  return (
    <div className="min-h-screen bg-[#f4f7fb] text-[#0A1A2F] transition-colors duration-300 dark:bg-[#050816] dark:text-white">
      <Header />

      <main className="mx-auto flex min-h-screen max-w-5xl items-center justify-center px-4 pb-16 pt-28 sm:px-6 lg:px-8">
        <section className="w-full rounded-[2.25rem] border border-[#d7e0f5] bg-white p-6 shadow-[0_20px_60px_rgba(10,26,47,0.08)] dark:border-white/10 dark:bg-[#0E1539] lg:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="space-y-4">
              <span className={`inline-flex items-center rounded-full px-4 py-2 text-sm font-medium ${isOn ? "bg-emerald-500/10 text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-300" : "bg-[#0A2A83]/10 text-[#0A2A83] dark:bg-white/10 dark:text-white"}`}>
                <Gauge size={16} className="mr-2" />
                Painel de controle
              </span>

              <div>
                <h1 className="text-4xl font-black tracking-tight">Sistema</h1>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#0A1A2F]/70 dark:text-white/70">
                  Tela simples de acionamento do protótipo, pensada para demonstrar o fluxo principal de operação.
                </p>
              </div>
            </div>

            <div className={`rounded-[1.75rem] px-5 py-4 text-sm font-semibold ${isOn ? "bg-emerald-500/10 text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-300" : "bg-[#f3f7ff] text-[#0A2A83] dark:bg-white/5 dark:text-white"}`}>
              Status atual: {status}
            </div>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <button
              onClick={() => setStatus("Ligado")}
              className="group flex h-36 flex-col items-center justify-center rounded-[1.75rem] bg-[#0A2A83] text-xl font-black text-white shadow-lg transition hover:-translate-y-1 hover:shadow-xl dark:bg-white dark:text-[#071028]"
            >
              <Power size={28} className="mb-3" />
              LIGAR
            </button>

            <button
              onClick={() => setStatus("Desligado")}
              className="group flex h-36 flex-col items-center justify-center rounded-[1.75rem] border border-[#0A2A83] bg-white text-xl font-black text-[#0A2A83] transition hover:-translate-y-1 hover:bg-[#0A2A83] hover:text-white dark:border-white dark:bg-transparent dark:text-white dark:hover:bg-white dark:hover:text-[#071028]"
            >
              <Power size={28} className="mb-3" />
              DESLIGAR
            </button>
          </div>
        </section>
      </main>
    </div>
  )
}
