export function CardHomeS({ img, tittle, text }) {
  return (
    <article className="flex h-full flex-col items-center rounded-[1.75rem] border border-[#d7e0f5] bg-white p-6 text-center shadow-[0_18px_60px_rgba(10,26,47,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_80px_rgba(10,26,47,0.1)] dark:border-white/10 dark:bg-[#0E1539]">
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#eef4ff] dark:bg-white/10">
        <img src={img} alt="" className="h-11 w-11 object-contain" />
      </div>

      <h2 className="mt-5 text-xl font-bold text-[#0A1A2F] dark:text-white">
        {tittle}
      </h2>

      <p className="mt-3 text-sm leading-relaxed text-[#0A1A2F]/70 dark:text-white/70">
        {text}
      </p>
    </article>
  )
}
