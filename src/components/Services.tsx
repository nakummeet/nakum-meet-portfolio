import { Card } from "@/components/ui/card";
import { Smartphone, Server, Sparkles } from "lucide-react";

const services = [
  {
    icon: Smartphone,
    title: "Flutter App Development",
    description:
      "Building clean, scalable, and high-performance cross-platform mobile applications using Flutter with a strong focus on UI, UX, and maintainability.",
    color: "bg-blue-500/10",
    iconColor: "text-blue-500",
  },
  {
    icon: Server,
    title: "Backend Development",
    description:
      "Developing secure and efficient backend APIs using Node.js, Express, and MongoDB to support real-world, data-driven applications.",
    color: "bg-green-500/10",
    iconColor: "text-green-500",
  },
  {
    icon: Sparkles,
    title: "AI-Assisted Development",
    description:
      "Using AI tools to improve development speed, code quality, and problem-solving while maintaining clean architecture and best practices.",
    color: "bg-purple-500/10",
    iconColor: "text-purple-500",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">My Services</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            What I focus on while building practical and scalable applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-8 bg-card/60 backdrop-blur-sm border-2 border-border shadow-sm hover:shadow-xl transition-all hover:border-primary/50 hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className={`w-16 h-16 rounded-2xl ${service.color} flex items-center justify-center mb-6`}
              >
                <service.icon
                  className={`w-8 h-8 ${service.iconColor}`}
                />
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
