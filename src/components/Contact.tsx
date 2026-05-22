import { useRef } from "react";
import emailjs from "emailjs-com";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Linkedin, Github, Send } from "lucide-react";
import { toast } from "sonner";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "meetnakum.dev@gmail.com",
    link: "mailto:meetnakum.dev@gmail.com",
    accent: "text-cyan-400",
    bg: "bg-cyan-400/10",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 97732 52529",
    link: "tel:+919773252529",
    accent: "text-green-400",
    bg: "bg-green-400/10",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "meet-nakum",
    link: "https://linkedin.com/in/meet-nakum-95730a344",
    accent: "text-blue-400",
    bg: "bg-blue-400/10",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "nakummeet",
    link: "https://github.com/nakummeet",
    accent: "text-purple-400",
    bg: "bg-purple-400/10",
  },
];

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          toast.success("Message sent! I'll get back to you soon.");
          form.current?.reset();
        },
        (error) => {
          console.error("Email send failed:", error.text);
          toast.error("Failed to send. Please try again later.");
        }
      );
  };

  return (
    <section id="contact" className="py-24 clip-diagonal bg-secondary/20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-primary font-mono text-sm mb-3">// reach out</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Have a project in mind or want to connect? I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="animate-fade-in-left space-y-4">
            <h3 className="text-xl font-bold mb-6">Contact Information</h3>
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.link}
                target={info.link.startsWith("http") ? "_blank" : undefined}
                rel={info.link.startsWith("http") ? "noopener noreferrer" : undefined}
                className="block"
              >
                <div className="glass rounded-xl p-4 border border-border hover:border-primary/40 transition-all hover:-translate-y-0.5 hover:shadow-md">
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-lg ${info.bg} flex items-center justify-center flex-shrink-0`}>
                      <info.icon className={`w-5 h-5 ${info.accent}`} />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground font-mono mb-0.5">{info.label}</p>
                      <p className="text-sm font-semibold">{info.value}</p>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in-right">
            <div className="glass rounded-2xl p-7 border border-border">
              <h3 className="text-xl font-bold mb-6">Send Me a Message</h3>
              <form ref={form} onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-1.5 block text-muted-foreground">
                    Name
                  </label>
                  <Input
                    name="user_name"
                    placeholder="Your name"
                    required
                    className="bg-background/50 border-border focus:border-primary"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1.5 block text-muted-foreground">
                    Email
                  </label>
                  <Input
                    type="email"
                    name="user_email"
                    placeholder="your@email.com"
                    required
                    className="bg-background/50 border-border focus:border-primary"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1.5 block text-muted-foreground">
                    Message
                  </label>
                  <Textarea
                    name="message"
                    placeholder="Tell me about your project..."
                    required
                    className="min-h-[130px] bg-background/50 border-border focus:border-primary resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full rounded-full gap-2 bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  <Send size={16} />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
