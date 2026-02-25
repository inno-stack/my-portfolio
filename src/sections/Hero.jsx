import { Button } from "@/components/Button";
import {
  ArrowRight,
  Download,
  ChevronDown,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const skills = [
  "JavaScript",
  "Tailwind CSS",
  "React",
  "Next.js",
  "TypeScript",
  "Git",
  "GitHub",
];

import React, { useState } from "react";

export const Hero = () => {
  const [dots] = useState(() =>
    Array.from({ length: 30 }).map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDuration: `${15 + Math.random() * 20}s`,
      animationDelay: `${Math.random() * 5}s`,
    })),
  );

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
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {dots.map((dot, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#f0f0f0",
              left: dot.left,
              top: dot.top,
              animation: ` slow-drift ${dot.animationDuration} ease-in-out linear infinite`,
              animationDelay: dot.animationDelay,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* left Column - Text Content */}
          <div className="space-y-8">
            <div className="animate-fade-in text-3xl">
              <span className="inline-flex items-center gap-2 px-2 py-2 rounded-full glass text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Software Engineer
              </span>
            </div>

            {/* Hero Headline */}

            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-6xl font-bold leading-tight animate-fade-in animation-delay-100">
                Crafting<span className="text-primary glow-text"> digital</span>
                <br />
                Experinces with
                <br />
                <span className="font-serif italic font-normal text-white">
                  Precision.
                </span>
              </h1>
              <p className=" text-2xl text-gray-300 max-w-lg animate-fade-in animation-delay-200">
                Hi I'm Izuchukwu Innocent - A software engineer specializing in
                Javascript, React, Next.js, and TypeScript. I build scalable,
                performant web applications.
              </p>
            </div>
            {/* CTAs */}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <Button size="lg">
                Contact Me <ArrowRight className="w-5 h-5" />
              </Button>
              <a
                href="/cv.pdf"
                download="Izuchukwu-Innocent-CV.pdf"
                className="cursor-pointer"
              >
                <AnimatedBorderButton>
                  <Download className="w-5 h-5 " />
                  <span className="cursor-pointer">Download CV</span>
                </AnimatedBorderButton>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 animation-delay-400">
              <span className="text- text-muted-foreground animate-fade-in">
                Follow me:
              </span>
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
          {/* Right Column - Profile  image */}
          <div className="relative animate-fade-in animation-delay-300">
            {/* Profile image */}
            <div className="relative max-w-xs mx-auto">
              <div
                className="absolute inset-0 runded-3xl bg-gradient-to-br from-primary/30
               via-transparent to-primary/10 blur-2xl animate-pulse"
              />
              <div className="relative glass rounded-3xl p-2 glow-border">
                <img
                  src="/profile-02.png"
                  alt="Izuchukwu Innocent"
                  className="w-full aspect-[3/5] object-cover rounded-3xl shadow-xl shadow-primary"
                />
                {/* Floating Badge */}
                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-red-100 rounded-full animate-pulse" />
                    <span className="text-md font-medium">
                      Available for work
                    </span>
                  </div>
                </div>
                {/* State Badge */}
                <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
                  <div className="text-2xl font-bold text-primary">2+</div>
                  <div className="text-xs text-gray-300">Year Exp.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* skills Section */}
        <div className="mt-20 animate-fade-in animation-delay-600">
          <p className="text-2xl text-muted-foreground/90 mb-6 text-center">
            Technologies I work with
          </p>
          <div className="relative overflow-hidden">
            <div className="flex animate-marquee">
              {[...skills, ...skills].map((skill, idx) => (
                <div key={idx} className="flex-shrink-0 px-8 py-4">
                  <span className="text-xl font-semibold text-muted-foreground hover:text-amber-50 transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2
        animate-fade-in animation-delay-800"
        >
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary"
          >
            <span className="text-xs uppercase tracking-wider">Scroll</span>
            <ChevronDown className="w-6 h-6 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};
