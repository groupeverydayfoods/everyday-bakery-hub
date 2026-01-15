import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin } from "lucide-react";
import heroBakery from "@/assets/hero-bakery.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBakery}
          alt="Artisan bakery products"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-wheat-light px-4 py-2 rounded-full mb-6 animate-fade-in">
            <MapPin className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              Proudly Serving Canada & USA
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Your Trusted Partner in{" "}
            <span className="text-gradient">Quality Bakery</span> Distribution
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            From artisan Naan and Pita to premium cookies and pastries — we supply 
            and broker exceptional bakery products to retailers and foodservice 
            operators across North America.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" size="xl">
              Explore Our Products
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="xl">
              Partner With Us
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-border/50 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <p className="text-sm text-muted-foreground mb-4">Trusted by leading retailers</p>
            <div className="flex flex-wrap gap-8 items-center opacity-60">
              <span className="font-display text-xl font-semibold text-foreground/70">Grocery Chains</span>
              <span className="font-display text-xl font-semibold text-foreground/70">Food Service</span>
              <span className="font-display text-xl font-semibold text-foreground/70">Specialty Stores</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
