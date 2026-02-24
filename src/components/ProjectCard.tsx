import { motion } from 'framer-motion';
import type { Project } from '../types';
const ProjectCard = ({ project }: { project: Project }) => { // Ensures 'project' is defined
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500"
    >
      <div className="relative h-64 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
          <div className="flex gap-4">
          
            {project.liveUrl !== "#"}
          </div>
        </div>
      </div>

      <div className="p-8">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.map((tech) => (
            <span key={tech} className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-bold rounded-lg uppercase tracking-wider">
              {tech}
            </span>
          ))}
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-3">{project.title}</h3>
        <p className="text-slate-600 text-sm leading-relaxed">
          {project.description}
        </p>
      </div>
    </motion.div>
  );
};

export default ProjectCard; // Fixes "Module has no default export"