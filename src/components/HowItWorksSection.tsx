import { Download, UserPlus, Zap } from "lucide-react";

const steps = [
  { icon: Download, title: "Download", desc: "Get the JAR file and run it" },
  { icon: UserPlus, title: "Add Your Contacts", desc: "Import your gaming friends with their aliases" },
  { icon: Zap, title: "Stay Connected", desc: "Find, copy and share profiles instantly" },
];

const HowItWorksSection = () => (
  <section className="py-24 px-4 bg-card/50">
    <div className="max-w-5xl mx-auto text-center">
      <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-16">
        Get started in <span className="text-accent text-glow-accent">3 steps</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
        {/* Connection line */}
        <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-px bg-gradient-to-r from-primary/0 via-primary/40 to-primary/0" />
        {steps.map((s, i) => (
          <div key={i} className="flex flex-col items-center group">
            <div className="w-24 h-24 rounded-2xl bg-secondary flex items-center justify-center mb-6 border border-border group-hover:border-primary/40 transition-all duration-300 group-hover:shadow-[0_0_30px_hsl(var(--glow-primary)/0.2)] relative z-10">
              <s.icon className="w-10 h-10 text-primary" />
            </div>
            <span className="font-heading text-sm text-primary mb-2 uppercase tracking-widest">Step {i + 1}</span>
            <h3 className="font-heading text-2xl font-semibold text-foreground mb-2">{s.title}</h3>
            <p className="text-muted-foreground">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
