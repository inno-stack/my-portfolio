import { Button } from "@/components/Button";
import { ArrowRight, Download, Github, Linkedin, Twitter } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Bg */}
      <div className="absolute inset-0">
        <img
          src="/bg.jpg"
          alt="hero-bg"
          className="w-full h-full object-cover opacity-40"
        />
      </div>
      <div className="absolute inset-0 bg-linear-to-b from-background/20 via-background/80 to-background" />

      {/* Green Dot */}
      <div className="absolute inset-0 overflow-hidden pointer-none:">
        {[...Array(30)].map((_, i) => (
          <div
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#f0f0f0",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: ` slow-drift ${
                15 + Math.random() * 20
              }s ease-in-out linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* left Column - Text Content */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-2 py-2 rounded-full glass text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Software Engineer
              </span>
            </div>

            {/* Hero Headline */}

            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                Crafting<span className="text-primary glow-text">digital</span>
                <br />
                Experinces with
                <br />
                <span className="font-serif italic font-normal text-white">
                  Precision.
                </span>
              </h1>
              <p className=" text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                Hi I'm Izuchukwu Innocent - a software engineer specializing in
                Javascript, React, Next.js, and TypeScript. I build scalable,
                performant web applications that users love.
              </p>
            </div>
            {/* CTAs */}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <Button size="lg">
                Contact Me <ArrowRight className="w-5 h-5" />
              </Button>
              <AnimatedBorderButton />
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 animation-delay-400">
              <span className="text- text-muted-foreground animate-fade-in">Follow me:</span>
              {[
                { icon: Github, href: "https://github.com/inno-stack" },
                { icon: Linkedin, href: "#" },
                { icon: Twitter, href: "#" },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className="p-2 rounded-full glass hover:bg-primary/20 hover:text-primary transition-all duration-300"
                >
                  {<social.icon className="w-7 h-7" />}
                </a>
              ))}
            </div>
          </div>
          {/* Right Column - Profile */}
        </div>
      </div>
    </section>
  );
};
