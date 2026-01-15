import logoIcon from "@/assets/logo-icon.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-navy text-primary-foreground py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src={logoIcon} 
                alt="Everyday Foods Group" 
                className="h-12 w-auto brightness-0 invert"
              />
              <div>
                <h3 className="font-display text-xl font-bold">
                  Everyday Foods Group
                </h3>
              </div>
            </div>
            <p className="text-primary-foreground/70 max-w-md mb-4">
              Your trusted partner in quality bakery distribution across 
              Canada and the United States. Connecting artisan bakeries 
              with retailers and foodservice operators.
            </p>
            <a 
              href="https://www.everyday-foods.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-brand-sky hover:text-brand-light transition-colors text-sm"
            >
              www.everyday-foods.com
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "About", "Products", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Products</h4>
            <ul className="space-y-3">
              {["Flatbreads", "Cookies & Biscotti", "Rusks", "Specialty Items"].map((category) => (
                <li key={category}>
                  <span className="text-primary-foreground/70">
                    {category}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm">
              © {currentYear} Everyday Foods Group. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
