import { projects } from "../data/projects";
import { FaGithub, FaYoutube } from "react-icons/fa";
import { HiExternalLink } from "react-icons/hi";

export default function Home() {
  const featuredProjects = projects.filter((d) => d.featured);

  return (
    <div className="min-h-screen w-full overflow-x-clip">
      <section className="relative w-full overflow-x-clip">
        <div className="flex justify-center p-5 sm:px-8 md:px-16 lg:px-24 xl:px-40">
          <div
            className="flex min-h-[480px] w-full min-w-0 max-w-[1280px] flex-col items-center justify-center gap-6 rounded-2xl bg-cover bg-center bg-no-repeat p-8 text-center text-white"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.5)), url(/toronto.jpg)`,
            }}
          >
            <div className="font-playfair w-full break-words font-bold text-balance [&>h1]:text-4xl md:[&>h1]:text-5xl [&>h2]:text-lg [&>h2]:font-normal md:[&>h2]:text-xl">
              <h1>I&apos;m Sahil Gupta based in Toronto, Canada</h1>
              <h2>Software Developer | AI/ML | Project Analyst</h2>
            </div>
          </div>
        </div>
      </section>

      <section className="flex w-full min-w-0 justify-center overflow-x-clip px-4 pt-20 sm:px-8 md:px-16 lg:px-24 xl:px-40">
        <div className="w-full min-w-0 max-w-[1280px]">
          <h2 id="projects" className="pb-3 pt-5 text-2xl font-bold">
            Some of recent work
          </h2>

          <div className="grid min-w-0 grid-cols-1 gap-3 pb-4 md:grid-cols-2 md:gap-3.5 lg:grid-cols-3 xl:grid-cols-4">
            {featuredProjects.map((project, index) => (
              <div
                className="group relative flex w-full min-w-0 flex-col gap-3 overflow-hidden rounded-xl bg-white p-[5px] shadow-[0_4px_8px_rgba(0,0,0,0.1),0_6px_20px_rgba(0,0,0,0.08)] transition-[transform,box-shadow] duration-300 ease-in-out hover:-translate-y-2 hover:shadow-[0_10px_25px_rgba(0,0,0,0.2),0_15px_35px_rgba(0,0,0,0.12)]"
                key={index}
              >
                <a
                  href={project.link}
                  onClick={(e) => {
                    e.preventDefault();
                    window.open(project.link, "_blank", "noopener,noreferrer");
                  }}
                  className="cursor-pointer"
                >
                  <div className="relative aspect-video w-full overflow-hidden rounded-t-xl">
                    <div
                      className="h-full w-full bg-cover bg-center transition-transform duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-[1.08]"
                      style={{ backgroundImage: `url("${project.image}")` }}
                    />
                    <div className="pointer-events-none absolute inset-0 flex items-end bg-gradient-to-b from-transparent to-black/70 p-5 opacity-0 transition-opacity duration-[400ms] ease-in-out group-hover:opacity-100">
                      <span className="rounded-[20px] bg-white/95 px-3.5 py-1.5 text-xs font-semibold text-[#1a1a1a] shadow-[0_2px_8px_rgba(0,0,0,0.1)] backdrop-blur-[10px]">
                        {project.category || "Project"}
                      </span>
                    </div>
                  </div>
                </a>

                <div className="min-w-0 px-1">
                  <p className="break-words px-3 font-bold">{project.name}</p>
                  <p className="break-words px-3 text-[0.9rem] leading-snug text-[#333]">
                    {project.description}
                  </p>

                  <div className="flex min-w-0 flex-wrap gap-2 px-3 pb-3">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="inline-flex max-w-full items-center justify-center break-words rounded-lg border border-gray-400 bg-white px-2 py-1 text-xs font-medium text-black transition-all duration-200 ease-in-out"
                      >
                        {tech}
                      </span>
                    ))}
                    <span className="inline-flex items-center justify-center rounded-lg border border-gray-400 bg-white px-2 py-1 text-xs font-medium text-black transition-all duration-200 ease-in-out">
                      {project.type === "team" ? "Team Project" : "Solo Project"}
                    </span>
                  </div>

                  <div className="flex min-w-0 flex-wrap gap-2 px-3 pb-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex min-w-0 flex-1 cursor-pointer items-center justify-center rounded-lg bg-[#1e1e1e] px-3 py-2 text-center text-[0.85rem] font-semibold text-white no-underline transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(0,0,0,0.15)]"
                      >
                        <FaGithub size={20} />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex min-w-0 flex-1 cursor-pointer items-center justify-center rounded-lg bg-[#38b2ac] px-3 py-2 text-center text-[0.85rem] font-semibold text-white no-underline transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(0,0,0,0.15)]"
                      >
                        <HiExternalLink size={20} />
                      </a>
                    )}
                    {project.youtube && (
                      <a
                        href={project.youtube}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex min-w-0 flex-1 cursor-pointer items-center justify-center rounded-lg bg-[#FF0000] px-3 py-2 text-center text-[0.85rem] font-semibold text-white no-underline transition-[transform,box-shadow,background-color] duration-200 hover:-translate-y-0.5 hover:bg-[#CC0000] hover:shadow-[0_4px_12px_rgba(0,0,0,0.15)]"
                      >
                        <FaYoutube size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
