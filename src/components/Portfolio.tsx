import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import projectExercise from "@/assets/project-exercise.png";
import projectSweets from "@/assets/project-sweets.png";

type Category = "app" | "backend" | "other";

interface Project {
  title: string;
  description: string;
  image?: string | null;
  tech: string[];
  github: string | null;
  live?: string | null;
  featured?: boolean;
  status?: "live" | "wip" | "done";
  category: Category;
  gradient: string;
}

const projects: Project[] = [
  // ── APP ──
  {
    category: "app",
    title: "Exercise App",
    description:
      "A fitness tracking app that guides users through personalised daily exercise challenges with progress reports and insights. Clean UI with comprehensive progress monitoring.",
    image: projectExercise,
    tech: ["Flutter", "Dart", "UI/UX Design"],
    github: "https://github.com/nakummeet/DE-exercise-",
    featured: true,
    status: "done",
    gradient: "from-orange-500/25 via-red-500/10 to-transparent",
  },
  {
    category: "app",
    title: "SweetBite",
    description:
      "A dessert-ordering app where users explore, customise, and order treats. Users can also create their own shops and manage purchases seamlessly.",
    image: projectSweets,
    tech: ["Flutter", "Dart", "E-commerce"],
    github: "https://github.com/nakummeet/SweetBite",
    featured: true,
    status: "done",
    gradient: "from-pink-500/25 via-orange-500/10 to-transparent",
  },
  {
    category: "app",
    title: "LocalBites App",
    description:
      "Flutter frontend for the LocalBites food ordering platform. Role-based experience for both customers and restaurant owners — cart, orders, and live status updates.",
    image: null,
    tech: ["Flutter", "Dart", "REST APIs", "JWT"],
    github: null,
    status: "wip",
    gradient: "from-yellow-500/20 via-amber-500/10 to-transparent",
  },

  // ── BACKEND ──
  {
    category: "backend",
    title: "LocalBites Backend",
    description:
      "Production-ready REST API for a local food ordering platform. JWT auth, role-based access (user / owner), cart management, order lifecycle, and deploy-ready on Vercel.",
    image: null,
    tech: ["Node.js", "Express.js", "MongoDB", "JWT", "Vercel"],
    github: "https://github.com/nakummeet/localbites-backend",
    live: "https://localbites-backend.vercel.app",
    featured: true,
    status: "live",
    gradient: "from-green-500/25 via-emerald-500/10 to-transparent",
  },
  {
    category: "backend",
    title: "Exercise App Backend",
    description:
      "Node.js + Express backend powering the Exercise App — manages user data, exercise records, progress tracking, and daily challenge logic via REST APIs.",
    image: null,
    tech: ["Node.js", "Express.js", "MongoDB", "JavaScript"],
    github: "https://github.com/nakummeet/de-backend-exercise-app-",
    status: "done",
    gradient: "from-cyan-500/20 via-blue-500/10 to-transparent",
  },

  // ── OTHER ──
  {
    category: "other",
    title: "AICodeBridge",
    description:
      "A VS Code extension that analyzes codebases and generates AI-ready project context for ChatGPT, Claude, Gemini, and other AI tools. Includes smart tech-stack detection, error analysis, file selection, git history integration, and one-click AI sharing workflows.",

    image: null,

    tech: [
      "TypeScript",
      "VS Code API",
      "Node.js",
      "AI Workflow",
      "Markdown",
    ],

    github: "https://github.com/nakummeet/ai-context-manager",

    live: null,



    gradient: "from-primary/20 via-primary/5 to-transparent",
  },
];

const tabs: { key: Category | "all"; label: string; emoji: string }[] = [
  { key: "all", label: "All", emoji: "🗂️" },
  { key: "app", label: "Mobile Apps", emoji: "📱" },
  { key: "backend", label: "Backend", emoji: "🌐" },
  { key: "other", label: "Other", emoji: "💻" },
];

const statusBadge: Record<string, { label: string; cls: string }> = {
  live: { label: "Live", cls: "bg-green-500/15 text-green-400 border-green-500/30" },
  done: { label: "Completed", cls: "bg-primary/15 text-primary border-primary/30" },
  wip: { label: "In Progress", cls: "bg-yellow-500/15 text-yellow-400 border-yellow-500/30" },
};

const Portfolio = () => {
  const [active, setActive] = useState<Category | "all">("all");

  const filtered =
    active === "all" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="portfolio" className="py-24">
      <div className="container mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <p className="text-primary font-mono text-sm mb-3">// what i've built</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Projects</h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            From mobile apps to backend APIs — organised by category
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActive(tab.key)}
              className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium border transition-all duration-200 ${active === tab.key
                  ? "bg-primary text-primary-foreground border-primary"
                  : "border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
                }`}
            >
              <span>{tab.emoji}</span>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {filtered.map((project, i) => (
            <div
              key={project.title}
              className="glass rounded-2xl overflow-hidden border border-border hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col animate-fade-in"
              style={{ animationDelay: `${i * 0.07}s` }}
            >
              {/* Image / placeholder */}
              <div className="relative overflow-hidden h-44 flex-shrink-0">
                {project.image ? (
                  <>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient}`} />
                  </>
                ) : (
                  <div className={`w-full h-full flex items-center justify-center bg-gradient-to-br ${project.gradient} bg-secondary/10`}>
                    <span className="text-5xl font-bold font-mono text-primary/20 select-none">
                      {project.category === "app" ? "📱" :
                        project.category === "backend" ? "🌐" : "</>"}
                    </span>
                  </div>
                )}

                {/* Badges top row */}
                <div className="absolute top-3 left-3 flex gap-2 flex-wrap">
                  {project.featured && (
                    <span className="px-2.5 py-0.5 text-[10px] font-bold rounded-full bg-primary text-primary-foreground">
                      Featured
                    </span>
                  )}
                  {project.status && (
                    <span className={`px-2.5 py-0.5 text-[10px] font-semibold rounded-full border ${statusBadge[project.status].cls}`}>
                      {statusBadge[project.status].label}
                    </span>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>

                {/* Tech tags */}
                {project.tech.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-0.5 text-[11px] rounded-full border border-border bg-secondary/40 text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}

                {/* Buttons */}
                <div className="flex gap-2 flex-wrap">
                  {project.github ? (
                    <Button
                      size="sm"
                      variant="outline"
                      className="rounded-full gap-1.5 text-xs border-border hover:border-primary hover:text-primary h-8"
                      onClick={() => window.open(project.github!, "_blank")}
                    >
                      <Github size={12} />
                      GitHub
                    </Button>
                  ) : (
                    <span className="text-xs text-muted-foreground italic self-center">
                      Private repo
                    </span>
                  )}
                  {project.live && (
                    <Button
                      size="sm"
                      className="rounded-full gap-1.5 text-xs bg-primary text-primary-foreground h-8"
                      onClick={() => window.open(project.live!, "_blank")}
                    >
                      <ExternalLink size={12} />
                      Live
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground text-sm mb-4">More on GitHub</p>
          <Button
            variant="outline"
            className="rounded-full gap-2 border-border hover:border-primary hover:text-primary"
            onClick={() => window.open("https://github.com/nakummeet", "_blank")}
          >
            <Github size={15} />
            github.com/nakummeet
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
