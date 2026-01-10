import { useRef } from "react";
import emailjs from "emailjs-com";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Linkedin, Github } from "lucide-react";
import { toast } from "sonner";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "nakummeet3570@gmail.com",
    link: "mailto:nakummeet3570@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 97732 52529",
    link: "tel:+919773252529",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "meet-nakum",
    link: "https://linkedin.com/in/meet-nakum-95730a344",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "nakummeet",
    link: "https://github.com/nakummeet",
  },
];

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        "service_bc8moth", // ✅ Your Gmail EmailJS service ID
        "template_0nr44nb", // ⚠️ Replace with your EmailJS template ID
        form.current,
        "XM76OLZsj8yCN96ha" // ⚠️ Replace with your EmailJS public key
      )
      .then(
        () => {
          toast.success("✅ Message sent successfully! I'll get back to you soon.");
          form.current?.reset();
        },
        (error) => {
          console.error("Email send failed:", error.text);
          toast.error("❌ Failed to send message. Please try again later.");
        }
      );
  };

  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have a project in mind? Let's work together!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6 animate-fade-in-left">
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.link}
                target={info.link.startsWith("http") ? "_blank" : undefined}
                rel={
                  info.link.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="block"
              >
                <Card className="p-6 bg-card border-2 border-border shadow-sm hover:shadow-lg hover:border-primary/50 transition-all">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">
                        {info.label}
                      </p>
                      <p className="font-semibold">{info.value}</p>
                    </div>
                  </div>
                </Card>
              </a>
            ))}
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in-right">
            <Card className="p-8 bg-card border-2 border-border shadow-lg">
              <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
              <form ref={form} onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Name</label>
                  <Input
                    name="user_name"
                    placeholder="Your name"
                    required
                    className="border-2"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Email</label>
                  <Input
                    type="email"
                    name="user_email"
                    placeholder="your.email@example.com"
                    required
                    className="border-2"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Message</label>
                  <Textarea
                    name="message"
                    placeholder="Your message..."
                    required
                    className="min-h-[150px] border-2"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full rounded-full"
                >
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
