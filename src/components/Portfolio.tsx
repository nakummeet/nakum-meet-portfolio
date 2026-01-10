import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import projectExercise from "@/assets/project-exercise.png";
import projectSweets from "@/assets/project-sweets.png";

const projects = [
  {
    title: "Exercise App",
    description: "A fitness tracking app that guides users through personalized daily exercise challenges with progress reports and insights. Features clean UI design and comprehensive progress monitoring.",
    image: projectExercise,
    tech: ["Flutter", "Dart", "UI/UX Design"],
    color: "from-orange-500/20 to-red-500/20",
    github: "https://github.com/nakummeet/DE-exercise-",
  },
  {
    title: "SweetBite",
    description: "A delightful dessert-ordering app that lets users explore, customize, and order their favorite treats with ease. Users can create their own shops and manage purchases seamlessly.",
    image: projectSweets,
    tech: ["Flutter", "Dart", "E-commerce"],
    color: "from-pink-500/20 to-orange-500/20",
    github: "https://github.com/nakummeet/SweetBite",
  },
  
]
const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">My Portfolio</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Showcasing my latest projects and creative work
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="overflow-hidden bg-card border-2 border-border shadow-lg hover:shadow-2xl transition-all hover:border-primary/50 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden group">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity`} />
                <img 
                  src={project.image} 
                  alt={`${project.title} - Mobile Application`}
                  className="w-full h-64 object-cover transition-transform group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-secondary text-sm rounded-full border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <Button 
                  variant="outline" 
                  className="gap-2 rounded-full"
                  onClick={() => window.open(project.github, '_blank')}
                >
                  View on GitHub
                  <ExternalLink size={16} />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
