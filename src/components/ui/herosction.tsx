import { motion, useScroll, useTransform } from "framer-motion";
import { Phone, Download } from "lucide-react";
import buildingExterior from "@/assets/ELEVATION.jpeg";
import logo from "@/assets/sungroup-logo.png";
import brochure from "@/assets/SUN ASHRAYA BROCHURE.pdf";

export default function HeroSection() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.7]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.05]);

  const handleCall = () => window.location.href = "tel:8334061234";
  const handleBrochure = () => window.open(brochure, "_blank");

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6">
      {/* Logo */}
      <div className="absolute top-4 sm:top-6 left-4 sm:left-6 z-20">
        <img
          src={logo}
          alt="Sun Group Logo"
          className="w-20 sm:w-28 h-auto object-contain drop-shadow-lg"
        />
      </div>

      {/* Background Image with Overlay */}
      <motion.div style={{ opacity, scale }} className="absolute inset-0">
        <img
          src={buildingExterior}
          alt="Luxury residential building exterior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />
      </motion.div>

      {/* Hero Content */}
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center max-w-4xl sm:max-w-5xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-6 sm:mb-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="inline-block mb-4 sm:mb-6 px-4 sm:px-6 py-1 sm:py-2 bg-amber-500/20 backdrop-blur-sm border border-amber-500/50 rounded-full"
            >
              <span className="text-amber-400 font-inter font-medium tracking-wider text-xs sm:text-sm uppercase">
                SUN GROUP Presents
              </span>
            </motion.div>
            <div className="mt-2 sm:mt-3">
  <span className="text-[10px] sm:text-xs text-slate-300 font-extrabold font-inter tracking-wide bg-white/10 px-3 py-1 rounded-full border border-white/20">
    WBRERA/P/NOR/2025/002819
  </span>
</div>


            <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold mb-4 sm:mb-6 leading-snug sm:leading-tight font-playfair">
              <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-orange-500 text-transparent bg-clip-text drop-shadow-2xl">
                SUN GRAND BASUMATI
              </span>
            </h1>

            <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-light mb-6 sm:mb-8 text-white font-mono tracking-wide">
             Discover elegant<span className="italic font-normal"> 2 & 3 BHK  </span> luxury residences 
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-200 mb-8 sm:mb-12 font-inter font-light leading-relaxed max-w-3xl mx-auto"
          >
            A G+7 premium landmark by Sun Group. <span className="font-semibold text-amber-400">Chingrighata</span>, 
            The project blends timeless architecture with modern sophistication, offering spacious layouts, refined interiors, and thoughtfully designed amenities. Every detail is crafted to elevate your lifestyle and deliver unmatched comfort, style, and convenience.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center"
          >
            {/* Call Button */}
            <button
              onClick={handleCall}
              className="group relative px-6 sm:px-10 py-3 sm:py-5 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full text-white font-semibold text-sm sm:text-lg shadow-2xl shadow-amber-500/50 hover:shadow-amber-500/80 transition-all duration-300 hover:scale-105 overflow-hidden font-inter"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                Schedule a Tour
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>

            {/* Brochure Button */}
            <button
              onClick={handleBrochure}
              className="px-6 sm:px-10 py-3 sm:py-5 bg-white/10 backdrop-blur-md border-2 border-white/30 rounded-full text-white font-semibold text-sm sm:text-lg hover:bg-white/20 hover:border-white/50 transition-all duration-300 hover:scale-105 shadow-xl flex items-center justify-center gap-2 font-inter"
            >
              <Download className="w-4 h-4 sm:w-5 sm:h-5" />
              Download Brochure
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 sm:w-8 h-12 sm:h-14 border-2 border-amber-400 rounded-full flex justify-center p-1"
        >
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 sm:w-2 h-3 sm:h-4 bg-gradient-to-b from-amber-400 to-orange-600 rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
