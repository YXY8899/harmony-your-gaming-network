const stats = [
  { value: "94%", label: "Reduction in time spent searching for contacts" },
  { value: "3 sec", label: "Average time to find any contact" },
  { value: "3.2B", label: "Gamers worldwide who need this" },
];

const StatsSection = () => (
  <section className="py-24 px-4">
    <div className="max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {stats.map((s, i) => (
          <div key={i} className="text-center">
            <div className="font-heading text-5xl md:text-6xl font-bold text-primary text-glow-primary mb-3">
              {s.value}
            </div>
            <p className="text-muted-foreground text-lg">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsSection;
