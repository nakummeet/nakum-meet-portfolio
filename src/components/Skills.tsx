import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const skills = {
  primary: [
    { name: "Flutter", level: 70, icon: "📱" },
    { name: "Node.js", level: 50, icon: "🌐" },
    { name: "MongoDB", level: 60, icon: "🍃" },
    { name: "REST APIs", level: 40, icon: "⚡" },
  ],
  secondary: [
    { name: "Python", level: 75, icon: "🐍" },
    { name: "Java", level: 70, icon: "☕" },
    { name: "C Programming", level: 72, icon: "💾" },
    { name: "AI & Prompts", level: 88, icon: "🤖" },
  ],
};

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">My Skills</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Primary Skills */}
          <div className="mb-12 animate-fade-in-left">
            <h3 className="text-2xl font-bold mb-6">Primary Expertise</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {skills.primary.map((skill, index) => (
                <Card key={index} className="p-6 bg-card border-2 border-border shadow-sm hover:shadow-lg transition-all hover:border-primary/50">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-2xl">
                      {skill.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold text-lg">{skill.name}</span>
                        <span className="text-primary font-bold">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Secondary Skills */}
          <div className="animate-fade-in-right">
            <h3 className="text-2xl font-bold mb-6">Secondary Knowledge</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {skills.secondary.map((skill, index) => (
                <Card key={index} className="p-6 bg-card border-2 border-border shadow-sm hover:shadow-lg transition-all hover:border-primary/50">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-2xl">
                      {skill.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold text-lg">{skill.name}</span>
                        <span className="text-primary font-bold">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
