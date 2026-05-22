import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";

import profileHero from "@/assets/profile-hero.jpeg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    document
      .getElementById(sectionId)
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const socials = [
    {
      Icon: Github,
      href: "https://github.com/nakummeet",
      label: "GitHub",
    },
    {
      Icon: Linkedin,
      href: "https://linkedin.com/in/meet-nakum-95730a344",
      label: "LinkedIn",
    },
    {
      Icon: Mail,
      href: "mailto:meetnakum.dev@gmail.com",
      label: "Email",
    },
  ];

  const stats = [
    {
      value: "10+",
      label: "Projects",
    },
    {
      value: "Flutter",
      label: "Primary Stack",
    },
    {
      value: "Rajkot",
      label: "Based In",
    },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-background text-foreground"
    >
      {/* glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        <div className="absolute top-[-120px] right-[-100px] h-[420px] w-[420px] rounded-full bg-primary/10 blur-3xl" />

        <div className="absolute bottom-[-140px] left-[-100px] h-[320px] w-[320px] rounded-full bg-primary/5 blur-3xl" />
      </div>

      {/* top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

      {/* content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 min-h-screen flex items-center">

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-20 items-center w-full">

          {/* LEFT */}
          <div className="max-w-2xl">

            {/* top label */}
            <div className="flex items-center gap-3 mb-8">

              <div className="w-10 h-px bg-primary" />

              <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-primary">
                Flutter · MERN Stack Developer
              </span>
            </div>

            {/* heading */}
            <h1
              className="leading-[0.9] tracking-[-0.06em] font-semibold"
              style={{
                fontSize: "clamp(68px, 11vw, 138px)",
              }}
            >
              Nakum
              <br />

              <span className="text-primary">
                Meet
              </span>
            </h1>

            {/* description */}
            <p className="mt-8 max-w-xl text-[15px] md:text-[16px] leading-relaxed text-muted-foreground">
              Computer engineering student focused on building
              modern mobile applications and scalable backend
              systems with clean architecture and thoughtful UI.
            </p>

            {/* buttons */}
            <div className="flex flex-wrap gap-4 mt-11">

              <button
                onClick={() => scrollToSection("portfolio")}
                className="group flex items-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground font-mono text-[11px] uppercase tracking-[0.16em] hover:opacity-90 transition-all duration-300"
              >
                View Projects

                <ArrowUpRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </button>

              <button
                onClick={() => scrollToSection("contact")}
                className="px-7 py-3.5 border border-border hover:border-primary text-muted-foreground hover:text-foreground font-mono text-[11px] uppercase tracking-[0.16em] transition-all duration-300"
              >
                Contact
              </button>
            </div>

            {/* stats */}
            <div className="grid grid-cols-3 gap-6 mt-16 pt-8 border-t border-border">

              {stats.map((item) => (
                <div key={item.label}>

                  <h3 className="text-[28px] md:text-[36px] leading-none font-semibold">
                    {item.value}
                  </h3>

                  <p className="mt-2 text-[10px] uppercase tracking-[0.18em] text-muted-foreground font-mono">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col items-center lg:items-end">

            {/* image card */}
            <div className="relative w-full max-w-[360px]">

              <div className="absolute -inset-4 border border-border" />

              <div className="relative overflow-hidden bg-card">

                <img
                  src={profileHero}
                  alt="Nakum Meet"
                  className="w-full h-[460px] object-cover object-top"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
              </div>

              {/* corners */}
              <div className="absolute -top-1.5 -left-1.5 w-6 h-6 border-t border-l border-primary" />

              <div className="absolute -bottom-1.5 -right-1.5 w-6 h-6 border-b border-r border-primary" />

              {/* info */}
              <div className="flex items-center justify-between pt-5 mt-5 border-t border-border">

                <div>
                  <h3 className="text-lg font-medium">
                    Nakum Meet
                  </h3>

                  <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-primary font-mono">
                    Flutter · Backend 
                  </p>
                </div>

                <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              </div>
            </div>

            {/* socials */}
            <div className="flex flex-wrap justify-center lg:justify-end gap-5 mt-10">

              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 text-[10px] uppercase tracking-[0.14em] text-muted-foreground hover:text-primary transition-colors duration-300 font-mono"
                >
                  <Icon
                    size={13}
                    className="transition-transform duration-300 group-hover:-translate-y-[1px]"
                  />

                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* scroll */}
      <div className="hidden lg:flex absolute bottom-8 left-12 items-end gap-3">

        <div className="w-px h-12 bg-gradient-to-b from-primary/60 to-transparent animate-pulse" />

        <span
          className="font-mono text-[9px] uppercase tracking-[0.24em] text-muted-foreground"
          style={{
            writingMode: "vertical-rl",
          }}
        >
          Scroll
        </span>
      </div>
    </section>
  );
};

export default Hero;