import { Search, User, Copy, Terminal } from "lucide-react";

const features = [
  { icon: Search, title: "Smart Search", desc: "Find anyone by name, game, or alias instantly" },
  { icon: User, title: "Gaming Profiles", desc: "Share your entire gaming identity in one command" },
  { icon: Copy, title: "One-Click Copy", desc: "Generate and share a full contact profile in seconds" },
  { icon: Terminal, title: "Lightning Fast CLI", desc: "Built for fast typists who value efficiency" },
];

const FeaturesSection = () => (
  <section id="features" className="py-24 px-4 bg-card/50">
    <div className="max-w-5xl mx-auto text-center">
      <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
        Everything you need. <span className="text-primary text-glow-primary">One app.</span>
      </h2>
      <p className="text-muted-foreground mb-16 text-lg">Power tools for your gaming connections</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {features.map((f, i) => (
          <div
            key={i}
            className="bg-card rounded-xl p-8 border border-border hover:border-accent/30 transition-all duration-300 card-glow hover:scale-[1.03] text-left group"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
              <f.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-heading text-xl font-semibold text-foreground mb-2">{f.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
