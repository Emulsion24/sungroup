
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
  Download
} from "lucide-react";

// Import assets
import buildingExterior from "@/assets/building-exterior.jpg";
import broucherPdf from "@/assets/SUN ASHRAYA BROCHURE.pdf";
import GroundFloor from "@/assets/groundfloor.png";
import UpperFloor from"@/assets/1 and 3rd floor.png";

import Photo15 from "@/assets/15.jpg"
import Photo14 from "@/assets/14.jpg"
import Photo1 from "@/assets/1.jpg"
import Photo2 from "@/assets/2.jpg"
import Photo3 from "@/assets/3.jpg"
import Photo4 from "@/assets/4.jpg"
import Photo5 from "@/assets/5.jpg"
import Photo6 from "@/assets/6.jpg"
import Photo7 from "@/assets/7.jpg"
import Photo8 from "@/assets/8.jpg"
import Photo9 from "@/assets/9.jpg"
import Photo10 from "@/assets/10.jpg"
import Photo11 from "@/assets/11.jpg"
import Photo12 from "@/assets/12.jpg"
import Photo13 from "@/assets/13.jpg"
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
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  const handleVisit = () => {
    window.open(
      "https://www.google.com/maps/place/22%C2%B028'42.1%22N+88%C2%B021'57.3%22E/@22.4783557,88.3633453,17z/data=!3m1!4b1!4m4!3m3!8m2!3d22.4783557!4d88.3659202?entry=ttu&g_ep=EgoyMDI1MTAwNy4wIKXMDSoASAFQAw%3D%3D",
      "_blank"
    );
  };

  const handleBrochure = () => {
    window.open(broucherPdf, "_blank");
  };

  const handleCall = () => {
    window.location.href = "tel:+919230997919";
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
          Sun Parivar
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
          Sun Parivar is one of the leading real estate developers in Kolkata. Founded by Mr. Tushar S. Kamdar, the group has grown into a prominent conglomerate within the city's real estate landscape.
        </p>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-300 leading-relaxed mb-4 sm:mb-6 font-inter">
          Over the past few decades, Sun Parivar has developed a wide array of prestigious residential complexes, commercial buildings and office spaces—earning a reputation that truly reflects its name.
        </p>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-300 leading-relaxed mb-4 sm:mb-6 font-inter">
          Driven by a vision to create homes and workspaces for customers across all income segments, the group operates under several entities including Sun Pvt. Ltd., Sun Enterprise, Shankara Construction Pvt. Ltd., Unique Builder, Unique Bazaar and Maa Tara Construction.
        </p>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-300 leading-relaxed mb-4 sm:mb-6 font-inter">
          Together, they have successfully completed <span className="text-amber-400 font-semibold">150 real estate projects</span>, with over <span className="text-amber-400 font-semibold">50 additional developments</span> currently in the pipeline. This consistent performance has contributed to Sun Parivar's reputation for reliability, trust and excellence—positioning it as one of Kolkata's most respected real estate brands.
        </p>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-300 leading-relaxed font-inter">
          The group is also actively involved in joint venture developments across both residential and commercial sectors, continuing to expand its footprint and impact in the industry.
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
          At Sun Parivar, we believe that every stage of a construction project matters. Even the smallest overlooked detail can result in costly delays, frustration and unmet expectations.
        </p>
        <p className="text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed font-inter mb-2 sm:mb-3">
          That's why we are committed to maintaining the highest standards of attention, care and transparency throughout every phase—whether it's pre-construction planning, site visits, regulatory compliance or the construction process itself.
        </p>
        <p className="text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed font-inter">
          We prioritise clear communication and collaborative partnerships with our customers, ensuring each project is delivered with integrity, precision and shared trust.
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
          At Sun Parivar, we know great real estate isn't just about buildings—it's about people.
        </p>
        <p className="text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed font-inter mb-2 sm:mb-3">
          With <span className="text-amber-400 font-semibold">15+ years</span> of proven success, we're more than just developers—we're partners in your future.
        </p>
        <p className="text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed font-inter mb-2 sm:mb-3">
          We take time to understand your goals and collaborate closely to deliver thoughtful, lasting solutions for your home or office. Locally owned and community-driven, we put your vision at the heart of everything we build.
        </p>
        <p className="text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed font-inter">
          Let's create something meaningful—get in touch today.
        </p>
      </motion.div>

    </div>
  </div>
</section>


      {/* Video Section */}
      <section className="py-16 sm:py-24 md:py-32 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-transparent" />
        
        <div className="container mx-auto relative z-10">
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

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative max-w-6xl mx-auto"
          >
            <div className="relative aspect-video rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl shadow-amber-500/20 border border-amber-500/30">
              {!isVideoPlaying ? (
                <div className="relative w-full h-full group cursor-pointer" onClick={() => setIsVideoPlaying(true)}>
                  <img 
                    src={buildingExterior}
                    alt="Video thumbnail"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
                  
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="relative">
                      <div className="absolute inset-0 bg-amber-500 rounded-full blur-2xl opacity-50 group-hover:opacity-75 transition-opacity animate-pulse" />
                      <div className="relative w-20 h-20 sm:w-28 sm:h-28 bg-gradient-to-br from-amber-400 to-orange-600 rounded-full flex items-center justify-center shadow-2xl">
                        <Play className="w-8 h-8 sm:w-12 sm:h-12 text-white ml-1 sm:ml-2" fill="white" />
                      </div>
                    </div>
                  </motion.div>

                  <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 right-4 sm:right-8 text-white">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2 font-cormorant">Sun Ashraya Virtual Walkthrough</h3>
                    <p className="text-sm sm:text-base text-slate-200 font-inter">Click to experience luxury living</p>
                  </div>
                </div>
              ) : (
                <div className="w-full h-full bg-slate-900 flex items-center justify-center">
                  <div className="text-center px-4">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 border-4 border-amber-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
                    <p className="text-slate-400 font-inter text-sm sm:text-base">Your video would load here</p>
                    <p className="text-slate-500 text-xs sm:text-sm mt-2 font-inter">Replace with your video URL</p>
                  </div>
                </div>
              )}
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
              description="900 meters from Masterda Surya Sen Metro. 5 min walk from Regent Estate, Baghajatin."
              delay={0}
            />
            <FeatureCard
              icon={Home}
              title="Modern Amenities"
              description="Garden area on ground, Decorated rooftop, Gated Community."
              delay={0.1}
            />
            <FeatureCard
              icon={Sparkles}
              title="LIG Flats"
              description="HIG amenities for the price of LIG Flats."
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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 px-2 sm:px-4">
      {[
        Photo1, Photo2, Photo3, Photo4, Photo5, Photo6, Photo7, Photo8, 
        Photo9, Photo10, Photo11, Photo12, Photo13, Photo14, Photo15
      ].map((img, index) => (
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
                <p className="text-sm sm:text-base text-slate-300 font-inter">Spacious garden area and modern entrance</p>
              </div>
              <div className="p-4 sm:p-6 md:p-8">
                <img 
                  src={GroundFloor} 
                  alt="Ground floor plan"
                  className="w-full h-auto rounded-lg sm:rounded-xl shadow-lg"
                />
              </div>
            </motion.div>

            {/* Upper Floor Plan */}
           <motion.div
  initial={{ opacity: 0, x: 30 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  className="bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-sm rounded-3xl border border-slate-700/50 shadow-2xl overflow-hidden hover:border-amber-500/50 transition-all duration-300 max-w-6xl mx-auto my-8"
>
  <div className="p-6 md:p-8 bg-gradient-to-r from-amber-500/20 to-orange-600/20 border-b border-amber-500/30">
    <h3 className="text-2xl md:text-4xl font-bold text-white font-playfair mb-2 text-center md:text-left">
      1st to 3rd Floor Plan
    </h3>
    <p className="text-slate-300 font-inter text-sm md:text-base text-center md:text-left">
      Elegant rooftop with premium amenities
    </p>
  </div>
  <div className="p-6 md:p-8">
    <img
      src={UpperFloor}
      alt="Upper floor plan"
      className="w-full h-auto rounded-xl shadow-lg"
    />
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="flex items-start gap-4">
          <div className="bg-gradient-to-br from-amber-500 to-orange-600 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
            <Phone className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-lg md:text-xl font-bold text-white mb-2 font-cormorant">
              Phone
            </h3>
            <a
              href="tel:+919230997919"
              className="text-slate-300 hover:text-amber-400 transition-colors font-inter text-sm md:text-base"
            >
              +91 92309 97919
            </a>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="bg-gradient-to-br from-amber-500 to-orange-600 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
            <Mail className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-lg md:text-xl font-bold text-white mb-2 font-cormorant">
              Email
            </h3>
            <a
              href="mailto:info@sunashraya.com"
              className="text-slate-300 hover:text-amber-400 transition-colors font-inter text-sm md:text-base break-words"
            >
              info@sunashraya.com
            </a>
          </div>
        </div>

        <div className="flex items-start gap-4 md:col-span-2">
          <div className="bg-gradient-to-br from-amber-500 to-orange-600 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
            <MapPin className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-lg md:text-xl font-bold text-white mb-2 font-cormorant">
              Location
            </h3>
            <p className="text-slate-300 font-inter text-sm md:text-base">
              900 meters from Masterda Surya Sen Metro
              <br />
              5 min walk from Regent Estate, Baghajatin, Kolkata
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
        Sun Ashraya
      </span>
    </h3>
    <p className="text-slate-400 mb-4 font-inter text-sm md:text-base">
      A Sun Parivar Development
    </p>
    <p className="text-slate-500 text-xs md:text-sm font-inter mb-2">
      © 2025 Sun Parivar. All rights reserved.
    </p>
    <a
      className="text-slate-500 text-xs md:text-sm font-inter hover:text-amber-400 transition-colors"
      href="http://www.reachonind.com"
    >
      © Created by tanzxstudio by Reachon
    </a>
  </div>
</footer>

    </main>
  );
};

export default Index;