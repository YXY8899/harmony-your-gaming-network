const FooterSection = () => (
  <footer className="py-12 px-4 border-t border-border">
    <div className="max-w-5xl mx-auto text-center">
      <p className="font-heading text-lg text-foreground font-semibold mb-4">Team W09-1</p>
      <div className="flex justify-center gap-6 mb-6 text-sm">
        <a href="https://ay2526s2-cs2103t-w09-1.github.io/tp/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">User Guide</a>
        <a href="https://ay2526s2-cs2103t-w09-1.github.io/tp/DeveloperGuide.html" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">Developer Guide</a>
        <a href="https://github.com/AY2526S2-CS2103T-W09-1/tp" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">GitHub</a>
      </div>
      <p className="text-muted-foreground text-sm">Built with ❤️ for CS2103T @ NUS</p>
    </div>
  </footer>
);

export default FooterSection;
