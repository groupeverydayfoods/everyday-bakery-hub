import { Truck, ShieldCheck, Users, Globe } from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Reliable Distribution",
    description: "Consistent, on-time delivery across Canada and the USA with temperature-controlled logistics.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    description: "Rigorous quality standards ensuring every product meets food safety requirements.",
  },
  {
    icon: Users,
    title: "Partnership Focus",
    description: "We build lasting relationships with both suppliers and buyers for mutual success.",
  },
  {
    icon: Globe,
    title: "North American Reach",
    description: "Strategic presence enabling efficient service to retailers across the continent.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 lg:py-32 bg-gradient-hero">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            About Us
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
            Connecting Quality Bakeries with Growing Markets
          </h2>
          <p className="text-lg text-muted-foreground">
            Everyday Foods Group serves as the vital link between artisan bakeries 
            and the retail shelves and foodservice kitchens where quality products 
            are in demand. Whether supplying directly or brokering partnerships, 
            we make it easier to bring exceptional baked goods to consumers.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="bg-gradient-card p-8 rounded-2xl shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 bg-gradient-warm rounded-xl flex items-center justify-center mb-6">
                <feature.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {[
            { value: "15+", label: "Product Categories" },
            { value: "2", label: "Countries Served" },
            { value: "100+", label: "Partner Retailers" },
            { value: "20+", label: "Years Experience" },
          ].map((stat) => (
            <div key={stat.label} className="p-6">
              <div className="font-display text-4xl lg:text-5xl font-bold text-gradient mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
