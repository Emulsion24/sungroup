
import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  Building2, 
  Home, 
  Sparkles, 
  Car, 
  Phone,
  Mail,
  MapPin,
  Play,
  X,
  Download,
  Globe2Icon
} from "lucide-react";

// Import assets
import buildingExterior from "@/assets/building-exterior.jpg";
import broucherPdf from "@/assets/SUN ASHRAYA BROCHURE.pdf";
import GroundFloor from "@/assets/132 GROUND.jpg";
import to7 from"@/assets/1to7.jpg";
import lastfloor from"@/assets/7TH  FL.-CANALSOUTH.jpg";
import demoVideo from "@/assets/132 Canal South Road Reel.mp4"
import Photo10 from "@/assets/10.png"
import Photo11 from "@/assets/11.png"
import Photo12 from "@/assets/12.png"
import Photo13 from "@/assets/13.png"
import Photo14 from "@/assets/14.png"
import Photo15 from "@/assets/15.png"
import Photo16 from "@/assets/16.png"
import Photo17 from "@/assets/17.png"
import Photo18 from "@/assets/18.png"
import Photo19 from "@/assets/19.png"
import Photo20 from "@/assets/20.png"
import Photo21 from "@/assets/21.png"
import Photo22 from "@/assets/22.png"
import Photo23 from "@/assets/23.png"
import Photo24 from "@/assets/24.png"
import Photo25 from "@/assets/25.png"
import Photo26 from "@/assets/26.png"
import Photo27 from "@/assets/27.png"
import Photo28 from "@/assets/28.png"
import Photo29 from "@/assets/1922.png"
import Photo30 from "@/assets/30.png"
import Photo31 from "@/assets/31.png"
import Photo32 from "@/assets/32.png"
import Photo33 from "@/assets/33.png"


import HeroSection from "@/components/ui/herosction";

const FeatureCard = ({ icon: Icon, title, description, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    whileHover={{ y: -8, scale: 1.02 }}
    className="bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-sm p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border border-slate-700/50 hover:border-amber-500/50 transition-all duration-300 shadow-xl hover:shadow-amber-500/20"
  >
    <div className="bg-gradient-to-br from-amber-500 to-orange-600 w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg">
      <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
    </div>
    <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-white font-cormorant">{title}</h3>
    <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-inter">{description}</p>
  </motion.div>
);

const ImageGallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
        {images.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            onClick={() => setSelectedImage(image)}
            className="relative overflow-hidden rounded-xl sm:rounded-2xl cursor-pointer group shadow-2xl"
          >
            <div className="aspect-[4/3] bg-slate-800 overflow-hidden">
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-6">
                <h3 className="text-white text-base sm:text-xl font-bold font-cormorant">{image.title}</h3>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 cursor-pointer"
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(null);
            }}
            className="absolute top-2 right-2 sm:top-4 sm:right-4 text-white hover:text-amber-500 transition-colors z-10 p-2"
          >
            <X className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>
          <motion.div 
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={selectedImage.src} 
              alt={selectedImage.alt}
              className="w-full h-auto rounded-xl sm:rounded-2xl"
            />
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

