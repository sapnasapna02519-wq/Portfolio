function ProjectCard({ project }) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card transition hover:-translate-y-1 dark:border-slate-800 dark:bg-slate-900">
      <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{project.title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{project.description}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-600 dark:bg-slate-800 dark:text-brand-500"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-5 flex gap-3 text-sm font-semibold">
        <a href={project.github} target="_blank" rel="noreferrer" className="text-brand-600 hover:underline">
          GitHub
        </a>
        {project.liveDemo && (
          <a href={project.liveDemo} target="_blank" rel="noreferrer" className="text-brand-600 hover:underline">
            Live Demo
          </a>
        )}
      </div>
    </article>
  );
}

export default ProjectCard;
