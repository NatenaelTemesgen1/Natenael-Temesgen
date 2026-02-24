import { motion } from 'framer-motion';
import { me } from '../data/config';
import { ArrowRight, Github, Linkedin, Twitter } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-[85vh] flex items-center justify-center pt-16 bg-white px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        
        {/* Left Side: Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-4 tracking-tight">
            Hi, I'm <span className="text-blue-600">{me.name}</span>
          </h1>
          
          {/* Long Description (FR-4 & User Update) */}
          <p className="text-base md:text-lg text-slate-600 mb-6 leading-relaxed max-w-xl">
            {me.description}
          </p>

          {/* Social Links */}
          <div className="flex gap-5 mb-8 text-slate-500">
            <a href={me.socials.github} target="_blank" className="hover:text-black transition-colors">
              <Github size={22} />
            </a>
            <a href={me.socials.linkedin} target="_blank" className="hover:text-blue-600 transition-colors">
              <Linkedin size={22} />
            </a>
            <a href={me.socials.twitter} target="_blank" className="hover:text-blue-400 transition-colors">
              <Twitter size={22} />
            </a>
          </div>

          <div className="flex items-center gap-4">
            <a 
              href="#projects" 
              className="group flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all shadow-md shadow-blue-100"
            >
              View Projects 
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
            </a>
          </div>
        </motion.div>

        {/* Right Side: Minimized Image Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative flex justify-center md:justify-end"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <div className="absolute inset-0 bg-blue-100 rounded-2xl rotate-3 -z-10"></div>
            <img 
              src={me.profileImage} 
              alt={me.name}
              className="w-full h-full object-cover rounded-2xl shadow-xl border-2 border-white"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;