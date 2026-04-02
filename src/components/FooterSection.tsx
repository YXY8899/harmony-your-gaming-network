const FooterSection = () => (
  <footer className="py-12 px-4 border-t border-border">
    <div className="max-w-5xl mx-auto text-center">
      <p className="font-heading text-lg text-foreground font-semibold mb-4">Team W09-1</p>
      <div className="flex justify-center gap-6 mb-6 text-sm">
        <a href="#" className="text-muted-foreground hover:text-primary transition-colors">User Guide</a>
        <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Developer Guide</a>
        <a href="https://github.com" className="text-muted-foreground hover:text-primary transition-colors">GitHub</a>
      </div>
      <p className="text-muted-foreground text-sm">Built with ❤️ for CS2103T @ NUS</p>
    </div>
  </footer>
);

export default FooterSection;
