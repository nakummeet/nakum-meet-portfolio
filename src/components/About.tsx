import { Card } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A focused developer building practical mobile and backend solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left - About Text */}
          <div className="animate-fade-in-left">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed">
                I’m{" "}
                <span className="font-semibold text-primary">Nakum Meet</span>, a
                B.E. student at Government Engineering College, Rajkot, with a
                strong interest in building real-world applications. I enjoy
                solving problems through clean code and structured thinking.
              </p>

              <p className="text-lg leading-relaxed">
                My primary focus is on{" "}
                <span className="font-semibold">Flutter</span> for cross-platform
                mobile development and{" "}
                <span className="font-semibold">Node.js with MongoDB</span> for
                backend APIs and data-driven applications. I like working on
                full-stack projects where performance, scalability, and clarity
                matter.
              </p>

              <p className="text-lg leading-relaxed">
                I continuously improve my skills by building projects, learning
                backend architecture, and using AI tools to speed up development
                while maintaining code quality. I value consistency, learning,
                and delivering features that actually work.
              </p>
            </div>
          </div>

          {/* Right - Education & Highlights */}
          <div className="space-y-6 animate-fade-in-right">
            {/* Education Card */}
            <Card className="p-6 border-2 border-primary/20 bg-card shadow-lg">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Education</h3>
                  <p className="font-semibold text-primary mb-1">
                    Government Engineering College, Rajkot
                  </p>
                  <p className="text-muted-foreground mb-2">
                    Bachelor of Engineering (B.E.)
                  </p>
                  <div className="flex gap-4 text-sm flex-wrap">
                    <span className="bg-secondary px-3 py-1 rounded-full">
                      5th Semester
                    </span>
                    <span className="bg-secondary px-3 py-1 rounded-full">
                      CGPA: 6.5
                    </span>
                  </div>
                </div>
              </div>
            </Card>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-6 text-center bg-card border-2 border-border shadow-sm hover:shadow-lg transition-shadow">
                <div className="text-3xl font-bold text-primary mb-2">
                  Flutter
                </div>
                <p className="text-sm text-muted-foreground">
                  Mobile App Development
                </p>
              </Card>

              <Card className="p-6 text-center bg-card border-2 border-border shadow-sm hover:shadow-lg transition-shadow">
                <div className="text-3xl font-bold text-primary mb-2">
                  Node.js
                </div>
                <p className="text-sm text-muted-foreground">
                  Backend APIs
                </p>
              </Card>

              <Card className="p-6 text-center bg-card border-2 border-border shadow-sm hover:shadow-lg transition-shadow">
                <div className="text-3xl font-bold text-primary mb-2">
                  MongoDB
                </div>
                <p className="text-sm text-muted-foreground">
                  Database Design
                </p>
              </Card>

              <Card className="p-6 text-center bg-card border-2 border-border shadow-sm hover:shadow-lg transition-shadow">
                <div className="text-3xl font-bold text-primary mb-2">
                  Git
                </div>
                <p className="text-sm text-muted-foreground">
                  Version Control
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
