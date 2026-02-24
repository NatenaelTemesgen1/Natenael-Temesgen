import { motion } from 'framer-motion';
import { skillCategories } from '../data/skills';
import { Code2, Server, Laptop, Settings } from 'lucide-react';

const Skills = () => {
  return (
    // Changed pb-24 to pb-0 to eliminate the bottom space
    <section id="skills" className="pt-24 pb-0 mb-0 bg-slate-50 px-4"> 
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">💻 Technical Skills</h2>
          <div className="h-1.5 w-20 bg-blue-600 rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-0">
          {/* Left Column: Development Bars */}
          <div className="space-y-10">
            <div>
              <div className="flex items-center gap-3 mb-6 text-blue-600 font-bold">
                <Code2 size={24} />
                <h3 className="text-xl">Frontend Development</h3>
              </div>
              <div className="space-y-6">
                {skillCategories.frontend.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold text-slate-700">{skill.name}</span>
                      <span className="text-slate-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="h-full bg-blue-600 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-6 text-blue-600 font-bold">
                <Server size={24} />
                <h3 className="text-xl">Backend & Databases</h3>
              </div>
              <div className="space-y-6">
                {skillCategories.backend.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold text-slate-700">{skill.name}</span>
                      <span className="text-slate-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="h-full bg-slate-800 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Infra & Tools */}
          <div className="space-y-10">
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
              <div className="flex items-center gap-3 mb-6 text-blue-600 font-bold">
                <Laptop size={24} />
                <h3 className="text-xl">Networking & IT</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {skillCategories.infrastructure.map((tool) => (
                  <span 
                    key={tool} 
                    className="px-4 py-2 bg-slate-50 text-slate-600 rounded-xl text-sm font-medium border border-slate-100 hover:border-blue-200 hover:bg-blue-50 transition-colors"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-blue-600 p-8 rounded-3xl text-white shadow-xl shadow-blue-100 mb-0">
              <div className="flex items-center gap-3 mb-4 font-bold">
                <Settings size={24} />
                <h3 className="text-xl">Environment & Workflow</h3>
              </div>
              <p className="text-blue-100 text-sm leading-relaxed mb-4">
                I maintain a high-standard development workflow using modern environments like 
                VS Code, Git for version control, and Vite for lightning-fast build cycles.
              </p>
              <ul className="grid grid-cols-2 gap-2 text-xs font-bold uppercase tracking-wider">
                <li className="flex items-center gap-2">🟢 CLI Mastery</li>
                <li className="flex items-center gap-2">🟢 Agile Workflow</li>
                <li className="flex items-center gap-2">🟢 OOP Principles</li>
                <li className="flex items-center gap-2">🟢 MVC Pattern</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;