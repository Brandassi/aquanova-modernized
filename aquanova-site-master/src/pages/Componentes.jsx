import { useEffect, useMemo, useState } from "react"
import { Header } from "../components/Header.jsx"
import {
  Bluetooth,
  ChevronRight,
  CircleAlert,
  Cpu,
  Droplets,
  FlipHorizontal,
  HardDriveDownload,
  PanelTop,
  PlugZap,
  SprayCan,
  Waves,
  Search,
} from "lucide-react"

const items = [
  {
    id: "painel",
    icon: PanelTop,
    title: "Mini Painel Solar",
    desc: "Capta energia renovável para alimentar o protótipo.",
    tip: "Instale em local com boa incidência solar e sem sombreamento.",
    tag: "Energia",
  },
  {
    id: "bateria",
    icon: HardDriveDownload,
    title: "Bateria Recarregável",
    desc: "Armazena energia para manter o sistema estável.",
    tip: "Monitore a carga para evitar ciclos profundos e perda de desempenho.",
    tag: "Autonomia",
  },
  {
    id: "filtro",
    icon: SprayCan,
    title: "Filtro de Osmose Reversa",
    desc: "Remove sais e impurezas e melhora a qualidade da água.",
    tip: "A pré-filtração aumenta a vida útil e reduz manutenção.",
    tag: "Filtragem",
  },
  {
    id: "bomba",
    icon: Droplets,
    title: "Bomba de Água 12V",
    desc: "Faz a circulação da água pelo sistema no momento certo.",
    tip: "Evite funcionamento a seco para não danificar o conjunto.",
    tag: "Fluxo",
  },
  {
    id: "arduino",
    icon: Cpu,
    title: "Arduino UNO",
    desc: "Controla sensores, relés e a lógica de operação do AquaNova.",
    tip: "Organize bem as entradas e saídas para facilitar manutenção.",
    tag: "Controle",
  },
  {
    id: "reles",
    icon: PlugZap,
    title: "Relés",
    desc: "Permitem acionar cargas maiores com segurança elétrica.",
    tip: "Escolha relés compatíveis com a corrente da carga utilizada.",
    tag: "Comando",
  },
  {
    id: "base-3d",
    icon: Waves,
    title: "Base Modular 3D",
    desc: "Estrutura que acomoda os módulos eletrônicos e mecânicos.",
    tip: "A modularidade facilita ajustes, testes e futuras expansões.",
    tag: "Estrutura",
  },
  {
    id: "protoboard",
    icon: CircleAlert,
    title: "Protoboard",
    desc: "Usada na fase de testes para montar circuitos sem solda.",
    tip: "Depois dos testes, vale migrar para uma montagem mais definitiva.",
    tag: "Teste",
  },
  {
    id: "ponte-h",
    icon: FlipHorizontal,
    title: "Ponte H",
    desc: "Controla motores DC e ajuda na inversão de direção.",
    tip: "Verifique a tensão suportada antes de ligar ao restante do circuito.",
    tag: "Motores",
  },
  {
    id: "lcd",
    icon: PanelTop,
    title: "Display LCD",
    desc: "Exibe informações de estado e leituras importantes.",
    tip: "Boa escolha para feedback local sem depender de app externo.",
    tag: "Interface",
  },
  {
    id: "bt",
    icon: Bluetooth,
    title: "Módulo Bluetooth HC-08",
    desc: "Permite comunicação sem fio para monitoramento básico.",
    tip: "Útil para acompanhar o sistema sem cabos, em campo ou em testes.",
    tag: "Conectividade",
  },
]

