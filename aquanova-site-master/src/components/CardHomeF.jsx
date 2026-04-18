export default function CardHome({ img, title, text }) {
  return (
    <article className="group rounded-[1.75rem] border border-white/60 bg-white/80 p-6 shadow-[0_18px_60px_rgba(10,26,47,0.08)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_80px_rgba(10,26,47,0.12)] dark:border-white/10 dark:bg-white/5">
      <div className="flex flex-col items-center text-center">
        <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-[1.5rem] bg-[#0A2A83]/8 shadow-inner dark:bg-white/10">
          <img src={img} alt="" className="h-12 w-12 object-contain" />
        </div>

        <h2 className="text-xl font-bold text-[#0A1A2F] dark:text-white">{title}</h2>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-[#0A1A2F]/70 dark:text-white/70">
          {text}
        </p>
      </div>
    </article>
  )
}
