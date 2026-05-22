const skillGroups = [
  {
    title: "Primary Skills",
    color: "text-primary",
    borderColor: "border-primary/30",
    bgColor: "bg-primary/5 hover:bg-primary/10",
    skills: [
      { name: "Flutter", icon: "📱" },
      { name: "Dart", icon: "🎯" },
      { name: "MERN Stack", icon: "🌐" },
      { name: "Express.js", icon: "⚡" },
      { name: "MongoDB", icon: "🍃" },
      { name: "REST APIs", icon: "🔗" },
    ],
  },
  {
    title: "Other Skills",
    color: "text-blue-400",
    borderColor: "border-blue-400/30",
    bgColor: "bg-blue-400/5 hover:bg-blue-400/10",
    skills: [
      { name: "Python", icon: "🐍" },
      { name: "Java", icon: "☕" },
      { name: "C Programming", icon: "💾" },
      { name: "Git & GitHub", icon: "🔀" },
      { name: "AI Tools", icon: "🤖" },
      { name: "Vercel", icon: "🚀" },
    ],
  },
];

const learningSkills = [
  { name: "Next.js", icon: "▲" },
  { name: "Firebase", icon: "🔥" },
  { name: "TypeScript Advanced", icon: "🟦" },
  // { name: "Docker", icon: "🐳" },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 clip-diagonal bg-secondary/20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-primary font-mono text-sm mb-3">// my toolkit</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills & Technologies</h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Tools and technologies I use to build real-world solutions
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          {skillGroups.map((group, gi) => (
            <div key={gi} className={`animate-fade-in`} style={{ animationDelay: `${gi * 0.15}s` }}>
              <h3 className={`text-lg font-semibold mb-5 ${group.color} font-mono`}>
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className={`skill-badge flex items-center gap-2 px-4 py-2.5 rounded-full border ${group.borderColor} ${group.bgColor} cursor-default transition-all duration-200`}
                  >
                    <span className="text-base">{skill.icon}</span>
                    <span className="text-sm font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Currently Learning */}
          <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="flex items-center gap-3 mb-5">
              <h3 className="text-lg font-semibold text-yellow-400 font-mono">Currently Learning</h3>
              <span className="px-2 py-0.5 text-xs rounded-full bg-yellow-400/10 text-yellow-400 border border-yellow-400/30 animate-pulse">
                in progress
              </span>
            </div>
            <div className="flex flex-wrap gap-3">
              {learningSkills.map((skill) => (
                <div
                  key={skill.name}
                  className="skill-badge flex items-center gap-2 px-4 py-2.5 rounded-full border border-yellow-400/30 bg-yellow-400/5 hover:bg-yellow-400/10 cursor-default transition-all duration-200"
                >
                  <span className="text-base">{skill.icon}</span>
                  <span className="text-sm font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
