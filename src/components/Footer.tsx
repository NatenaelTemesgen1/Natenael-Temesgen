import { Github, Linkedin, Twitter, ArrowUp } from 'lucide-react';
import { me } from '../data/config';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1">
            <span className="text-2xl font-bold text-white tracking-tighter">NATENAEL.T</span>
            <p className="mt-4 text-sm leading-relaxed">
              Building robust digital solutions with a focus on clean code and user-centric design.
            </p>
          </div>

          {/* Navigation Column - Internal Links */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Navigation</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#home" className="hover:text-blue-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-blue-400 transition-colors">About Me</a></li>
              <li><a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a></li>
              <li><a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a></li>
              <li><a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Expertise Column */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Expertise</h4>
            <ul className="space-y-4 text-sm">
              <li className="text-slate-500">Frontend Development</li>
              <li className="text-slate-500">Backend Systems</li>
              <li className="text-slate-500">Network Infrastructure</li>
              <li className="text-slate-500">Database Design</li>
            </ul>
          </div>

          {/* Social Column - External Links */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Social Presence</h4>
            <div className="flex gap-4">
              {/* GitHub */}
              <a 
                href={me.socials.github} 
                target="_blank" 
                rel="noreferrer" 
                className="p-2 bg-slate-800 rounded-lg hover:bg-slate-700 hover:text-white transition-all"
              >
                <Github size={20} />
              </a>

              {/* LinkedIn */}
              <a 
                href={me.socials.linkedin} 
                target="_blank" 
                rel="noreferrer" 
                className="p-2 bg-slate-800 rounded-lg hover:bg-blue-600 hover:text-white transition-all"
              >
                <Linkedin size={20} />
              </a>

              {/* Twitter/X */}
              <a 
                href={me.socials.twitter} 
                target="_blank" 
                rel="noreferrer" 
                className="p-2 bg-slate-800 rounded-lg hover:bg-blue-400 hover:text-white transition-all"
              >
                <Twitter size={20} />
              </a>
            </div>
            
            <button 
              onClick={scrollToTop}
              className="mt-8 flex items-center gap-2 text-xs font-bold text-blue-400 hover:text-blue-300 transition-colors uppercase"
            >
              Back to top <ArrowUp size={14} />
            </button>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
          <p>© {currentYear} Natenael Temesgen.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;