export function QuemSomosComp({ img, tittle }) {
  return (
    <article className="flex w-full max-w-xs flex-col items-center rounded-[2rem] border border-[#d7e0f5] bg-white p-6 text-center shadow-[0_18px_60px_rgba(10,26,47,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_80px_rgba(10,26,47,0.1)] dark:border-white/10 dark:bg-[#0E1539]">
      <img
        src={img}
        alt={tittle}
        className="h-40 w-40 rounded-full object-cover ring-8 ring-[#eef4ff] dark:ring-white/10"
      />

      <p className="mt-5 text-lg font-semibold text-[#0A1A2F] dark:text-white">
        {tittle}
      </p>
    </article>
  )
}