const Index = () => {
 
  const { scrollYProgress } = useScroll();
  

  const handleVisit = () => {
    window.open(
      "https://www.google.com/maps/place/132,+Canal+S+Rd,+Chingrighata,+Metropolitan+Co-Operative+Housing+Society+Limited,+Dhapa,+Kolkata,+West+Bengal+700107/@22.5584278,88.4051899,17z/data=!3m1!4b1!4m6!3m5!1s0x3a02742bdf861cef:0x29bb0cf51b9b6114!8m2!3d22.5584278!4d88.4051899!16s%2Fg%2F11ghds6zmg?entry=ttu&g_ep=EgoyMDI1MTExMi4wIKXMDSoASAFQAw%3D%3D",
      "_blank"
    );
  };

  const handleBrochure = () => {
    window.open(broucherPdf, "_blank");
  };

  const handleCall = () => {
    window.location.href = "tel:+919830361555";
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=Cinzel:wght@400;500;600;700;800&family=Playfair+Display:wght@400;500;600;700;800;900&family=Inter:wght@300;400;500;600&display=swap');
        
        .font-cormorant {
          font-family: 'Cormorant Garamond', serif;
        }
        .font-cinzel {
          font-family: 'Cinzel', serif;
        }
        .font-playfair {
          font-family: 'Playfair Display', serif;
        }
        .font-inter {
          font-family: 'Inter', sans-serif;
        }
      `}</style>

      {/* Hero Section with Banner */}
      <HeroSection/>

      {/* About Us Section */}
     <section className="py-16 sm:py-24 md:py-32 px-4 relative overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/30 to-transparent" />
  
  <div className="container mx-auto relative z-10 max-w-5xl">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-center mb-12 sm:mb-16 md:mb-20 px-2 sm:px-4"
    >
      <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 font-playfair leading-snug">
        About{" "}
        <span className="bg-gradient-to-r from-amber-400 to-orange-600 text-transparent bg-clip-text">
        SUN GROUP
        </span>
      </h2>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="px-2 sm:px-4"
    >
    <div className="bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-sm p-6 sm:p-10 md:p-16 rounded-2xl sm:rounded-3xl border border-slate-700/50 shadow-2xl">
  <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-300 leading-relaxed mb-4 sm:mb-6 font-inter">
    Sun Group is one of Kolkata’s most distinguished and fast-growing conglomerates, with a strong presence in Real Estate, Arms, Security Services, Private Finance, Hospitality, and the FMCG sector. The Group continues to progress steadily under the visionary leadership of its Managing Director and Chairman, <span className="text-amber-400 font-semibold">Mr. Jay S. Kamdar</span>.
  </p>

  <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-300 leading-relaxed mb-4 sm:mb-6 font-inter">
    “Innovation and customer delight have been the pillars of our success for more than two decades,” says Mr. Kamdar—words that reflect the foundation upon which the Group has been built. His strategic thinking and commitment to meaningful, forward-looking innovation have shaped a brand that evolves continuously to meet and exceed customer expectations.
  </p>

  <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-300 leading-relaxed mb-4 sm:mb-6 font-inter">
    At the heart of Sun Group lies a three-fold business philosophy centered around loyalty, transparency and long-term relationships. These principles have enabled the brand to earn deep trust and goodwill across industries over the years.
  </p>

  <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-300 leading-relaxed mb-4 sm:mb-6 font-inter">
    The journey began with <span className="text-amber-400 font-semibold">Sun Construction</span>, founded 20 years ago. With more than <span className="text-amber-400 font-semibold">200 completed real-estate projects</span>, the company has emerged as one of the most respected developers in Kolkata and West Bengal. To further support its real-estate operations, the Group expanded by establishing <span className="text-amber-400 font-semibold">Sun Traders</span>, a specialized company dealing in raw construction materials.
  </p>

  <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-300 leading-relaxed font-inter">
    After achieving remarkable success in real estate, Mr. Jay S. Kamdar continued to push boundaries—diversifying into new sectors and unlocking fresh opportunities that have since strengthened Sun Group’s position as a future-ready, multi-industry powerhouse.
  </p>
</div>

    </motion.div>
  </div>
</section>


<section className="py-16 sm:py-24 md:py-32 px-4 relative">
  <div className="container mx-auto relative z-10 max-w-7xl">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
      
      {/* Our Mission */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-sm p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl border border-slate-700/50 shadow-2xl hover:border-amber-500/50 transition-all duration-300"
      >
        <div className="bg-gradient-to-br from-amber-500 to-orange-600 w-14 h-14 sm:w-16 sm:h-16 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg">
          <Building2 className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
        </div>
     <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-white font-playfair leading-snug">
  Our <span className="bg-gradient-to-r from-amber-400 to-orange-600 text-transparent bg-clip-text">Mission</span>
</h3>

<p className="text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed font-inter mb-2 sm:mb-3">
  Our mission is to consistently enhance the lives of our customers through thoughtful innovation and uncompromising quality.
</p>

<p className="text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed font-inter mb-2 sm:mb-3">
  Sun Group is committed to developing world-class real estate, empowering communities with secure and dependable services, supporting businesses through robust financial solutions, and enriching everyday life through hospitality and FMCG offerings.
</p>

<p className="text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed font-inter">
  Guided by strong ethics and a customer-first mindset, we strive to create lasting impact and long-term value for our customers, partners and all stakeholders.
</p>

      </motion.div>

      {/* Our Vision */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-sm p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl border border-slate-700/50 shadow-2xl hover:border-amber-500/50 transition-all duration-300"
      >
        <div className="bg-gradient-to-br from-amber-500 to-orange-600 w-14 h-14 sm:w-16 sm:h-16 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg">
          <Sparkles className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
        </div>
       <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-white font-playfair leading-snug">
  Our <span className="bg-gradient-to-r from-amber-400 to-orange-600 text-transparent bg-clip-text">Vision</span>
</h3>

<p className="text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed font-inter mb-2 sm:mb-3">
  Sun Group envisions emerging as a multi-sector leader defined by innovation-led growth and enduring customer trust.
</p>

<p className="text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed font-inter mb-2 sm:mb-3">
  Our goal is to create sustainable value across <span className="text-amber-400 font-semibold">Real Estate, Security, Arms, Finance, Hospitality, and FMCG</span> by setting new benchmarks in quality, transparency, and reliability.
</p>

<p className="text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed font-inter mb-2 sm:mb-3">
  We aspire to build a future where every Sun Group initiative contributes to a safer, smarter, and more progressive society.
</p>

<p className="text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed font-inter">
  Our vision is simple yet powerful—create impact, inspire growth, and elevate the lives we touch.
</p>

      </motion.div>

    </div>
  </div>
</section>


      {/* Video Section */}
    <section className="py-16 sm:py-24 md:py-32 px-4 relative overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-transparent" />

  <div className="container mx-auto relative z-10">
    {/* Heading */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-center mb-10 sm:mb-16"
    >
      <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 font-playfair px-4">
        Watch Our <span className="bg-gradient-to-r from-amber-400 to-orange-600 text-transparent bg-clip-text">Virtual Tour</span>
      </h2>
      <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto font-inter font-light px-4">
        Explore every corner of luxury in our immersive video presentation
      </p>
    </motion.div>

    {/* Video Container */}
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative max-w-6xl mx-auto"
    >
      <div className="relative aspect-video rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl shadow-amber-500/20 border border-amber-500/30">
        <video
          src={demoVideo}
          className="w-full h-full object-cover rounded-2xl sm:rounded-3xl"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
    </motion.div>
  </div>
</section>


      {/* Features Section */}
      <section className="py-16 sm:py-24 md:py-32 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/30 to-transparent" />
        
        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16 md:mb-20"
          >
            <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 font-playfair px-4">
              Premium <span className="bg-gradient-to-r from-amber-400 to-orange-600 text-transparent bg-clip-text">Amenities</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto font-inter font-light px-4">
              Every detail meticulously crafted for your comfort and convenience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            <FeatureCard
              icon={Building2}
              title="Prime Location"
              description="Seamless access to daily conveniences, transport, and essential lifestyle destinations—everything you need close at hand."
              delay={0}
            />
            <FeatureCard
              icon={Home}
              title="Luxurious Hi-Fi Amenities"
              description="A collection of modern, stylish, and comfort-driven features designed to elevate your everyday living experience."
              delay={0.1}
            />
            <FeatureCard
              icon={Sparkles}
              title="HIG-Standard Facilities"
              description="Superior construction quality, premium fittings, and thoughtfully planned spaces that meet high-income residential standards."
              delay={0.2}
            />
            <FeatureCard
              icon={Car}
              title="Much More"
              description="Covered car parking, 24 hours water and electricity supply."
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* Gallery Section */}
    <section className="py-16 sm:py-24 md:py-32 px-4">
  <div className="container mx-auto max-w-7xl">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-center mb-12 sm:mb-16 md:mb-20"
    >
      <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 font-playfair px-4 leading-snug">
        Experience{" "}
        <span className="bg-gradient-to-r from-amber-400 to-orange-600 text-transparent bg-clip-text">
          Excellence
        </span>
      </h2>
      <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto font-inter font-light px-4 leading-relaxed">
        A visual journey through our stunning interiors and world-class facilities
      </p>
    </motion.div>

    {/* Image Gallery */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-6 px-2 sm:px-4">
      {[
  Photo10, Photo11, Photo12, Photo13, Photo14, Photo15, Photo16, Photo17,
  Photo18, Photo19, Photo20, Photo21, Photo22, Photo23, Photo24, Photo25,
  Photo26, Photo27, Photo28, Photo29, Photo30, Photo31, Photo32, Photo33,

].map((img, index) =>(
        <div key={index} className="overflow-hidden rounded-xl shadow-lg">
          <img
            src={img}
            alt={`Gallery Image ${index + 1}`}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Floor Plans Section */}
  <section className="py-16 sm:py-24 md:py-32 px-4 relative overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/30 to-transparent" />

  <div className="container mx-auto relative z-10">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-center mb-12 sm:mb-16 md:mb-20"
    >
      <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 font-playfair px-4">
        Floor <span className="bg-gradient-to-r from-amber-400 to-orange-600 text-transparent bg-clip-text">Plans</span>
      </h2>
      <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto font-inter font-light px-4">
        Thoughtfully designed spaces for modern living
      </p>
    </motion.div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 max-w-7xl mx-auto">

      {/* Ground Floor Plan */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl border border-slate-700/50 shadow-2xl overflow-hidden hover:border-amber-500/50 transition-all duration-300"
      >
        <div className="p-6 sm:p-8 bg-gradient-to-r from-amber-500/20 to-orange-600/20 border-b border-amber-500/30">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white font-playfair mb-1 sm:mb-2">
            Ground Floor Plan
          </h3>
          <p className="text-sm sm:text-base text-slate-300 font-inter">Main entry, garden area & amenities</p>
        </div>
        <div className="p-4 sm:p-6 md:p-8">
          <img 
            src={GroundFloor} 
            alt="Ground Floor Plan"
            className="w-full h-auto rounded-lg sm:rounded-xl shadow-lg"
          />
        </div>
      </motion.div>

      {/* 1st to 6th Floor Plan */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-sm rounded-3xl border border-slate-700/50 shadow-2xl overflow-hidden hover:border-amber-500/50 transition-all duration-300"
      >
        <div className="p-6 md:p-8 bg-gradient-to-r from-amber-500/20 to-orange-600/20 border-b border-amber-500/30">
          <h3 className="text-2xl md:text-4xl font-bold text-white font-playfair mb-2">
            1st to 6th Floor Plan
          </h3>
          <p className="text-sm md:text-base text-slate-300 font-inter">
            Residential floors with premium layout design
          </p>
        </div>
        <div className="p-6 md:p-8">
         <div className="p-6 md:p-8 space-y-8">

  {/* Floor Plan Image */}
  <img
    src={to7}
    alt="1st to 6th Floor Plan"
    className="w-full h-auto rounded-xl shadow-lg"
  />

  {/* Floor Data Table */}
  <div className="overflow-x-auto">
    <table className="w-full text-left border-collapse font-inter">
      <thead>
        <tr className="bg-slate-800/60 text-amber-300 text-sm md:text-base">
          <th className="py-3 px-4 border border-slate-700/50">Flat</th>
          <th className="py-3 px-4 border border-slate-700/50">Carpet Area</th>
          <th className="py-3 px-4 border border-slate-700/50">Built-up Area</th>
          <th className="py-3 px-4 border border-slate-700/50">Super Built-up Area</th>
        </tr>
      </thead>

      <tbody className="text-slate-300 text-sm md:text-base">

        <tr className="hover:bg-slate-800/40 transition">
          <td className="py-3 px-4 border border-slate-700/50 font-medium">A (3BHK)</td>
          <td className="py-3 px-4 border border-slate-700/50">864 sq.ft.</td>
          <td className="py-3 px-4 border border-slate-700/50">1160 sq.ft.</td>
          <td className="py-3 px-4 border border-slate-700/50">1450 sq.ft.</td>
        </tr>

        <tr className="hover:bg-slate-800/40 transition">
          <td className="py-3 px-4 border border-slate-700/50 font-medium">B (3BHK)</td>
          <td className="py-3 px-4 border border-slate-700/50">966 sq.ft.</td>
          <td className="py-3 px-4 border border-slate-700/50">1267 sq.ft.</td>
          <td className="py-3 px-4 border border-slate-700/50">1584 sq.ft.</td>
        </tr>

        <tr className="hover:bg-slate-800/40 transition">
          <td className="py-3 px-4 border border-slate-700/50 font-medium">C (2BHK)</td>
          <td className="py-3 px-4 border border-slate-700/50">722 sq.ft.</td>
          <td className="py-3 px-4 border border-slate-700/50">926 sq.ft.</td>
          <td className="py-3 px-4 border border-slate-700/50">1158 sq.ft.</td>
        </tr>

        <tr className="hover:bg-slate-800/40 transition">
          <td className="py-3 px-4 border border-slate-700/50 font-medium">D (2BHK)</td>
          <td className="py-3 px-4 border border-slate-700/50">717 sq.ft.</td>
          <td className="py-3 px-4 border border-slate-700/50">920 sq.ft.</td>
          <td className="py-3 px-4 border border-slate-700/50">1150 sq.ft.</td>
        </tr>

      </tbody>
    </table>
  </div>

</div>

        </div>
      </motion.div>

      {/* 7th Floor Plan */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-sm rounded-3xl border border-slate-700/50 shadow-2xl overflow-hidden hover:border-amber-500/50 transition-all duration-300 col-span-1 lg:col-span-2 max-w-4xl mx-auto"
      >
        <div className="p-6 md:p-8 bg-gradient-to-r from-amber-500/20 to-orange-600/20 border-b border-amber-500/30">
          <h3 className="text-2xl md:text-4xl font-bold text-white font-playfair mb-2 text-center">
            7th Floor Plan
          </h3>
          <p className="text-sm md:text-base text-slate-300 font-inter text-center">
            Exclusive top-floor layout with enhanced privacy & utility spaces
          </p>
        </div>
        <div className="p-6 md:p-8">
       <div className="p-6 md:p-8 space-y-8">

  {/* Floor Plan Image */}
  <img
    src={lastfloor}
    alt="7th Floor Plan"
    className="w-full h-auto rounded-xl shadow-lg"
  />

  {/* Table Section */}
  <div className="overflow-x-auto">
    <table className="w-full text-left border-collapse font-inter">
      <thead>
        <tr className="bg-slate-800/60 text-amber-300 text-sm md:text-base">
          <th className="py-3 px-4 border border-slate-700/50">Flat</th>
          <th className="py-3 px-4 border border-slate-700/50">Carpet Area</th>
          <th className="py-3 px-4 border border-slate-700/50">Built-up Area</th>
          <th className="py-3 px-4 border border-slate-700/50">Super Built-up Area</th>
        </tr>
      </thead>
      
      <tbody className="text-slate-300 text-sm md:text-base">

        <tr className="hover:bg-slate-800/40 transition">
          <td className="py-3 px-4 border border-slate-700/50 font-medium">D (2BHK)</td>
          <td className="py-3 px-4 border border-slate-700/50">717 sq.ft.</td>
          <td className="py-3 px-4 border border-slate-700/50">921 sq.ft.</td>
          <td className="py-3 px-4 border border-slate-700/50">1151 sq.ft.</td>
        </tr>

        <tr className="hover:bg-slate-800/40 transition">
          <td className="py-3 px-4 border border-slate-700/50 font-medium">B (3BHK)</td>
          <td className="py-3 px-4 border border-slate-700/50">966 sq.ft.</td>
          <td className="py-3 px-4 border border-slate-700/50">1269 sq.ft.</td>
          <td className="py-3 px-4 border border-slate-700/50">1586 sq.ft.</td>
        </tr>

        <tr className="hover:bg-slate-800/40 transition">
          <td className="py-3 px-4 border border-slate-700/50 font-medium">C (2BHK)</td>
          <td className="py-3 px-4 border border-slate-700/50">722 sq.ft.</td>
          <td className="py-3 px-4 border border-slate-700/50">927 sq.ft.</td>
          <td className="py-3 px-4 border border-slate-700/50">1159 sq.ft.</td>
        </tr>

        <tr className="hover:bg-slate-800/40 transition">
          <td className="py-3 px-4 border border-slate-700/50 font-medium">E (3BHK)</td>
          <td className="py-3 px-4 border border-slate-700/50">864 sq.ft.</td>
          <td className="py-3 px-4 border border-slate-700/50">1156 sq.ft.</td>
          <td className="py-3 px-4 border border-slate-700/50">1445 sq.ft.</td>
        </tr>

      </tbody>
    </table>
  </div>

</div>

        </div>
      </motion.div>

    </div>
  </div>
</section>


{/* Contact Section */}
<section className="py-20 px-4 relative">
  <div className="container mx-auto max-w-5xl">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-center mb-16"
    >
      <h2 className="text-4xl md:text-6xl font-bold mb-6 font-playfair leading-tight">
        Get in{" "}
        <span className="bg-gradient-to-r from-amber-400 to-orange-600 text-transparent bg-clip-text">
          Touch
        </span>
      </h2>
      <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto font-inter font-light">
        Schedule your private tour and discover your dream home today
      </p>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-sm p-6 md:p-12 rounded-3xl border border-slate-700/50 shadow-2xl"
    >
<div className="grid grid-cols-1 sm:grid-cols-2 gap-12 lg:gap-16 mb-16">

  {/* Phone */}
  <div className="flex items-start gap-6">
    <div className="bg-gradient-to-br from-amber-500 to-orange-600 w-14 h-14 rounded-2xl flex items-center justify-center shadow-xl">
      <Phone className="w-7 h-7 text-white" />
    </div>
    <div className="space-y-1.5">
      <h3 className="text-xl md:text-2xl font-bold text-white font-cormorant">
        Phone
      </h3>
      <p className="text-slate-300 font-inter text-base leading-relaxed">
        +91 83340 61234 || +91 98303 61555
      </p>
    </div>
  </div>

  {/* Email */}
  <div className="flex items-start gap-6">
    <div className="bg-gradient-to-br from-amber-500 to-orange-600 w-14 h-14 rounded-2xl flex items-center justify-center shadow-xl">
      <Mail className="w-7 h-7 text-white" />
    </div>
    <div className="space-y-1.5">
      <h3 className="text-xl md:text-2xl font-bold text-white font-cormorant">
        Email
      </h3>
      <a
        href="mailto:info@sunconstruction.in"
        className="text-slate-300 hover:text-amber-400 transition-colors font-inter text-base break-words leading-relaxed"
      >
        info@sunconstruction.in
      </a>
    </div>
  </div>

  {/* Website */}
  <div className="flex items-start gap-6">
    <div className="bg-gradient-to-br from-amber-500 to-orange-600 w-14 h-14 rounded-2xl flex items-center justify-center shadow-xl">
      <Globe2Icon className="w-7 h-7 text-white" />
    </div>
    <div className="space-y-1.5">
      <h3 className="text-xl md:text-2xl font-bold text-white font-cormorant">
        Website
      </h3>
      <a
        href="https://www.sunconstruction.in"
        target="_blank"
        className="text-slate-300 hover:text-amber-400 transition-colors font-inter text-base break-words leading-relaxed"
      >
        www.sunconstruction.in
      </a>
    </div>
  </div>

  {/* Site Location */}
  <div className="flex items-start gap-6 sm:col-span-2">
    <div className="bg-gradient-to-br from-amber-500 to-orange-600 w-14 h-14 rounded-2xl flex items-center justify-center shadow-xl">
      <MapPin className="w-7 h-7 text-white" />
    </div>
    <div className="space-y-1.5">
      <h3 className="text-xl md:text-2xl font-bold text-white font-cormorant">
        Site Location
      </h3>
      <p className="text-slate-300 font-inter text-base leading-relaxed">
        132, Canal South Road, Kolkata – 700010
      </p>
    </div>
  </div>

  {/* Office Location */}
  <div className="flex items-start gap-6 sm:col-span-2">
    <div className="bg-gradient-to-br from-amber-500 to-orange-600 w-14 h-14 rounded-2xl flex items-center justify-center shadow-xl">
      <MapPin className="w-7 h-7 text-white" />
    </div>
    <div className="space-y-1.5">
      <h3 className="text-xl md:text-2xl font-bold text-white font-cormorant">
        Office
      </h3>
      <p className="text-slate-300 font-inter text-base leading-relaxed">
        21/4, Ashwini Dutta Road, Kolkata – 700002
      </p>
    </div>
  </div>

</div>



      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={handleCall}
          className="flex-1 group relative px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-amber-500 to-orange-600 rounded-xl text-white font-semibold shadow-2xl shadow-amber-500/50 hover:shadow-amber-500/80 transition-all duration-300 hover:scale-105 overflow-hidden font-inter text-sm md:text-base"
        >
          <span className="relative z-10 flex items-center justify-center gap-2">
            <Phone className="w-5 h-5" />
            Call Now
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </button>

        <button
          onClick={handleVisit}
          className="flex-1 px-6 py-3 md:px-8 md:py-4 bg-white/10 backdrop-blur-md border-2 border-white/30 rounded-xl text-white font-semibold hover:bg-white/20 hover:border-white/50 transition-all duration-300 hover:scale-105 shadow-xl flex items-center justify-center gap-2 font-inter text-sm md:text-base"
        >
          <MapPin className="w-5 h-5" />
          Visit Us
        </button>
      </div>
    </motion.div>
  </div>
</section>

{/* Footer */}
<footer className="py-10 px-4 border-t border-slate-800 text-center">
  <div className="container mx-auto max-w-4xl">
    <h3 className="text-2xl md:text-3xl font-bold mb-4 font-playfair">
      <span className="bg-gradient-to-r from-amber-400 to-orange-600 text-transparent bg-clip-text">
      SUN GRAND BASUMATI
      </span>
    </h3>
    <p className="text-slate-400 mb-4 font-inter text-sm md:text-base">
      A Sun Group Development
    </p>
    <p className="text-slate-500 text-xs md:text-sm font-inter mb-2">
      © 2025 Sun Group. All rights reserved.
    </p>
    <a
      className="text-slate-500 text-xs md:text-sm font-inter hover:text-amber-400 transition-colors"
      href="http://www.reachonind.com"
    >
      © Designed by tanzxstudio by Reachon
    </a>
  </div>
</footer>

    </main>
  );
};

export default Index;