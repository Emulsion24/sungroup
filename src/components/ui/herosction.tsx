import { motion, useScroll, useTransform } from "framer-motion";
import { Phone, Download } from "lucide-react";
import buildingExterior from "@/assets/building-exterior.jpg";
import logo from "@/assets/logo.png"; // ✅ Add your logo image here

export default function HeroSection() {
  // Example scroll animation logic
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.7]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.05]);

  const handleCall = () => {
    window.location.href = "tel:+911234567890"; // 📞 Replace with your number
  };

  const handleBrochure = () => {
    window.open("/brochure.pdf", "_blank"); // 📄 Replace with your brochure path
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* ✅ Logo */}
      <div className="absolute top-6 left-6 z-20">
        <img
          src={logo}
          alt="Sun Privar Logo"
          className="w-28 h-auto object-contain drop-shadow-lg"
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
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center max-w-5xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="inline-block mb-6 px-6 py-2 bg-amber-500/20 backdrop-blur-sm border border-amber-500/50 rounded-full"
            >
              <span className="text-amber-400 font-inter font-medium tracking-wider text-sm uppercase">
                Sun Privar
              </span>
            </motion.div>

            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 leading-tight font-playfair">
              <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-orange-500 text-transparent bg-clip-text drop-shadow-2xl">
                Sun Ashraya
              </span>
            </h1>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-8 text-white font-mono tracking-wide">
              Discover Elegant <span className="italic font-normal">1 & 2 BHK</span> Residences
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl text-slate-200 mb-12 font-inter font-light leading-relaxed max-w-3xl mx-auto"
          >
            Nestled in the heart of <span className="font-semibold text-amber-400">Baghajatin</span>, 
            Sun Privar blends timeless architecture with modern comfort. 
            Enjoy premium living spaces designed to elevate your lifestyle.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            {/* Call Button */}
            <button
              onClick={handleCall}
              className="group relative px-10 py-5 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full text-white font-semibold text-lg shadow-2xl shadow-amber-500/50 hover:shadow-amber-500/80 transition-all duration-300 hover:scale-105 overflow-hidden font-inter"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" />
                Schedule a Tour
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>

            {/* Brochure Button */}
            <button
              onClick={handleBrochure}
              className="px-10 py-5 bg-white/10 backdrop-blur-md border-2 border-white/30 rounded-full text-white font-semibold text-lg hover:bg-white/20 hover:border-white/50 transition-all duration-300 hover:scale-105 shadow-xl flex items-center justify-center gap-2 font-inter"
            >
              <Download className="w-5 h-5" />
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
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-8 h-14 border-2 border-amber-400 rounded-full flex justify-center p-2"
        >
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-2 h-4 bg-gradient-to-b from-amber-400 to-orange-600 rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
