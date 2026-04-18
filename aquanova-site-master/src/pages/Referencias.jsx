import { Header } from "../components/Header.jsx"
import robo from "../assets/robo.png"
import { ExternalLink, BookOpen, Sparkles, ShieldCheck } from "lucide-react"

const referencias = [
  {
    titulo: "Protótipo de dessalinização artesanal solar",
    descricao: "Base conceitual para pensar a dessalinização com baixo custo e energia solar.",
    link: "http://eventos.ecogestaobrasil.net/congestas2019/trabalhos/pdf/congestas2019-et-02-017.pdf",
    tag: "Energia Solar",
  },
  {
    titulo: "Dessalinização de água salobra e/ou salgada",
    descricao: "Pesquisa sobre métodos, custos e aplicações que reforça a viabilidade técnica do tema.",
    link: "https://lume.ufrgs.br/handle/10183/127799",
    tag: "Pesquisa",
  },
  {
    titulo: "Bombeamento de água para irrigação",
    descricao: "Aponta aplicações práticas em cenários agrícolas e uso eficiente de recursos hídricos.",
    link: "https://www.sustenere.inf.br/index.php/rica/article/view/CBPC2179-6858.2021.004.0035",
    tag: "Agricultura",
  },
  {
    titulo: "Aplicação de energia solar fotovoltaica",
    descricao: "Reforça a relação entre energia solar, autonomia e soluções sustentáveis.",
    link: "https://periodicos.ufam.edu.br/index.php/revista-geonorte/article/view/2189",
    tag: "Sustentabilidade",
  },
]

const destaque = [
  { icon: BookOpen, label: "Base teórica" },
  { icon: ShieldCheck, label: "Decisão técnica" },
  { icon: Sparkles, label: "Curadoria visual" },
]

export function Referencias() {
  return (
    <div className="min-h-screen bg-[#f4f7fb] text-[#0A1A2F] transition-colors duration-300 dark:bg-[#050816] dark:text-white">
      <Header />

      <main className="mx-auto max-w-7xl px-4 pb-20 pt-28 sm:px-6 lg:px-8">
        <section className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#0A2A83]/10 bg-white px-4 py-2 text-sm font-medium text-[#0A2A83] shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-white">
                <BookOpen size={16} />
                Curadoria do projeto
              </span>

              <h1 className="text-4xl font-black tracking-tight lg:text-5xl">
                Referências
              </h1>

              <p className="max-w-2xl text-base leading-relaxed text-[#0A1A2F]/70 dark:text-white/70">
                Materiais que sustentam o desenvolvimento do AquaNova e reforçam as escolhas de projeto.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {destaque.map((item) => {
                const Icon = item.icon

                return (
                  <div
                    key={item.label}
                    className="rounded-[1.5rem] border border-[#d7e0f5] bg-white p-4 shadow-sm dark:border-white/10 dark:bg-white/5"
                  >
                    <Icon size={18} className="text-[#0A2A83] dark:text-white" />
                    <p className="mt-3 text-sm font-medium text-[#0A1A2F] dark:text-white">{item.label}</p>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative rounded-[2.25rem] border border-[#d7e0f5] bg-gradient-to-br from-[#eaf1ff] to-white p-8 shadow-[0_20px_60px_rgba(10,26,47,0.12)] dark:border-white/10 dark:from-white/10 dark:to-white/5">
              <img
                src={robo}
                alt="Ilustração AquaNova"
                className="h-56 w-56 object-contain drop-shadow-2xl lg:h-72 lg:w-72"
              />
            </div>
          </div>
        </section>

        <section className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {referencias.map((ref) => (
            <a
              key={ref.link}
              href={ref.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-[1.75rem] border border-[#d7e0f5] bg-white p-6 shadow-[0_18px_60px_rgba(10,26,47,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_80px_rgba(10,26,47,0.1)] dark:border-white/10 dark:bg-[#0E1539]"
            >
              <span className="inline-flex rounded-full bg-[#0A2A83]/10 px-3 py-1 text-xs font-semibold text-[#0A2A83] dark:bg-white/10 dark:text-white">
                {ref.tag}
              </span>

              <h3 className="mt-4 text-lg font-semibold leading-snug text-[#0A1A2F] transition group-hover:text-[#0A2A83] dark:text-white dark:group-hover:text-white">
                {ref.titulo}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-[#0A1A2F]/70 dark:text-white/65">
                {ref.descricao}
              </p>

              <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#0A2A83] dark:text-white">
                Ver material
                <ExternalLink size={16} />
              </span>
            </a>
          ))}
        </section>
      </main>
    </div>
  )
}
