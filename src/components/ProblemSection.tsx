const painPoints = [
  { icon: "🎮", text: "Your friend plays 5 games under 5 different names" },
  { icon: "🔍", text: "You spend more time searching than playing" },
  { icon: "💬", text: "10 messages just to get someone's username" },
];

const ProblemSection = () => (
  <section className="py-24 px-4">
    <div className="max-w-5xl mx-auto text-center">
      <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-16">
        Sound <span className="text-glow-accent text-accent">familiar?</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {painPoints.map((p, i) => (
          <div
            key={i}
            className="bg-card rounded-xl p-8 border border-border hover:border-primary/30 transition-all duration-300 card-glow hover:scale-105 group"
          >
            <div className="text-5xl mb-6 group-hover:animate-float">{p.icon}</div>
            <p className="text-foreground/80 text-lg leading-relaxed">{p.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProblemSection;
