import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';
import { motion } from 'framer-motion';
import { me } from '../data/config';
const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-white px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-blue-600 font-bold tracking-widest uppercase text-sm">Projects</span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-2 mb-6">Recent Work</h2>
          <div className="h-1.5 w-20 bg-blue-600 rounded-full"></div>
        </motion.div>
{/* After the Header and before the Grid */}
<motion.div 
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  className="bg-blue-50 border-l-4 border-blue-600 p-8 rounded-r-2xl mb-12 max-w-4xl mx-auto"
>
  <p className="text-slate-700 leading-relaxed italic">
    "I have developed multiple web and desktop applications using technologies such as HTML, CSS, JavaScript, PHP, Python (Django), Java, and MySQL. My projects focus on solving real-world problems including management systems, booking platforms, and inventory tracking solutions."
  </p>
</motion.div>
        {/* Project Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Call to Action for more work */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 text-center"
        >
          <p className="text-slate-500 italic">
            Check out more of my experiments on{" "}
             <a href={me.socials.twitter} target='blank' className="text-blue-600 font-bold hover:underline">GitHub</a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;