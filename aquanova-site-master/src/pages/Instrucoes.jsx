import { Header } from "../components/Header.jsx"
import { ThemeContext } from "../context/ThemeContext"
import { useContext } from "react"
import { CheckCircle2, CircleDashed, Cpu, PanelTop, PlayCircle, Waves } from "lucide-react"

import um from "../assets/um.png"
import umLight from "../assets/umLight.png"
import dois from "../assets/dois.png"
import doisLight from "../assets/doisLight.png"
import tres from "../assets/tres.png"
import tresLight from "../assets/tresLight.png"

import instrucao1 from "../assets/instrucao1.png"
import instrucao2 from "../assets/instrucao2.png"
import instrucao3 from "../assets/instrucao3.png"
import instrucao1Light from "../assets/instrucao1Light.jpeg"
import instrucao2Light from "../assets/instrucao2Light.jpeg"
import instrucao3Light from "../assets/instrucao3Light.jpeg"

const steps = [
  {
    icon: PanelTop,
    number: "01",
    lightBadge: um,
    darkBadge: umLight,
    lightImage: instrucao1Light,
    darkImage: instrucao1,
    title: "Preparar o sistema",
    bullets: [
      "Instale o AquaNova em uma área externa com boa incidência solar.",
      "Posicione o painel solar sem sombreamento.",
      "Conecte a entrada de água salobra ao sistema.",
      "Verifique se o filtro e as conexões estão firmes.",
    ],
  },
  {
    icon: Cpu,
    number: "02",
    lightBadge: dois,
    darkBadge: doisLight,
    lightImage: instrucao2Light,
    darkImage: instrucao2,
    title: "Executar o fluxo",
    bullets: [
      "O Arduino coordena bomba, tempo e válvulas.",
      "A água segue para aquecimento e separação.",
      "O vapor é resfriado no condensador.",
      "A água potável é conduzida ao reservatório final.",
    ],
  },
  {
    icon: Waves,
    number: "03",
    lightBadge: tres,
    darkBadge: tresLight,
    lightImage: instrucao3Light,
    darkImage: instrucao3,
    title: "Monitorar e encerrar",
    bullets: [
      "Os dados são enviados via Bluetooth para acompanhamento.",
      "Use um app compatível para observar leituras básicas.",
      "O sistema pode desligar automaticamente ao atingir o limite.",
    ],
  },
]

export function Instrucoes() {
  const { theme } = useContext(ThemeContext)

  return (
    <div className="min-h-screen bg-[#f4f7fb] text-[#0A1A2F] transition-colors duration-300 dark:bg-[#050816] dark:text-white">
      <Header />

      <main className="mx-auto max-w-7xl px-4 pb-20 pt-28 sm:px-6 lg:px-8">
        <section className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center rounded-full border border-[#0A2A83]/10 bg-white px-4 py-2 text-sm font-medium text-[#0A2A83] shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-white">
            <CircleDashed size={16} className="mr-2" />
            Passo a passo do protótipo
          </div>

          <h1 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl">
            Saiba como funciona
          </h1>

          <p className="mt-4 text-base leading-relaxed text-[#0A1A2F]/70 dark:text-white/70">
            Organizei as instruções em etapas diretas para apresentação, leitura rápida e demonstração.
          </p>
        </section>

        <section className="mt-12 grid gap-6 lg:grid-cols-3">
          {steps.map((step) => {
            const Icon = step.icon

            return (
              <article
                key={step.number}
                className="rounded-[2rem] border border-[#d7e0f5] bg-white p-6 shadow-[0_18px_60px_rgba(10,26,47,0.06)] transition duration-300 hover:-translate-y-1 dark:border-white/10 dark:bg-[#0E1539]"
              >
                <div className="flex items-center justify-between">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#0A2A83]/10 text-sm font-bold text-[#0A2A83] dark:bg-white/10 dark:text-white">
                    {step.number}
                  </span>
                  <Icon size={22} className="text-[#0A2A83] dark:text-white" />
                </div>

                <div className="mt-5 flex items-center gap-4">
                  <img
                    src={theme === "dark" ? step.darkBadge : step.lightBadge}
                    alt=""
                    className="h-16 w-16 object-contain"
                  />
                  <h2 className="text-2xl font-bold tracking-tight">{step.title}</h2>
                </div>

                <img
                  src={theme === "dark" ? step.darkImage : step.lightImage}
                  alt={step.title}
                  className="mt-6 h-56 w-full rounded-[1.5rem] object-cover"
                />

                <ul className="mt-6 space-y-3 text-sm leading-relaxed text-[#0A1A2F]/75 dark:text-white/75">
                  {step.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-[#0A2A83] dark:text-white" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            )
          })}
        </section>

        <section className="mt-14 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] border border-[#d7e0f5] bg-white p-6 shadow-[0_18px_60px_rgba(10,26,47,0.06)] dark:border-white/10 dark:bg-[#0E1539]">
            <div className="flex items-center gap-3">
              <PlayCircle className="text-[#0A2A83] dark:text-white" />
              <h2 className="text-2xl font-bold">Vídeo da demonstração</h2>
            </div>

            <p className="mt-3 text-sm leading-relaxed text-[#0A1A2F]/70 dark:text-white/70">
              Um apoio visual para apresentação em sala ou banca.
            </p>

            <div className="mt-6 overflow-hidden rounded-[1.75rem] border border-[#d7e0f5] dark:border-white/10">
              <iframe
                className="aspect-video w-full"
                src="https://www.youtube.com/embed/BKCd73my7Tw"
                title="Demonstração do Sistema"
                allowFullScreen
              />
            </div>
          </div>

          <div className="rounded-[2rem] border border-[#d7e0f5] bg-[#0A2A83] p-6 text-white shadow-[0_18px_60px_rgba(10,42,131,0.18)] dark:border-white/10 dark:bg-[#101a3f]">
            <h2 className="text-2xl font-bold">Pontos que valem destacar na apresentação</h2>
            <ul className="mt-5 space-y-4 text-sm leading-relaxed text-white/80">
              <li className="flex gap-3">
                <CheckCircle2 size={18} className="mt-0.5 shrink-0" />
                Energia solar reduz dependência da rede elétrica.
              </li>
              <li className="flex gap-3">
                <CheckCircle2 size={18} className="mt-0.5 shrink-0" />
                Monitoramento facilita a leitura do estado do protótipo.
              </li>
              <li className="flex gap-3">
                <CheckCircle2 size={18} className="mt-0.5 shrink-0" />
                A lógica modular ajuda em manutenção e futuras melhorias.
              </li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  )
}
