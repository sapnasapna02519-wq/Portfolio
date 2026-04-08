import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import SectionTitle from "./components/SectionTitle";
import ProjectCard from "./components/ProjectCard";
import { projects, skillCategories } from "./data/portfolioData";

const initialForm = { name: "", email: "", subject: "", message: "" };

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [formData, setFormData] = useState(initialForm);
  const [status, setStatus] = useState({ type: "", message: "" });
  const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

  // Persist selected theme for a consistent user experience.
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleChange = (event) => {
    setFormData((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus({ type: "", message: "" });
    if (!apiBaseUrl) {
      setStatus({
        type: "error",
        message: "API is not configured. Please set VITE_API_BASE_URL in frontend environment variables.",
      });
      return;
    }

    try {
      // Submit contact form data to Express API.
      const response = await fetch(`${apiBaseUrl}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const contentType = response.headers.get("content-type") || "";
      const data = contentType.includes("application/json") ? await response.json() : null;

      if (!response.ok) {
        const firstError =
          data?.errors?.[0]?.message || data?.message || "Request failed. Please try again in a few moments.";
        throw new Error(firstError);
      }

      setStatus({ type: "success", message: "Message sent successfully." });
      setFormData(initialForm);
    } catch (error) {
      setStatus({ type: "error", message: error.message });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 dark:bg-slate-950 dark:text-slate-100">
      <Navbar theme={theme} toggleTheme={() => setTheme((prev) => (prev === "dark" ? "light" : "dark"))} />

      <main>
        <section id="home" className="mx-auto w-[92%] max-w-6xl py-16 md:py-24">
          <div className="grid gap-8 rounded-3xl bg-gradient-to-r from-cyan-50 to-white p-8 shadow-card md:grid-cols-2 md:p-12 dark:from-slate-900 dark:to-slate-950">
            <div className="section-fade">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">Welcome</p>
              <h1 className="text-3xl font-bold leading-tight md:text-5xl">
                Sapna
                <span className="block text-brand-600">Full Stack Developer | DSA in Java | Problem Solver</span>
              </h1>
              <p className="mt-5 max-w-xl text-slate-600 dark:text-slate-300">
                B.Tech in Computer Science (2023-2027), based in India. I build scalable web apps with React,
                Node.js, Express, and MongoDB.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <button
                  type="button"
                  className="cursor-not-allowed rounded-xl bg-brand-600/70 px-5 py-3 text-sm font-semibold text-white"
                  aria-disabled="true"
                  title="Resume will be available soon"
                >
                  Resume Coming Soon
                </button>
                <a
                  href="#contact"
                  className="rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold dark:border-slate-700"
                >
                  Contact Me
                </a>
              </div>

              <div className="mt-5 flex gap-5 text-sm font-semibold text-brand-600">
                <a href="https://github.com/sapnasapna02519-wq" target="_blank" rel="noreferrer">
                  GitHub
                </a>
                <a href="https://www.linkedin.com/in/sapna-gangwar-47b203299" target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              </div>

              <div className="mt-5 rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200">
                <p className="font-semibold">Quick Links</p>
                <ul className="mt-2 list-inside list-disc space-y-1">
                  <li>
                    Portfolio:{" "}
                    <a
                      className="text-brand-600 hover:underline"
                      href="https://sapna-portfolio.vercel.app"
                      target="_blank"
                      rel="noreferrer"
                    >
                      sapna-portfolio.vercel.app
                    </a>
                  </li>
                  <li>
                    Backend Health:{" "}
                    <a
                      className="text-brand-600 hover:underline"
                      href="https://sapna-portfolio-backend.onrender.com/api/health"
                      target="_blank"
                      rel="noreferrer"
                    >
                      /api/health
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto w-[92%] max-w-6xl py-16">
          <SectionTitle title="About Me" subtitle="Introduction" />
          <div className="rounded-2xl border border-slate-200 bg-white p-6 leading-7 shadow-card dark:border-slate-800 dark:bg-slate-900">
            I am a Full Stack Developer focused on building practical and user-friendly products. I enjoy solving
            algorithmic challenges in Java and applying strong fundamentals to create clean frontend experiences and
            reliable backend APIs.
          </div>
        </section>

        <section id="skills" className="mx-auto w-[92%] max-w-6xl py-16">
          <SectionTitle title="Skills" subtitle="Tech Stack" />
          <div className="grid gap-5 md:grid-cols-2">
            {skillCategories.map((category) => (
              <div
                key={category.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card dark:border-slate-800 dark:bg-slate-900"
              >
                <h3 className="mb-4 text-lg font-semibold">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-slate-100 px-3 py-1 text-sm dark:bg-slate-800 dark:text-slate-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="mx-auto w-[92%] max-w-6xl py-16">
          <SectionTitle title="Projects" subtitle="Full Stack Work" />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </section>

        <section id="education" className="mx-auto w-[92%] max-w-6xl py-16">
          <SectionTitle title="Education" subtitle="Academic Journey" />
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card dark:border-slate-800 dark:bg-slate-900">
            <h3 className="text-lg font-semibold">B.Tech in Computer Science (2023-2027)</h3>
            <p className="mt-2 text-slate-600 dark:text-slate-300">Focused on software engineering, DSA, and full stack development.</p>
          </div>
        </section>

        <section id="achievements" className="mx-auto w-[92%] max-w-6xl py-16">
          <SectionTitle title="Achievements" subtitle="Highlights" />
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card dark:border-slate-800 dark:bg-slate-900">
            <ul className="list-inside list-disc space-y-2 text-slate-700 dark:text-slate-300">
              <li>Consistent DSA practice in Java with focus on arrays, trees, graphs, and dynamic programming.</li>
              <li>Built and deployed multiple full stack projects using MERN stack.</li>
              <li>Strong problem-solving mindset with clean coding practices and API-first approach.</li>
            </ul>
          </div>
        </section>

        <section id="contact" className="mx-auto w-[92%] max-w-6xl py-16">
          <SectionTitle title="Contact" subtitle="Let's Connect" />
          <form
            onSubmit={handleSubmit}
            className="grid gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-card md:grid-cols-2 dark:border-slate-800 dark:bg-slate-900"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="rounded-xl border border-slate-300 p-3 outline-none focus:border-brand-500 dark:border-slate-700 dark:bg-slate-950"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="rounded-xl border border-slate-300 p-3 outline-none focus:border-brand-500 dark:border-slate-700 dark:bg-slate-950"
              required
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className="rounded-xl border border-slate-300 p-3 outline-none focus:border-brand-500 md:col-span-2 dark:border-slate-700 dark:bg-slate-950"
              required
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="rounded-xl border border-slate-300 p-3 outline-none focus:border-brand-500 md:col-span-2 dark:border-slate-700 dark:bg-slate-950"
              required
            />

            <button
              type="submit"
              className="w-fit rounded-xl bg-brand-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-500"
            >
              Send Message
            </button>

            {status.message && (
              <p className={`md:col-span-2 text-sm font-semibold ${status.type === "success" ? "text-emerald-600" : "text-red-600"}`}>
                {status.message}
              </p>
            )}
          </form>
        </section>
      </main>

      <footer className="border-t border-slate-200 py-8 text-center text-sm text-slate-500 dark:border-slate-800 dark:text-slate-400">
        Copyright 2026 Sapna. Built with React, Tailwind, Node.js, Express, MongoDB.
      </footer>
    </div>
  );
}

export default App;
