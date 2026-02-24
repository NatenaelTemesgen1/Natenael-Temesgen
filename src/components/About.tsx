import { motion } from 'framer-motion';
import { Download, Code2, Database, Rocket, Target } from 'lucide-react';
import { me } from '../data/config';

const About = () => {
  return (
    <section id="about" className="py-24 bg-slate-50 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">💻 About Me</h2>
          <div className="h-1.5 w-20 bg-blue-600 rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Column: The Story & CV */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-slate-700 leading-relaxed">
              I am <span className="font-bold text-slate-900">{me.name}</span>, a dedicated and growth-driven 
              Frontend Web Developer passionate about building modern, responsive, and user-friendly web applications.
            </p>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 space-y-4">
              <div className="flex items-center gap-3 text-blue-600 font-bold">
                <Target size={20} />
                <h3>Current Focus: Frontend Development</h3>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                My primary focus is frontend development, where I specialize in building interactive and visually appealing 
                user interfaces using HTML5, CSS3, Tailwind CSS, JavaScript (ES6+), React.js, and TypeScript. 
                I prioritize clean code, performance, and user-centered design.
              </p>
            </div>

            <div className="pt-4">
              <a 
                href={me.cvLink} 
                download="Natenael_Temesgen_CV.pdf"
                className="inline-flex items-center gap-3 px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-black transition-all shadow-lg shadow-slate-200"
              >
                <Download size={20} /> Download CV
              </a>
            </div>
          </motion.div>

          {/* Right Column: The Roadmap */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="relative pl-8 border-l-2 border-blue-200 space-y-10">
              
              {/* Future Goal Section */}
              <div className="relative">
                <div className="absolute -left-10 top-0 bg-blue-600 p-2 rounded-full text-white">
                  <Rocket size={16} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">🚀 Future Goal: Full-Stack Developer</h3>
                <p className="text-slate-600 text-sm">
                  Strategically planning to expand into backend development to design, develop, and deploy 
                  complete web systems independently.
                </p>
              </div>

              {/* Backend Roadmap */}
              <div className="grid sm:grid-cols-2 gap-6 pt-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-slate-900 font-bold">
                    <Code2 size={18} className="text-blue-600" />
                    <h4>Backend & APIs</h4>
                  </div>
                  <ul className="text-sm text-slate-500 space-y-1 list-disc list-inside">
                    <li>Node.js & Express.js</li>
                    <li>RESTful API Design</li>
                    <li>JWT Authentication</li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-slate-900 font-bold">
                    <Database size={18} className="text-blue-600" />
                    <h4>Databases & DevOps</h4>
                  </div>
                  <ul className="text-sm text-slate-500 space-y-1 list-disc list-inside">
                    <li>MongoDB & PostgreSQL</li>
                    <li>Vercel & Render</li>
                    <li>CI/CD Basics</li>
                  </ul>
                </div>
              </div>

              {/* Mindset */}
              <div className="bg-blue-600 p-6 rounded-2xl text-white">
                <h4 className="font-bold mb-2 flex items-center gap-2">🌱 Mindset & Growth</h4>
                <p className="text-sm opacity-90 leading-relaxed">
                  I believe in continuous learning and building real-world projects. My long-term goal is to 
                  transform complex ideas into impactful digital solutions.
                </p>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;