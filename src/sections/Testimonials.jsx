import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    quote:
      "Working with Izuchukwu was a smooth experience. He transformed our UI concepts into a fast, responsive web application and paid strong attention to performance and accessibility. His communication and problem-solving skills made delivery faster than expected.",
    author: "Chinedu Okafor",
    role: "Product Manager — SaaS Startup",
    avatar:
      "https://unsplash.com/photos/man-with-sunglasses-and-cap-against-the-sky-K4Y7oLEpiZU",
  },
  {
    quote:
      "Integration with our APIs was handled professionally. He understood the data flow quickly and built clean, maintainable frontend components. His code structure made collaboration very easy for the team.",
    author: "Aisha Bello",
    role: "Backend Engineer — API Team",
    avatar:
      "https://unsplash.com/photos/man-with-sunglasses-and-cap-against-the-sky-K4Y7oLEpiZU",
  },
  {
    quote:
      "He developed a student results system that simplified our academic record process. The interface was user-friendly and efficient for both staff and students. His technical support and attention to detail were impressive.",
    author: "Michael Eze",
    role: "School Administrator — Education Sector",
    avatar:
      "https://unsplash.com/photos/man-with-sunglasses-and-cap-against-the-sky-K4Y7oLEpiZU",
  },
  {
    quote:
      "He translates design systems into pixel-perfect interfaces and ensures responsiveness across devices. His understanding of user experience and frontend performance makes him a strong engineer to work with.",
    author: "Grace Nwankwo",
    role: "UI/UX Designer — Product Design Team",
    avatar:
      "https://unsplash.com/photos/man-with-sunglasses-and-cap-against-the-sky-K4Y7oLEpiZU",
  },
];

export const Testimonials = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const next = () => {
    setActiveIdx((prev) => (prev + 1) % testimonials.length);
  };

  const previous = () => {
    setActiveIdx(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  return (
    <section id="testimonials" className="py-32 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/2 w{800px} h-{800px}
      bg-primary/30 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2 "
      />
      <div
        className="container mx-auto
      px-6 relative z-10"
      >
        {/* Section Header */}
        <div
          className="text-center max-w-3xl
          mx-auto mb-16"
        >
          <span
            className="text-secondary-foreground text-sm
          font-medium tracking-wider uppercase animate-fade-in"
          >
            What People Say
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Kind word from
            <span className="font-serif italic font-normal text-white">
              {" "}
              amazing people.
            </span>
          </h2>
        </div>

        <div>
          {/* Testimonials Carousel */}
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Main Testimoial */}
              <div className="glass p-8 rounded-3xl md:p-12 glow-border animate-fade-in animation-delay-200">
                <div className="absolute -top-4 left-8 w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                  <Quote className="w-6 h-6 text-primary-foreground" />
                </div>
                <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-8 pt-4">
                  "{testimonials[activeIdx].quote}"
                </blockquote>

                <div className="flex items-center gap-4">
                  <img
                    src={testimonials[activeIdx].avater}
                    alt={testimonials[activeIdx].author}
                    className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/20"
                  />
                  <div>
                    <div className="font-semibold">
                      {testimonials[activeIdx].author}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonials[activeIdx].role}
                    </div>
                  </div>
                </div>
              </div>
              {/* Testimonial Navigation */}
              <div className="flex items-center justify-center gap-4 mt-8">
                <button
                  className="p-3 rounded-full glass hover:bg-Primary/10 hover:text-primary transition-all "
                  onClick={previous}
                >
                  <ChevronLeft />
                </button>
                <div className="flex gap-2">
                  {testimonials.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveIdx(idx)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        idx === activeIdx
                          ? "w-8 bg-primary"
                          : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                      }`}
                    />
                  ))}
                </div>
                <button
                  onClick={next}
                  className="p-3 rounded-full glass hover:bg-Primary/10 hover:text-primary transition-all "
                >
                  <ChevronRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
