import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const categories = [
  {
    name: "Flatbreads",
    items: ["Naan", "Naan Dippers", "Pita", "Roti"],
    image: "🫓",
    description: "Authentic flatbreads crafted with traditional recipes",
  },
  {
    name: "Cookies & Biscotti",
    items: ["Cookies", "Biscottis", "Biscotti Bites"],
    image: "🍪",
    description: "Premium sweet treats for every occasion",
  },
  {
    name: "Rusks & Tea Time",
    items: ["Cake Rusks", "Tea Rusks", "Fruit Cake", "Pound Cake"],
    image: "🧁",
    description: "Perfect companions for your tea and coffee moments",
  },
  {
    name: "Specialty Items",
    items: ["Donuts", "Macaroons", "Samosa Chips"],
    image: "🍩",
    description: "Unique offerings that set your shelves apart",
  },
];

const Products = () => {
  return (
    <section id="products" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Our Products
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
            A Diverse Range of <span className="text-gradient">Quality Bakery</span> Products
          </h2>
          <p className="text-lg text-muted-foreground">
            From everyday staples to specialty treats, we offer a comprehensive 
            selection of bakery items to meet your customers' needs.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {categories.map((category, index) => (
            <div
              key={category.name}
              className="group bg-gradient-card rounded-3xl p-8 shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 border border-border/50"
            >
              <div className="flex items-start gap-6">
                <div className="text-6xl">{category.image}</div>
                <div className="flex-1">
                  <h3 className="font-display text-2xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {category.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1 bg-brand-light text-primary text-sm rounded-full font-medium"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="hero" size="xl">
            View Full Catalog
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Products;