export function Componentes() {
  const [selected, setSelected] = useState(null)
  const [query, setQuery] = useState("")

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setSelected(null)
    }

    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  const filtered = useMemo(() => {
    const search = query.trim().toLowerCase()
    if (!search) return items
    return items.filter((item) =>
      [item.title, item.desc, item.tip, item.tag].some((field) =>
        field.toLowerCase().includes(search),
      ),
    )
  }, [query])

  return (
    <div className="min-h-screen bg-[#f4f7fb] text-[#0A1A2F] transition-colors duration-300 dark:bg-[#050816] dark:text-white">
      <Header />

      <main className="mx-auto max-w-7xl px-4 pb-20 pt-28 sm:px-6 lg:px-8">
        <section className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center rounded-full border border-[#0A2A83]/10 bg-white px-4 py-2 text-sm font-medium text-[#0A2A83] shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-white">
            <Cpu size={16} className="mr-2" />
            Estrutura do protótipo
          </div>

          <h1 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl">
            Componentes do sistema
          </h1>

          <p className="mt-4 text-base leading-relaxed text-[#0A1A2F]/70 dark:text-white/70">
            Os itens do AquaNova organizados de forma clara para leitura, apresentação e manutenção.
          </p>

          <div className="mt-8 flex items-center rounded-full border border-[#d7e0f5] bg-white px-4 py-3 shadow-sm dark:border-white/10 dark:bg-white/5">
            <Search size={18} className="shrink-0 text-[#0A2A83] dark:text-white" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar componente, função ou categoria..."
              className="ml-3 w-full bg-transparent text-sm outline-none placeholder:text-[#0A1A2F]/45 dark:placeholder:text-white/35"
            />
          </div>
        </section>

        <section className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {filtered.map((item) => {
            const Icon = item.icon

            return (
              <article
                key={item.id}
                className="flex min-h-[15rem] flex-col rounded-[2rem] border border-[#d7e0f5] bg-white p-6 shadow-[0_18px_60px_rgba(10,26,47,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_80px_rgba(10,26,47,0.1)] dark:border-white/10 dark:bg-[#0E1539]"
              >
                <div className="flex items-start gap-4">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0A2A83]/10 text-[#0A2A83] dark:bg-white/10 dark:text-white">
                    <Icon size={24} />
                  </div>

                  <div className="flex-1">
                    <span className="inline-flex rounded-full bg-[#f1f5ff] px-3 py-1 text-xs font-semibold text-[#0A2A83] dark:bg-white/10 dark:text-white">
                      {item.tag}
                    </span>
                    <h2 className="mt-3 text-xl font-semibold leading-tight text-[#0A2A83] dark:text-white">
                      {item.title}
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-[#0A1A2F]/70 dark:text-white/70">
                      {item.desc}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setSelected(item)}
                  className="mt-auto inline-flex items-center gap-2 self-start rounded-full border border-[#0A2A83]/15 px-4 py-2 text-sm font-semibold text-[#0A2A83] transition hover:-translate-y-0.5 hover:bg-[#0A2A83] hover:text-white dark:border-white/15 dark:text-white dark:hover:bg-white dark:hover:text-[#071028]"
                >
                  Ver mais
                  <ChevronRight size={16} />
                </button>
              </article>
            )
          })}
        </section>
      </main>

      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <button
            type="button"
            className="absolute inset-0 bg-black/55 backdrop-blur-sm"
            onClick={() => setSelected(null)}
            aria-label="Fechar modal"
          />

          <div className="relative z-10 w-full max-w-2xl rounded-[2rem] border border-white/10 bg-white p-6 shadow-2xl dark:bg-[#071028]">
            <div className="flex items-start justify-between gap-6">
              <div>
                <span className="inline-flex rounded-full bg-[#0A2A83]/10 px-3 py-1 text-xs font-semibold text-[#0A2A83] dark:bg-white/10 dark:text-white">
                  {selected.tag}
                </span>

                <h2 className="mt-4 text-3xl font-black tracking-tight text-[#0A2A83] dark:text-white">
                  {selected.title}
                </h2>

                <p className="mt-4 leading-relaxed text-[#0A1A2F]/75 dark:text-white/75">
                  {selected.desc}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setSelected(null)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[#d7e0f5] text-[#0A1A2F] transition hover:bg-[#f2f6ff] dark:border-white/10 dark:text-white dark:hover:bg-white/10"
                aria-label="Fechar"
              >
                ✕
              </button>
            </div>

            <div className="mt-8 rounded-2xl bg-[#f7f9fd] p-5 dark:bg-white/5">
              <h3 className="text-sm font-semibold text-[#0A1A2F] dark:text-white">
                Função prática no sistema
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#0A1A2F]/75 dark:text-white/70">
                {selected.tip}
              </p>
            </div>

            <div className="mt-8 flex justify-end">
              <button
                type="button"
                onClick={() => setSelected(null)}
                className="rounded-full bg-[#0A2A83] px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90 dark:bg-white dark:text-[#071028]"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
