import { Smartphone, Server, Sparkles } from "lucide-react";

const services = [
  {
    icon: Smartphone,
    title: "Flutter App Development",
    description:
      "Building clean, scalable, high-performance cross-platform mobile applications using Flutter with a strong focus on UI, UX, and maintainability.",
    accent: "text-cyan-400",
    border: "hover:border-cyan-400/40",
    bg: "bg-cyan-400/5",
  },
  {
    icon: Server,
    title: "Backend Development",
    description:
      "Developing secure and efficient backend APIs using Node.js, Express, and MongoDB to support real-world data-driven applications.",
    accent: "text-green-400",
    border: "hover:border-green-400/40",
    bg: "bg-green-400/5",
  },
  {
    icon: Sparkles,
    title: "AI-Assisted Development",
    description:
      "Using AI tools to improve development speed, code quality, and problem-solving while maintaining clean architecture and best practices.",
    accent: "text-violet-400",
    border: "hover:border-violet-400/40",
    bg: "bg-violet-400/5",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-primary font-mono text-sm mb-3">// what i do</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Services</h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            What I focus on while building practical and scalable applications
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className={`glass rounded-2xl p-7 border border-border ${service.border} transition-all duration-300 hover:-translate-y-1 hover:shadow-lg animate-fade-in`}
              style={{ animationDelay: `${index * 0.12}s` }}
            >
              <div
                className={`w-12 h-12 rounded-xl ${service.bg} flex items-center justify-center mb-5 border border-current/10`}
              >
                <service.icon className={`w-6 h-6 ${service.accent}`} />
              </div>
              <h3 className="font-bold text-lg mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
