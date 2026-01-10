import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import profileHero from "@/assets/profile-hero.jpeg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen pt-24 pb-12 relative overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-20 h-20 rounded-full bg-primary/20 blur-xl animate-float" />
      <div
        className="absolute top-40 right-40 w-16 h-16 rounded-full bg-accent/20 blur-xl animate-float"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute bottom-20 left-20 w-24 h-24 rounded-full bg-primary/20 blur-xl animate-float"
        style={{ animationDelay: "2s" }}
      />

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in-left">
            <div className="inline-block px-4 py-2 bg-secondary rounded-full mb-4">
              <span className="text-sm font-medium">Hi, I am</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
              Nakum Meet
            </h1>

            <p className="text-2xl md:text-3xl text-muted-foreground mb-6">
              Flutter & Node.js Developer
            </p>

            <p className="text-lg text-muted-foreground mb-8 max-w-xl">
              I’m a B.E. student at Government Engineering College, Rajkot, with a
              strong interest in building scalable mobile and backend
              applications. I work with Flutter for mobile apps and Node.js with
              MongoDB to create reliable APIs and full-stack solutions.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <Button
                size="lg"
                variant="outline"
                className="rounded-full gap-2"
                onClick={() => scrollToSection("portfolio")}
              >
                View My Projects
                <ArrowRight size={20} />
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-6">
              <div className="bg-card rounded-2xl p-4 border border-border shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-2xl">🎓</span>
                  </div>
                  <div>
                    <p className="text-2xl font-bold">5th Sem</p>
                    <p className="text-sm text-muted-foreground">
                      B.E. Student
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-2xl p-4 border border-border shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-2xl">🛠️</span>
                  </div>
                  <div>
                    <p className="text-2xl font-bold">7+</p>
                    <p className="text-sm text-muted-foreground">
                      Projects Built
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="relative animate-fade-in-right flex justify-center items-center">
            <div className="relative z-10">
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-primary/20">
                <img
                  src={profileHero}
                  alt="Nakum Meet - Flutter & Node.js Developer"
                  className="w-full max-w-md mx-auto lg:max-w-lg h-auto object-cover rounded-3xl"
                />
              </div>
            </div>

            {/* Floating Tech Icons */}
            <div className="absolute top-10 -left-10 w-14 h-14 bg-card rounded-2xl shadow-lg flex items-center justify-center animate-float border border-border">
              <span className="text-xl">📱</span>
            </div>
            <div
              className="absolute top-32 -right-10 w-14 h-14 bg-card rounded-2xl shadow-lg flex items-center justify-center animate-float border border-border"
              style={{ animationDelay: "5s" }}
            >
              <span className="text-xl">💻</span>
            </div>
            <div
              className="absolute bottom-20 -left-10 w-14 h-14 bg-card rounded-2xl shadow-lg flex items-center justify-center animate-float border border-border"
              style={{ animationDelay: "2s" }}
            >
              <span className="text-xl">🍃</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
