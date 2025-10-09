import { BuildingModel3D } from "@/components/BuildingModel3D";
import { FeatureCard } from "@/components/FeatureCard";
import { ImageGallery } from "@/components/ImageGallery";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { 
  Building2, 
  Home, 
  Sparkles, 
  Car, 
  Shield, 
  Trees,
  Phone,
  Mail,
  MapPin
} from "lucide-react";

import buildingExterior from "@/assets/building-exterior.jpg";
import interiorLiving from "@/assets/interior-living.jpg";
import luxuryBathroom from "@/assets/luxury-bathroom.jpg";
import parkingFacility from "@/assets/parking-facility.jpg";

const Index = () => {
  return (
    <main className="min-h-screen bg-gradient-dark">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={buildingExterior} 
            alt="Luxury residential building exterior"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-overlay" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-gradient-luxury">Luxury Living</span>
              <br />
              <span className="text-foreground">Redefined</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Experience the pinnacle of modern architecture and sophisticated design
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="luxury" size="lg" className="text-lg px-8">
                <Phone className="mr-2" />
                Schedule a Tour
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 border-primary/50 hover:bg-primary/10">
                <Mail className="mr-2" />
                Get Brochure
              </Button>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
        >
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center p-2">
            <div className="w-1 h-3 bg-gradient-luxury rounded-full animate-pulse" />
          </div>
        </motion.div>
      </section>

      {/* 3D Building Model Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Interactive <span className="text-gradient-luxury">3D Model</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Explore the architectural excellence in stunning detail
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <BuildingModel3D />
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-card/30">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Premium <span className="text-gradient-luxury">Amenities</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Every detail crafted for your comfort and convenience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              icon={Building2}
              title="Modern Architecture"
              description="Contemporary design with stunning glass facades and elegant balconies"
              delay={0}
            />
            <FeatureCard
              icon={Home}
              title="Luxury Interiors"
              description="Spacious layouts with premium finishes and floor-to-ceiling windows"
              delay={0.1}
            />
            <FeatureCard
              icon={Sparkles}
              title="Designer Bathrooms"
              description="Spa-like experience with marble, rain showers, and gold fixtures"
              delay={0.2}
            />
            <FeatureCard
              icon={Car}
              title="Premium Parking"
              description="Secure underground parking with modern lighting and organization"
              delay={0.3}
            />
            <FeatureCard
              icon={Shield}
              title="24/7 Security"
              description="State-of-the-art security systems for your peace of mind"
              delay={0.4}
            />
            <FeatureCard
              icon={Trees}
              title="Landscaped Gardens"
              description="Beautifully designed outdoor spaces with lush greenery"
              delay={0.5}
            />
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Experience <span className="text-gradient-luxury">Excellence</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A visual journey through our stunning interiors and facilities
            </p>
          </motion.div>

          <ImageGallery
            images={[
              {
                src: interiorLiving,
                alt: "Luxury living room with city view",
                title: "Living Spaces"
              },
              {
                src: luxuryBathroom,
                alt: "Designer bathroom with marble and gold fixtures",
                title: "Luxury Bathrooms"
              },
              {
                src: parkingFacility,
                alt: "Modern parking facility",
                title: "Parking Facility"
              }
            ]}
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-card/30">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-effect rounded-2xl p-12 text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Make This <span className="text-gradient-luxury">Your Home</span>?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contact us today to schedule a private tour and discover the luxury lifestyle awaiting you
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="luxury" size="lg" className="text-lg px-8">
                <Phone className="mr-2" />
                Call Now
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 border-primary/50 hover:bg-primary/10">
                <MapPin className="mr-2" />
                Visit Site
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-border/50">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">
            © 2025 Luxury Residences. Crafted with excellence.
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Index;
