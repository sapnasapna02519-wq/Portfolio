function SectionTitle({ title, subtitle }) {
  return (
    <div className="mb-8 section-fade">
      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-600">{subtitle}</p>
      <h2 className="text-2xl font-bold text-slate-900 md:text-3xl dark:text-white">{title}</h2>
    </div>
  );
}

export default SectionTitle;
