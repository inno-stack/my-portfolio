import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState } from "react";
import { useEffect } from "react";

const testimonials = [
  {
    quote:
      "Working with Izuchukwu was a smooth experience. He transformed our UI concepts into a fast, responsive web application and paid strong attention to performance and accessibility. His communication and problem-solving skills made delivery faster than expected.",
    author: "Chinedu Okafor",
    role: "Product Manager — SaaS Startup",
    avatar: "https://images.unsplash.com/",
  },
  {
    quote:
      "Integration with our APIs was handled professionally. He understood the data flow quickly and built clean, maintainable frontend components. His code structure made collaboration very easy for the team.",
    author: "Aisha Bello",
    role: "Backend Engineer — API Team",
    avatar: "https://images.unspla",
  },
  {
    quote:
      "He developed a student results system that simplified our academic record process. The interface was user-friendly and efficient for both staff and students. His technical support and attention to detail were impressive.",
    author: "Michael Eze",
    role: "School Administrator — Education Sector",
    avatar: "https://images.unsplash.com/",
  },
  {
    quote:
      "He translates design systems into pixel-perfect interfaces and ensures responsiveness across devices. His understanding of user experience and frontend performance makes him a strong engineer to work with.",
    author: "Grace Nwankwo",
    role: "UI/UX Designer — Product Design Team",
    avatar: "https://images.unsplash.com",
  },
];

export const Testimonials = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = () => {
    setActiveIdx((prev) => (prev + 1) % testimonials.length);
  };

  const previous = () => {
    setActiveIdx(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveIdx((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section id="testimonials" className="py-28 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 flex justify-center">
        <div className="w-[700px] h-[700px] bg-primary/20 rounded-full blur-3xl opacity-40" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-sm font-medium tracking-widest uppercase text-primary">
            Testimonials
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Trusted by{" "}
            <span className="italic font-serif text-primary">
              great professionals
            </span>
          </h2>
        </div>

        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="max-w-4xl mx-auto"
        >
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] "
              style={{
                transform: `translateX(-${activeIdx * 100}%)`,
              }}
            >
              {testimonials.map((testimonial, idx) => (
                <div key={idx} className="w-full flex-shrink-0 px-4">
                  <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 p-10 md:p-14 rounded-3xl shadow-xl">
                    {/* Quote Icon */}

                    <div className=" absolute top-1 left-5 w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-lg">
                      <Quote className="w-4 h-4 text-primary-foreground" />
                    </div>

                    <blockquote className="text-lg md:text-xl leading-relaxed text-muted-foreground mb-10">
                      {testimonial.quote}
                    </blockquote>

                    <div className="flex items-center gap-4">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.author}
                        className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/30"
                      />
                      <div>
                        <p className="font-semibold text-base">
                          {testimonial.author}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-12">
            <button
              onClick={previous}
              className="p-3 rounded-full border border-white/10 bg-white/5 hover:bg-primary hover:text-primary-foreground transition-all"
            >
              <ChevronLeft size={18} />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIdx(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === activeIdx
                      ? "w-8 bg-primary"
                      : "w-2 bg-white/30 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="p-3 rounded-full border border-white/10 bg-white/5 hover:bg-primary hover:text-primary-foreground transition-all"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
