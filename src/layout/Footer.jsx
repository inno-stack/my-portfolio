import { Github, Linkedin, Twitter } from "lucide-react";

const sociallinks = [
  { icon: Github, href: "https://github.com/inno-stack", label: "Github" },
  { icon: Linkedin, href: "#", label: "Linkedin" },
  { icon: Twitter, href: "#", label: "Twitter" },
];

const footerlinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#testimonials", label: "Testimonials" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/*Logo & Copyright */}
          <div className="text-center md:text-left">
            <a href="#" className="text-xl font-bold tracking-tight">
              INNOMEX<span className="text-primary">.</span>
            </a>
            <p>Innotech Solution. All right reserved. &copy; {currentYear}</p>
          </div>

          {/*links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {footerlinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {sociallinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
