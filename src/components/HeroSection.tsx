import ParticleBackground from "./ParticleBackground";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <ParticleBackground />
    <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background z-[1]" />
    <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
      <h1 className="font-heading text-5xl sm:text-6xl md:text-8xl font-bold text-foreground mb-6 tracking-tight animate-fade-in-up">
        Your Gaming Network,{" "}
        <span className="text-primary text-glow-primary">Organised.</span>
      </h1>
      <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto opacity-0 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
        Track every friend, every game, every alias — all in one place.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
        <a
          href="#download"
          className="px-8 py-4 bg-primary text-primary-foreground font-heading font-semibold text-lg rounded-lg hover:shadow-[0_0_30px_hsl(var(--glow-primary)/0.5)] transition-all duration-300 hover:scale-105"
        >
          Download Now
        </a>
        <a
          href="https://ay2526s2-cs2103t-w09-1.github.io/tp/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-4 border border-primary/40 text-primary font-heading font-semibold text-lg rounded-lg hover:bg-primary/10 transition-all duration-300 hover:scale-105"
        >
          View User Guide
        </a>
      </div>
    </div>
  </section>
);

export default HeroSection;
