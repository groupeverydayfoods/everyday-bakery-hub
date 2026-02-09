import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logoIcon from "@/assets/logo-icon.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Products", href: "#products" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3">
            <img 
              src={logoIcon} 
              alt="Everyday Foods Group" 
              className="h-10 md:h-12 w-auto"
            />
            <div className="flex flex-col">
              <span className="font-display text-lg md:text-xl font-bold text-primary leading-tight">
                Everyday
              </span>
              <span className="text-xs md:text-sm font-medium text-muted-foreground tracking-wider uppercase">
                Foods Group
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-200 font-medium"
              >
                {link.name}
              </a>
            ))}
            <Button variant="secondary" size="lg" className="bg-muted-foreground text-background hover:bg-muted-foreground/80" asChild>
              <a href="#contact">Get In Touch</a>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-foreground/80 hover:text-primary transition-colors duration-200 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <Button variant="secondary" size="lg" className="mt-2 bg-muted-foreground text-background hover:bg-muted-foreground/80" asChild>
                <a href="#contact" onClick={() => setIsMenuOpen(false)}>Get In Touch</a>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
