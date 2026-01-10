import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "portfolio", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">NM</span>
            </div>
            <span className="font-bold text-xl">Nakum Meet</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <button 
              onClick={() => scrollToSection("home")} 
              className={`hover:text-primary transition-colors ${activeSection === "home" ? "text-primary font-semibold" : ""}`}
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection("about")} 
              className={`hover:text-primary transition-colors ${activeSection === "about" ? "text-primary font-semibold" : ""}`}
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection("skills")} 
              className={`hover:text-primary transition-colors ${activeSection === "skills" ? "text-primary font-semibold" : ""}`}
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection("portfolio")} 
              className={`hover:text-primary transition-colors ${activeSection === "portfolio" ? "text-primary font-semibold" : ""}`}
            >
              Portfolio
            </button>
            <button 
              onClick={() => scrollToSection("contact")} 
              className={`hover:text-primary transition-colors ${activeSection === "contact" ? "text-primary font-semibold" : ""}`}
            >
              Contact
            </button>
            <Button onClick={() => scrollToSection("contact")} className="rounded-full">
              Hire Me
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-4 animate-fade-in">
            <button 
              onClick={() => scrollToSection("home")} 
              className={`text-left hover:text-primary transition-colors ${activeSection === "home" ? "text-primary font-semibold" : ""}`}
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection("about")} 
              className={`text-left hover:text-primary transition-colors ${activeSection === "about" ? "text-primary font-semibold" : ""}`}
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection("skills")} 
              className={`text-left hover:text-primary transition-colors ${activeSection === "skills" ? "text-primary font-semibold" : ""}`}
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection("portfolio")} 
              className={`text-left hover:text-primary transition-colors ${activeSection === "portfolio" ? "text-primary font-semibold" : ""}`}
            >
              Portfolio
            </button>
            <button 
              onClick={() => scrollToSection("contact")} 
              className={`text-left hover:text-primary transition-colors ${activeSection === "contact" ? "text-primary font-semibold" : ""}`}
            >
              Contact
            </button>
            <Button onClick={() => scrollToSection("contact")} className="rounded-full w-full">
              Hire Me
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
