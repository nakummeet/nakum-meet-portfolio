import { GraduationCap, MapPin, Code2, GitBranch, Layers, Smartphone, Server, Circle } from "lucide-react";

const techStack = [
  {
    title: "Flutter",
    sub: "Cross-platform apps",
    icon: Smartphone,
    accent: "bg-sky-500/10 text-sky-500 border-sky-500/20",
  },
  {
    title: "MERN Stack",
    sub: "Full-stack development",
    icon: Layers,
    accent: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
  },
  {
    title: "REST APIs",
    sub: "Backend architecture",
    icon: Server,
    accent: "bg-violet-500/10 text-violet-500 border-violet-500/20",
  },
  {
    title: "Git & GitHub",
    sub: "Version control",
    icon: GitBranch,
    accent: "bg-orange-500/10 text-orange-500 border-orange-500/20",
  },
];

const highlights = [
  { label: "Location", value: "Rajkot, Gujarat", icon: MapPin },
  { label: "Education", value: "B.E. Computer Eng." },
  { label: "Current Focus", value: "Flutter & MERN", icon: Code2 },
  { label: "Availability", value: "Open to internships", green: true },
];

const About = () => {
  return (
    <section id="about" className="py-28 bg-secondary/30 clip-diagonal">
      <div className="container mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-primary font-mono text-xs tracking-[0.2em] uppercase mb-3">
            // who i am
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
            About Me
          </h2>
          <p className="text-muted-foreground text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Flutter and MERN stack developer focused on building modern products
            with clean interfaces and scalable backend systems.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-5 max-w-5xl mx-auto items-start">

          {/* LEFT — bio + highlights */}
          <div className="flex flex-col gap-4 animate-fade-in-left">

            {/* Bio card */}
            <div className="rounded-2xl border border-border bg-background/60 backdrop-blur-sm p-7">
              <p className="text-[13px] font-mono text-primary tracking-widest uppercase mb-5">
                Bio
              </p>
              <div className="space-y-4 text-sm leading-7 text-muted-foreground">
                <p>
                  I'm{" "}
                  <span className="text-foreground font-medium">Nakum Meet</span>
                  , a computer engineering student at Government Engineering
                  College, Rajkot.
                </p>
                <p>
                  My primary focus is Flutter and the MERN stack — building
                  modern mobile applications, scalable backend systems, and
                  smooth user experiences.
                </p>
                <p>
                  I enjoy turning ideas into real products, improving
                  development workflows, and learning through hands-on projects
                  that solve practical problems.
                </p>
              </div>
            </div>

            {/* Highlight chips */}
            <div className="grid grid-cols-2 gap-3">
              {highlights.map(({ label, value, icon: Icon, green }) => (
                <div
                  key={label}
                  className="rounded-xl border border-border bg-background/60 backdrop-blur-sm p-4 hover:border-primary/25 transition-colors duration-200"
                >
                  <p className="text-[10px] font-mono tracking-[0.18em] uppercase text-muted-foreground mb-1.5">
                    {label}
                  </p>
                  <p
                    className={`text-sm font-medium flex items-center gap-1.5 ${
                      green ? "text-emerald-500" : "text-foreground"
                    }`}
                  >
                    {green && (
                      <Circle className="w-2 h-2 fill-emerald-500 text-emerald-500" />
                    )}
                    {Icon && !green && (
                      <Icon className="w-3.5 h-3.5 text-muted-foreground" />
                    )}
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — education + tech */}
          <div className="flex flex-col gap-4 animate-fade-in-right">

            {/* Education card */}
            <div className="rounded-2xl border border-border bg-background/60 backdrop-blur-sm p-7">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-5 h-5 text-primary" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] font-mono tracking-[0.18em] uppercase text-primary mb-2">
                    Education
                  </p>
                  <h3 className="text-base font-semibold leading-snug mb-1">
                    Government Engineering College
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    B.E. in Computer Engineering
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs px-3 py-1 rounded-full border border-border bg-secondary/60 text-muted-foreground">
                      Semester 6
                    </span>
                    <span className="text-xs px-3 py-1 rounded-full border border-border bg-secondary/60 text-muted-foreground">
                      CGPA 6.5
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Tech stack grid */}
            <div className="grid grid-cols-2 gap-3">
              {techStack.map(({ title, sub, icon: Icon, accent }) => (
                <div
                  key={title}
                  className="rounded-xl border border-border bg-background/60 backdrop-blur-sm p-4 hover:border-primary/25 transition-colors duration-200"
                >
                  <div
                    className={`w-8 h-8 rounded-lg border flex items-center justify-center mb-3 ${accent}`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <p className="text-sm font-semibold mb-0.5">{title}</p>
                  <p className="text-xs text-muted-foreground">{sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;